import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import LineDivider from '../../ui/LineDivider';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  titleStyle?: StyleProp<TextStyle>;
}

const TextEntry: React.FC<OwnProps> = ({
  containerStyle,
  title,
  onPress,
  titleStyle,
}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
      <LineDivider />
    </View>
  );
};

export default TextEntry;
