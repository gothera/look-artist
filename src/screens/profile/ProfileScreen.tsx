import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { resetGenericPassword } from 'react-native-keychain';
import { pushAuthScreen } from '../../navigation';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableHighlight
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: 'red',
        }}
        onPress={() => {
          resetGenericPassword();
          pushAuthScreen();
        }}
      >
        <Text>PRESS LOGOUT</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
