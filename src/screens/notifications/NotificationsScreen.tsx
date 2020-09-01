import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderScreenBigTitle from '../../components/header/HeaderScreenBigTitle';

const NotificationsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderScreenBigTitle title="Notifi" />
      <Text>notifications screen</Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
