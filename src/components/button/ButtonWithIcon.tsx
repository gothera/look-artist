import React from 'react';
import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  View,
} from 'react-native';
import { color, typography } from '../../theme';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  title: string;
  icon: JSX.Element;
}

const ButtonWithIcon: React.FC<OwnProps> = ({
  containerStyle,
  onPress,
  title,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      disabled
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

interface Style {
  container: ViewStyle;
  text: TextStyle;
  iconContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    backgroundColor: color.textInverted,
    borderWidth: 0.5,
    // borderColor: color.textPrimary,
    borderColor: color.muted,
  },
  text: {
    ...typography.button,
    // color: color.textPrimary,
    color: color.muted,
    paddingBottom: 13,
    paddingTop: 14,
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    opacity: 0.2,
  },
});

export default ButtonWithIcon;
