import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { typography, color } from '../../../theme';

interface OwnProps {
  title: string;
  description: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const StepTitle: React.FC<OwnProps> = ({
  title,
  description,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

interface Style {
  title: TextStyle;
  description: TextStyle;
}

const styles = StyleSheet.create<Style>({
  title: {
    ...typography.descriptiveHeader,
    color: color.textPrimary,
  },
  description: {
    ...typography.headerDescription,
    color: color.muted,
    marginTop: 10,
  },
});

export default StepTitle;
