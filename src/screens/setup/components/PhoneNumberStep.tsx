import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { connect, ConnectedProps } from 'react-redux';
import PrimaryButton from '../../../components/button/PrimaryButton';
import TextInputWithLabel from '../../../components/input/TextInputWithLabel';
import { setPhoneNumber } from '../../../store/profile/profile.actions';
import { AsyncDispatch } from '../../../store/store.types';
import { color } from '../../../theme';
import StepTitle from './StepTitle';

interface OwnProps {
  slideToNext: () => void;
  isFocused?: boolean;
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  setPhoneNumber: (phoneNumber: string) =>
    dispatch(setPhoneNumber(phoneNumber)),
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const PhoneNumberStep: React.FC<OwnProps & PropsFromRedux> = ({
  slideToNext,
  isFocused,
  setPhoneNumber,
}) => {
  const [phoneNumberStr, setPhoneNumberStr] = useState('');

  const onContinuePress = () => {
    setPhoneNumber(phoneNumberStr);
    slideToNext();
  };

  const isContinueDisabled = phoneNumberStr === '';

  return (
    <View style={styles.container}>
      <ScrollView>
        <StepTitle
          title="What's your phone number?"
          description="Needed for talking"
        />
        <TextInputWithLabel
          containerStyle={styles.input}
          label="Phone Number"
          shouldAutofocus={isFocused}
          placeholder="Enter phone number"
          keyboardType="number-pad"
          setText={setPhoneNumberStr}
          text={phoneNumberStr}
        />
      </ScrollView>
      <KeyboardAccessoryView alwaysVisible style={styles.keyboardAccessory}>
        <PrimaryButton
          title="Continue"
          onPress={onContinuePress}
          isDisabled={isContinueDisabled}
        />
      </KeyboardAccessoryView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  input: ViewStyle;
  keyboardAccessory: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 40,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 30,
  },
  keyboardAccessory: {
    backgroundColor: color.background,
    marginBottom: 20,
    borderTopWidth: 0,
  },
});

export default connector(PhoneNumberStep) as React.FC<OwnProps>;
