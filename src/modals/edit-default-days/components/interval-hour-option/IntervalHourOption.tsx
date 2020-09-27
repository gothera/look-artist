import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { color } from '../../../../theme';
import { showSelectTimeModal } from '../../../../navigation';

interface OwnProps {
  title: string;
  isLast?: boolean;
  selectedHour?: string;
  setHour: (hour: string) => void;
}

const IntervalHourOption: React.FC<OwnProps> = ({
  title,
  isLast,
  selectedHour,
  setHour,
}) => {
  const onHourPress = () => {
    showSelectTimeModal({
      props: {
        setHour: setHour,
        startingTime: selectedHour || '00:00',
      },
    });
  };
  return (
    <TouchableHighlight onPress={onHourPress} underlayColor={color.highlight}>
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
