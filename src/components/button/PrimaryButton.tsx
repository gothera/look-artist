import React from 'react';
import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import { color, typography } from '../../theme';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  title: string;
  isDisabled?: boolean;
}

const PrimaryButton: React.FC<OwnProps> = ({
  containerStyle,
  onPress,
  title,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, isDisabled && styles.disabled]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={styles.text}>{title}</Text>
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
    borderRadius: 4,
    backgroundColor: color.brand,
  },
  text: {
    ...typography.button,
    color: color.textInverted,
    paddingBottom: 12,
    paddingTop: 13,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: color.unchosen,
  },
});

export default PrimaryButton;
