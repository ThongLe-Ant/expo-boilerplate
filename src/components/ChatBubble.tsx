import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ChatBubbleProps {
  text: string;
  isSender?: boolean;
  time?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}

export default function ChatBubble({ text, isSender, time, avatar, status }: ChatBubbleProps) {
  return (
    <View style={[styles.container, isSender ? styles.right : styles.left]}>
      {!isSender && avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <View style={[styles.bubble, isSender ? styles.bubbleSender : styles.bubbleReceiver]}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.meta}>
          {time && <Text style={styles.time}>{time}</Text>}
          {status && isSender && <Text style={styles.status}>{status}</Text>}
        </View>
      </View>
      {isSender && avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  bubble: {
    maxWidth: '75%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 2,
  },
  bubbleSender: {
    backgroundColor: '#FE8C00',
    borderTopRightRadius: 4,
  },
  bubbleReceiver: {
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 4,
  },
  text: {
    color: '#101010',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 15,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
  time: {
    fontSize: 11,
    color: '#878787',
    fontFamily: 'Montserrat_500Medium',
    marginRight: 6,
  },
  status: {
    fontSize: 11,
    color: '#FE8C00',
    fontFamily: 'Montserrat_500Medium',
  },
}); 