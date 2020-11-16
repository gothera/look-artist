import React from 'react';
import {
  ActivityIndicator,
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
  loading?: boolean;
}

const PrimaryButton: React.FC<OwnProps> = ({
  containerStyle,
  onPress,
  title,
  isDisabled,
  textStyles,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, isDisabled && styles.disabled]}
      onPress={onPress}
      disabled={isDisabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={color.background} />
      ) : (
        <Text style={[styles.text, textStyles]}>{title}</Text>
      )}
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
    height: 42,
  },
  text: {
    ...typography.button,
    color: color.textInverted,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: color.unchosen,
  },
});

export default PrimaryButton;
