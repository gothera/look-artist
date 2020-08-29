import React, {
  useState,
  createRef,
  useEffect,
  RefObject,
  useImperativeHandle,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import { typography, color } from '../../theme';
import LineDivider from '../ui/LineDivider';
import { TextInputRef } from '../../screens/auth/components/LoginContent';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  label: string;
  // onValueChanged?: (text: string) => void;
  shouldAutofocus?: boolean;
  placeholder: string;
  maxLengthUndefined?: boolean;
  multiline?: boolean;
  numOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
  passedRef: RefObject<TextInputRef>;
}

const TextInputWithLabel: React.FC<OwnProps> = ({
  containerStyle,
  label,
  shouldAutofocus,
  placeholder,
  maxLengthUndefined,
  multiline,
  numOfLines,
  keyboardType,
  passedRef,
}) => {
  const [text, setText] = useState('');

  const getValue = () => text;

  useImperativeHandle(passedRef, () => ({ getValue }));

  const textInputRef = createRef<TextInput>();

  useEffect(() => {
    if (textInputRef && textInputRef.current && shouldAutofocus) {
      setTimeout(() => {
        if (textInputRef && textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 500);
    }
  }, [shouldAutofocus]);

  const _onChangeText = (newText: string) => {
    setText(newText);
    // onValueChanged && onValueChanged(newText);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={textInputRef}
        style={styles.input}
        keyboardType={keyboardType || 'email-address'}
        maxLength={maxLengthUndefined ? undefined : 80}
        value={text}
        onChangeText={_onChangeText}
        returnKeyType="next"
        autoCapitalize="none"
        placeholder={placeholder}
        numberOfLines={numOfLines}
        multiline={multiline}
      />
      <LineDivider />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
  },
  label: {
    ...typography.textInputLabel,
    color: color.muted,
  },
  input: {
    ...typography.textInput,
    color: color.textSecondary,
    paddingVertical: 8,
  },
});

export default TextInputWithLabel;
