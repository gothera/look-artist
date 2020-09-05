import React, { useState, useRef } from 'react';
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
import { login, signUp } from '../../../store/profile/profile.actions';
import { connect, ConnectedProps } from 'react-redux';
import { pushSetupScreen, pushHomeScreen } from '../../../navigation';
import { TextInputRef } from '../../../types/refTypes';

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
  const emailRef = useRef<TextInputRef>(null);
  const passwordRef = useRef<TextInputRef>(null);

  const [isEmailEnteredEmpty, setIsEmailEnteredEmpty] = useState(true);
  const [isPasswordEnteredEmpty, setIsPasswordEnteredEmpty] = useState(true);

  const isContinueBtnDisabled = isEmailEnteredEmpty || isPasswordEnteredEmpty;

  const onEmailChangeState = (newState: boolean) => {
    // update state only if needed
    if (isEmailEnteredEmpty && !newState) {
      setIsEmailEnteredEmpty(false);
    } else if (!isEmailEnteredEmpty && newState) {
      setIsEmailEnteredEmpty(true);
    }
  };

  const onPasswordChangeState = (newState: boolean) => {
    if (isPasswordEnteredEmpty && !newState) {
      setIsPasswordEnteredEmpty(false);
    } else if (!isPasswordEnteredEmpty && newState) {
      setIsPasswordEnteredEmpty(true);
    }
  };

  const onContinuePress = () => {
    // pushHomeScreen();
    // pushSetupScreen();
    const emailEntered = emailRef.current?.getValue() || '';
    const passwordEntered = passwordRef.current?.getValue() || '';
    signUp(emailEntered, passwordEntered);
  };

  // const isContinueBtnDisabled = () => false;

  return (
    <View style={styles.container}>
      <LogoOnHeader />
      <Text style={styles.header}>Welcome to look for artists</Text>
      <Text style={styles.headerDescription}>
        Register and get your appointments to the next level
      </Text>
      <TextInputWithLabel
        containerStyle={styles.emailTextInput}
        label="Email address"
        passedRef={emailRef}
        placeholder={'Enter email address'}
        onUpdateParentState={onEmailChangeState}
      />
      <PasswordInputWithLabel
        containerStyle={styles.passwordInput}
        placeholder={'Enter password'}
        passedRef={passwordRef}
        onUpdateParentState={onPasswordChangeState}
        description={'Must include a number and have at least 8 characters'}
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
    position: 'absolute',
    zIndex: 2,
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

export default connector(SignInContent) as React.FC<OwnProps>;
