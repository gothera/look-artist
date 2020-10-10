import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import PressableCircleDay from '../../../../components/button/pressable-circle-day/PressableCircleDay';
import { DaysAbbreviation } from '../../../../types/enums';

interface OwnProps {
  selectedDays: DaysAbbreviation[];
  onDayPress: (dayParam: DaysAbbreviation) => void;
}

const ChooseWeekDays: React.FC<OwnProps> = ({ selectedDays, onDayPress }) => {
  const isMonSelected = selectedDays.includes(DaysAbbreviation.Mon);
  const isTueSelected = selectedDays.includes(DaysAbbreviation.Tue);
  const isWedSelected = selectedDays.includes(DaysAbbreviation.Wed);
  const isThuSelected = selectedDays.includes(DaysAbbreviation.Thu);
  const isFriSelected = selectedDays.includes(DaysAbbreviation.Fri);
  const isSatSelected = selectedDays.includes(DaysAbbreviation.Sat);
  const isSunSelected = selectedDays.includes(DaysAbbreviation.Sun);

  return (
    <View style={styles.container}>
      <Text style={styles.chooseDaysText}>
        {strings.modal.editDefaultDays.chooseDaysDescription}
      </Text>
      <View style={styles.daysRowContainer}>
        <PressableCircleDay
          day={DaysAbbreviation.Mon}
          onPress={onDayPress}
          isSelected={isMonSelected}
        />
        <PressableCircleDay
          day={DaysAbbreviation.Tue}
          onPress={onDayPress}
          isSelected={isTueSelected}
        />
        <PressableCircleDay
          day={DaysAbbreviation.Wed}
          onPress={onDayPress}
          isSelected={isWedSelected}
        />
        <PressableCircleDay
          day={DaysAbbreviation.Thu}
          onPress={onDayPress}
          isSelected={isThuSelected}
        />
        <PressableCircleDay
          day={DaysAbbreviation.Fri}
          onPress={onDayPress}
          isSelected={isFriSelected}
        />
        <PressableCircleDay
          day={DaysAbbreviation.Sat}
          onPress={onDayPress}
          isSelected={isSatSelected}
        />
        <PressableCircleDay
          day={DaysAbbreviation.Sun}
          onPress={onDayPress}
          isSelected={isSunSelected}
        />
      </View>
    </View>
  );
};

export default ChooseWeekDays;
