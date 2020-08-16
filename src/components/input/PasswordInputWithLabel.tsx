import React, { useState } from 'react';
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

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  onValueChanged?: (text: string) => void;
  placeholder: string;
  description?: string;
}

const PasswordInputWithLabel: React.FC<OwnProps> = ({
  containerStyle,
  onValueChanged,
  placeholder,
  description,
}) => {
  const [text, setText] = useState('');
  const _onChangeText = (newText: string) => {
    setText(newText);
    onValueChanged && onValueChanged(newText);
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
