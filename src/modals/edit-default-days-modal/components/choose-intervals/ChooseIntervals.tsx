import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import IntervalHourOption from '../interval-hour-option/IntervalHourOption';

interface OwnProps {
  showIntervals: boolean;
  startingHour?: string;
  endingHour?: string;
}

const ChooseIntervals: React.FC<OwnProps> = ({
  showIntervals,
  startingHour,
  endingHour,
}) => {
  return (
    <>
      {showIntervals && (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.chooseTitle}>
              {strings.modal.editDefaultDays.chooseSchedule}
            </Text>
            <Text style={styles.chooseDescription}>
              {strings.modal.editDefaultDays.chooseScheduleDesc}
            </Text>
          </View>
          <View style={styles.optionsContainer}>
            <IntervalHourOption
              title={strings.modal.editDefaultDays.startingHour}
              selectedHour={startingHour}
            />
            <IntervalHourOption
              title={strings.modal.editDefaultDays.endingHour}
              selectedHour={endingHour}
              isLast
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ChooseIntervals;
