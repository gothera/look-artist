import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { color, typography } from '../../theme';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress: () => void;
  title: string;
  isDisabled?: boolean;
}

const PrimaryButton: React.FC<OwnProps> = ({
  containerStyle,
  onPress,
  title,
  isDisabled,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, isDisabled && styles.disabled]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

interface Style {
  container: ViewStyle;
  text: TextStyle;
  disabled: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    backgroundColor: color.brand,
  },
  text: {
    ...typography.button,
    color: color.textInverted,
    paddingBottom: 13,
    paddingTop: 14,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: color.unchosen,
  },
});

export default PrimaryButton;
