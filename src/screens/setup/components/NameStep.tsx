import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  ScrollView,
} from 'react-native';
import StepTitle from './StepTitle';
import { color, typography } from '../../../theme';
import PrimaryButton from '../../../components/button/PrimaryButton';
import TextInputWithLabel from '../../../components/input/TextInputWithLabel';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { connect, ConnectedProps } from 'react-redux';
import { AsyncDispatch } from '../../../store/store.types';
import { setName } from '../../../store/profile/profile.actions';

interface OwnProps {
  slideToNext: () => void;
  isFocused?: boolean;
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  setName: (firstName: string, lastName: string) =>
    dispatch(setName(firstName, lastName)),
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const NameStep: React.FC<OwnProps & PropsFromRedux> = ({
  slideToNext,
  isFocused,
  setName,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onFirstNameChanged = (text: string) => {
    setFirstName(text);
  };

  const onLastNameChanged = (text: string) => {
    setLastName(text);
  };

  const isContinueDisabled = firstName === '' || lastName === '';

  const onContinuePress = () => {
    setName(firstName, lastName);
    slideToNext();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StepTitle
          title="What's your name?"
          description="This is how others will see you"
        />
        <TextInputWithLabel
          containerStyle={styles.firstNameContainer}
          label="First Name"
          onValueChanged={onFirstNameChanged}
          shouldAutofocus={isFocused}
          placeholder="Enter first name"
        />
        <TextInputWithLabel
          containerStyle={styles.lastNameContainer}
          label="Last Name"
          onValueChanged={onLastNameChanged}
          placeholder="Enter last name"
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
  avatarContainer: ViewStyle;
  chooseBtnContainer: ViewStyle;
  chooseText: TextStyle;
  btnContainer: ViewStyle;
  firstNameContainer: ViewStyle;
  lastNameContainer: ViewStyle;
  keyboardAccessory: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 40,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  chooseBtnContainer: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 20,
  },
  chooseText: {
    color: color.brand,
    ...typography.button,
  },
  btnContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 50,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  firstNameContainer: {
    marginTop: 60,
  },
  lastNameContainer: {
    marginTop: 40,
  },
  keyboardAccessory: {
    backgroundColor: color.background,
    marginBottom: 20,
    borderTopWidth: 0,
  },
});

export default connector(NameStep) as React.FC<OwnProps>;
