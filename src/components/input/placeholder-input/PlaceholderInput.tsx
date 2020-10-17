import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { color } from '../../../theme';
import LineDivider from '../../ui/LineDivider';

interface OwnProps {
  label: string;
  placeholder: string;
  text?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const PlaceholderInput: React.FC<OwnProps> = ({
  label,
  placeholder,
  text,
  containerStyle,
  onPress,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.pressableContainer} onPress={onPress}>
        {text ? (
          <Text style={styles.input}>{text}</Text>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
      </TouchableOpacity>
      <LineDivider />
    </View>
  );
};

export default PlaceholderInput;
