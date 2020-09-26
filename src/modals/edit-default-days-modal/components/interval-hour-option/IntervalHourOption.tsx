import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { color } from '../../../../theme';

interface OwnProps {
  title: string;
  isLast?: boolean;
  selectedHour?: string;
}

const IntervalHourOption: React.FC<OwnProps> = ({
  title,
  isLast,
  selectedHour,
}) => {
  return (
    <TouchableHighlight onPress={() => {}} underlayColor={color.highlight}>
      <View style={[styles.container, isLast && styles.bottomBorder]}>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[
            styles.selectHourText,
            selectedHour !== undefined && styles.selectedHour,
          ]}
        >
          {selectedHour || 'Select'}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default IntervalHourOption;
