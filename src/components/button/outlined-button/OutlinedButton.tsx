import React from 'react';
import { Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
}

const OutlinedButton: React.FC<OwnProps> = ({
  containerStyle,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;
