import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { DaysAbbreviation } from '../../../types/enums';
import { dayAbbEnumValue } from '../../../utils/global';

interface OwnProps {
  day: DaysAbbreviation;
  onPress: (dayParam: DaysAbbreviation) => void;
  isSelected: boolean;
}

const PressableCircleDay: React.FC<OwnProps> = ({
  day,
  onPress,
  isSelected,
}) => {
  const title = dayAbbEnumValue(day);

  const onBtnPress = () => {
    onPress(day);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonCircle, isSelected && styles.buttonCircleSelected]}
        onPress={onBtnPress}
      >
        <Text style={[styles.title, isSelected && styles.titleSelected]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PressableCircleDay;
