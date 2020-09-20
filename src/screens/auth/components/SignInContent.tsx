import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import ButtonWithIcon from '../../../components/button/ButtonWithIcon';
import PrimaryButton from '../../../components/button/PrimaryButton';
import PasswordInputWithLabel from '../../../components/input/PasswordInputWithLabel';
import TextInputWithLabel from '../../../components/input/TextInputWithLabel';
import OrLineDivider from '../../../components/ui/OrLineDivider';
import { FacebookBtnIcon, GoogleBtnIcon, LogoOnHeader } from '../../../res/svg';
import { signUp } from '../../../store/profile/profile.actions';
import { AsyncDispatch } from '../../../store/store.types';
import { color, typography, spacing } from '../../../theme';

interface OwnProps {
  componentId: string;
  onChangeAuthType: () => void;
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  signUp: (email: string, password: string) =>
    dispatch(signUp(email, password)),
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const SignInContent: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  onChangeAuthType,
  signUp,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isContinueBtnDisabled = email === '' || password === '';

  const onContinuePress = () => {
    // pushHomeScreen();
    // pushSetupScreen();

    signUp(email, password);
  };

  // const isContinueBtnDisabled = () => false;

  return (
    <View style={styles.container}>
      <LogoOnHeader />
      <Text style={styles.header}>Welcome to look for artists</Text>
      <Text style={styles.headerDescription}>
        Get your appointments to the next level
      </Text>
      <TextInputWithLabel
        containerStyle={styles.emailTextInput}
        label="Email address"
        placeholder={'Enter email address'}
        setText={setEmail}
        text={email}
      />
      <PasswordInputWithLabel
        containerStyle={styles.passwordInput}
        placeholder={'Enter password'}
        description={'Must include a number and have at least 8 characters'}
        setText={setPassword}
        text={password}
      />
      <PrimaryButton
        title="Create account"
        onPress={onContinuePress}
        containerStyle={styles.socialBtn}
        isDisabled={isContinueBtnDisabled}
      />
      <OrLineDivider containerStyle={styles.orDividerContainer} />
      <ButtonWithIcon
        title="Continue with Facebook"
        onPress={() => {}}
        containerStyle={styles.socialBtn}
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
          Already have an account?
        </Text>
        <TouchableOpacity onPress={onChangeAuthType}>
          <Text style={styles.alreadyOptionText}>Login</Text>
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
    flex: 1,
    width: '100%',
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
    marginTop: spacing.extraLarge,
    minWidth: '100%',
  },
  passwordInput: {
    marginTop: spacing.larger,

    minWidth: '100%',
  },
  orDividerContainer: {
    marginVertical: 30,
  },
  socialBtn: {
    minWidth: '100%',
    marginTop: 20,
  },
});

export default connector(SignInContent) as React.FC<OwnProps>;
