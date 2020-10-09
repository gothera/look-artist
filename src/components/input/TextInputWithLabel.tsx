import React, { createRef, useEffect } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { color, spacing, typography } from '../../theme';
import LineDivider from '../ui/LineDivider';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;

  label: string;
  shouldAutofocus?: boolean;
  placeholder: string;
  maxLengthUndefined?: boolean;
  multiline?: boolean;
  numOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
  setText: (_: string) => void;
  text: string;
  dividerStyle?: ViewStyle;
  labelStyle?: StyleProp<TextStyle>;
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
  setText,
  labelStyle,
  text,
  dividerStyle,
}) => {
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
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
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
      <LineDivider containerStyle={dividerStyle} />
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
    marginTop: spacing.smallest,
  },
});

export default TextInputWithLabel;
