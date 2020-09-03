import React, { useState, RefObject, useImperativeHandle } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
  TextInput,
} from 'react-native';
import { typography, color } from '../../theme';
import LineDivider from '../ui/LineDivider';
import { TextInputRef } from '../../types/refTypes';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder: string;
  description?: string;
  passedRef: RefObject<TextInputRef>;
  onUpdateParentState?: (newState: boolean) => void;
}

const PasswordInputWithLabel: React.FC<OwnProps> = ({
  containerStyle,
  placeholder,
  description,
  passedRef,
  onUpdateParentState,
}) => {
  const [text, setText] = useState('');

  const getValue = () => text;

  useImperativeHandle(passedRef, () => ({ getValue }));

  const _onChangeText = (newText: string) => {
    setText((oldText) => {
      if (onUpdateParentState) {
        if (oldText === '') {
          onUpdateParentState(false);
        } else if (newText === '') {
          onUpdateParentState(true);
        }
      }
      return newText;
    });
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>Password</Text>
      {description && (
        <Text style={styles.labelDescription}>{description}</Text>
      )}
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        maxLength={80}
        value={text}
        onChangeText={_onChangeText}
        returnKeyType="done"
        placeholder={placeholder}
      />
      <LineDivider />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  labelDescription: TextStyle;
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
  labelDescription: {
    ...typography.textInputLabelDescription,
    color: color.muted,
    marginTop: 2,
  },
});

export default PasswordInputWithLabel;
