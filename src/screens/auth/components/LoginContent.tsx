import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Animated,
  StyleProp,
} from 'react-native';
import { LogoOnHeader, FacebookBtnIcon, GoogleBtnIcon } from '../../../res/svg';
import { typography, color } from '../../../theme';
import TextInputWithLabel from '../../../components/input/TextInputWithLabel';
import PasswordInputWithLabel from '../../../components/input/PasswordInputWithLabel';
import PrimaryButton from '../../../components/button/PrimaryButton';
import OrLineDivider from '../../../components/ui/OrLineDivider';
import ButtonWithIcon from '../../../components/button/ButtonWithIcon';
import { AsyncDispatch } from '../../../store/store.types';
import { login } from '../../../store/profile/profile.actions';
import { connect, ConnectedProps } from 'react-redux';

interface OwnProps {
  componentId: string;
  onChangeAuthType: () => void;
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const LoginContent: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  login,
  onChangeAuthType,
}) => {
  const [emailEntered, setEmailEntered] = useState('');
  const [passwordEntered, setPasswordEntered] = useState('');

  const onEmailChanged = (text: string) => {
    setEmailEntered(text);
  };

  const onPasswordChanged = (text: string) => {
    setPasswordEntered(text);
  };

  const onContinuePress = () => {
    login(emailEntered, passwordEntered);
  };

  const isContinueBtnDisabled = () =>
    emailEntered === '' || passwordEntered === '';

  return (
    <View style={styles.container}>
      <LogoOnHeader />
      <Text style={styles.header}>Welcome to look for artists</Text>
      <Text style={styles.headerDescription}>
        Login back to handle your appointments
      </Text>
      <TextInputWithLabel
        containerStyle={styles.emailTextInput}
        label="Email address"
        placeholder={'Enter email address'}
        onValueChanged={onEmailChanged}
      />
      <PasswordInputWithLabel
        containerStyle={styles.passwordInput}
        placeholder={'Enter password'}
        onValueChanged={onPasswordChanged}
      />
      <PrimaryButton
        title="Continue"
        onPress={onContinuePress}
        containerStyle={styles.socialBtn}
        isDisabled={isContinueBtnDisabled()}
      />
      <OrLineDivider containerStyle={styles.orDividerContainer} />
      <ButtonWithIcon
        title="Continue with Facebook"
        onPress={() => {}}
        icon={<FacebookBtnIcon />}
      />
      <ButtonWithIcon
        title="Continue with Google"
        onPress={() => {}}
        containerStyle={styles.socialBtn}
        icon={<GoogleBtnIcon />}
      />
      <View style={styles.alreadyContainer}>
        <Text style={styles.alreadyDescriptionText}>
          Don't have an account yet?
        </Text>
        <TouchableOpacity onPress={onChangeAuthType}>
          <Text style={styles.alreadyOptionText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  header: TextStyle;
  headerDescription: TextStyle;
  alreadyContainer: ViewStyle;
  alreadyDescriptionText: TextStyle;
  alreadyOptionText: TextStyle;
  emailTextInput: ViewStyle;
  passwordInput: ViewStyle;
  orDividerContainer: ViewStyle;
  socialBtn: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  header: {
    ...typography.descriptiveHeader,
    marginTop: 25,
    color: color.textPrimary,
  },
  headerDescription: {
    ...typography.headerDescription,
    color: color.muted,
    marginTop: 10,
  },
  alreadyContainer: {
    marginTop: 30,
  },
  alreadyDescriptionText: {
    ...typography.paragraphQuestion,
  },
  alreadyOptionText: {
    ...typography.touchableWord,
    marginTop: 8,
  },
  emailTextInput: {
    marginTop: 60,
  },
  passwordInput: {
    marginTop: 30,
  },
  orDividerContainer: {
    marginVertical: 50,
  },
  socialBtn: {
    marginTop: 20,
  },
});

export default connector(LoginContent) as React.FC<OwnProps>;
