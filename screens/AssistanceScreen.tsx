import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import colors from '../constants/colors';
import StyledText from '../components/StyledText';
import i18next from 'i18next';
import {getMonth, getWeekday} from '../lib/utils/functions';
import {AppLanguage} from '../types';
import {useTranslation} from 'react-i18next';
import SendIcon from '../assets/svg/send.svg';
import AttachIcon from '../assets/svg/attach.svg';
import CloseIcon from '../assets/svg/close.svg';
import {launchImageLibrary} from 'react-native-image-picker';

const AssistanceScreen = () => {
  const {t} = useTranslation();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [messages, setMessages] = useState([
    {
      _id: 2,
      text: "Bonjour,\nJe rencontre quelques problèmes pour modifier les détails de l'événement que j'ai inséré dans l'application événementielle. J'ai essayé plusieurs fois, mais je ne parviens pas à effectuer les changements souhaités.\nPourriez-vous m'indiquer comment procéder pour effectuer ces modifications ? Si possible, pourriez-vous me fournir des instructions détaillées ou des captures d'écran pour mieux comprendre le processus ?",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'User',
      },
    },
  ]);
  const [day, month, weekDay, hour, minute] = useMemo(() => {
    const date = new Date();
    const theDay = date.getDate();
    const theMonth = getMonth(date.getMonth(), i18next.language as AppLanguage);
    const theWeekDay = getWeekday(
      date.getDay(),
      i18next.language as AppLanguage,
    );
    const theHout = date.getHours().toString().padStart(2, '0');
    const theMinute = date.getMinutes().toString().padStart(2, '0');
    return [theDay, theMonth, theWeekDay, theHout, theMinute];
  }, []);

  const renderBubble = useCallback(props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.secondaryVarient,
          },
          left: {
            backgroundColor: '#f0f0f0', // This is for received messages, you can change this as needed
          },
        }}
        textStyle={{
          right: {
            color: colors.black,
            fontFamily: 'DMSans-Medium',
            fontSize: 14,
          },
          left: {
            color: '#333', // This sets the text color for received messages, change as needed
          },
        }}
      />
    );
  }, []);

  const renderActions = useCallback(props => {
    const onAttach = () => {
      // Handle the attachment action here
      console.log('Attach button pressed');
    };

    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: 40,
        }}
        onPress={() => {}}>
        <AttachIcon width={24} height={24} />
      </TouchableOpacity>
    );
  }, []);

  const renderSend = useCallback(props => {
    return (
      <Send
        {...props}
        containerStyle={{
          justifyContent: 'center',
        }}>
        <SendIcon width={24} height={24} />
      </Send>
    );
  }, []);

  const renderInputToolbar = useCallback(
    props => {
      // Add additional props for customization
      return (
        <>
          {imageUri && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 4,
                height: 50,
              }}>
              <Image
                source={{uri: imageUri}}
                style={{width: 60, height: 50, borderRadius: 8}}
              />
              <TouchableOpacity onPress={() => setImageUri(null)}>
                <CloseIcon width={24} height={24} fill={'red'} />
              </TouchableOpacity>
            </View>
          )}
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: colors.black,
              borderTopWidth: 0,
              marginTop: 8,
            }}
            textInputStyle={{
              color: colors.white,
            }}
            renderSend={renderSend}
            renderActions={renderActions}
          />
        </>
      );
    },
    [imageUri, renderSend, renderActions],
  );

  const onSend = useCallback(
    (messages: any = []) => {
      if (imageUri) {
        messages[0].image = imageUri;
        setImageUri(null); // Clear the image preview after sending
      }
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );
    },
    [imageUri],
  );

  const handlePickImage = useCallback(async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.7,
      selectionLimit: 1,
    });
    if (!result.didCancel) {
      setImageUri(result.assets?.[0].uri as string);
    }
  }, []);

  return (
    <ScreenWrapper withHeader>
      <StyledText
        fontWeight="bold"
        text={t('assistance') + ' 💬'}
        color={colors.white}
        fontSize={24}
      />
      <View
        style={{
          marginTop: 40,
          gap: 4,
          marginBottom: 16,
        }}>
        <StyledText
          text={t('formatted_date', {
            day: day,
            month: month,
            weekDay: weekDay,
            hour: hour,
            minute: minute,
          })}
          fontSize={14}
          fontWeight="medium"
          style={{
            textAlign: 'center',
          }}
          color={colors.primaryVarient}
        />
        <StyledText
          style={{
            textAlign: 'center',
          }}
          color={colors.lightGrey}
          fontSize={14}
          text={t('chat_feedback_message')}
        />
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        showUserAvatar={false}
        alwaysShowSend
        renderAvatar={null}
        timeTextStyle={{
          right: {
            color: colors.grey,
            fontSize: 12,
          },
          left: {
            color: colors.grey,
            fontSize: 12,
          },
        }}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
      />
      <View style={{}}></View>
    </ScreenWrapper>
  );
};

export default AssistanceScreen;

const styles = StyleSheet.create({});
