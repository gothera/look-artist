import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';
import strings from '../../../res/strings/strings';
import IntervalHourOption from '../../../modals/edit-weekly-program/components/interval-hour-option/IntervalHourOption';

interface OwnProps {
  showIntervals: boolean;
  startingHour?: string;
  endingHour?: string;
  setStartingHour: (hour: string) => void;
  setEndingHour: (hour: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const ChooseIntervals: React.FC<OwnProps> = ({
  showIntervals,
  startingHour,
  endingHour,
  setStartingHour,
  setEndingHour,
  containerStyle,
}) => {
  return (
    <>
      {showIntervals && (
        <View style={[styles.container, containerStyle]}>
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
              setHour={setStartingHour}
            />
            <IntervalHourOption
              title={strings.modal.editDefaultDays.endingHour}
              selectedHour={endingHour}
              setHour={setEndingHour}
              isLast
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ChooseIntervals;
