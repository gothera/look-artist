import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ChooseWeekDays from './components/choose-week-days/ChooseWeekDays';
import { DaysAbbreviation } from '../../types/enums';
import ChooseIntervals from './components/choose-intervals/ChooseIntervals';
import FooterOptions from '../../components/footer/footer-options/FooterOptions';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const DefaultDaysModal: React.FC<OwnProps> = ({ componentId }) => {
  const [selectedDays, setSelectedDays] = useState<DaysAbbreviation[]>([]);
  const [showIntervals, setShowIntervals] = useState(false);

  const [startingHour, setStartingHour] = useState<string | undefined>('08:00');
  const [endingHour, setEndingHour] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (selectedDays.length > 0 && showIntervals === false) {
      setShowIntervals(true);
    }
    if (selectedDays.length === 0 && showIntervals === true) {
      setShowIntervals(false);
    }
  }, [selectedDays]);

  const onDayPress = (day: DaysAbbreviation) => {
    if (!selectedDays.includes(day)) {
      setSelectedDays([...selectedDays, day]);
    } else {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day),
      );
    }
  };
  return (
    <View style={styles.container}>
      <ChooseWeekDays selectedDays={selectedDays} onDayPress={onDayPress} />
      <ChooseIntervals
        showIntervals={showIntervals}
        startingHour={startingHour}
        endingHour={endingHour}
      />
      <FooterOptions></FooterOptions>
    </View>
  );
};

export default DefaultDaysModal;
