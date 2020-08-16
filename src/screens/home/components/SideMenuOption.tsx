import React from 'react';
import {
  StyleSheet,
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  StyleProp,
} from 'react-native';
import { typography, color } from '../../../theme';

interface OwnProps {
  name: string;
  icon: JSX.Element;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const SideMenuOption: React.FC<OwnProps> = ({ name, icon, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {icon}
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
};

interface Style {
  container: ViewStyle;
  nameText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  nameText: {
    ...typography.sideMenuOption,
    marginLeft: 16,
    color: color.textSecondary,
  },
});

export default SideMenuOption;
