import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { color } from '../../../../theme';
import { SelectedDateCalendar } from '../../../../types/globalTypes';

interface OwnProps {
  selectedDates: SelectedDateCalendar;
  setNewDaySelected: (date: string) => void;
}

const CalendarSelectDays: React.FC<OwnProps> = ({
  selectedDates,
  setNewDaySelected,
}) => {
  const dateNow = new Date().toISOString().split('T')[0];

  return (
    <CalendarList
      markedDates={selectedDates}
      current={dateNow}
      pastScrollRange={24}
      futureScrollRange={24}
      horizontal
      pagingEnabled
      firstDay={1}
      onDayPress={(day) => {
        setNewDaySelected(day.dateString);
      }}
      theme={{
        calendarBackground: color.background,
        selectedDayBackgroundColor: color.brand,
        selectedDayTextColor: color.background,
        todayTextColor: color.brand,
        dayTextColor: color.textSecondary,
        arrowColor: 'orange',
        textDayFontFamily: 'Gilroy-Regular',
        textDayHeaderFontFamily: 'Gilroy-Regular',
        textDayFontSize: 15,
        textMonthFontFamily: 'Gilroy-Medium',
      }}
    />
  );
};

export default CalendarSelectDays;
