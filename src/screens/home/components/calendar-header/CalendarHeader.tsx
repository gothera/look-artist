import React, { useState } from 'react';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { color } from '../../../../theme';
import CustomHeaderCalendar from '../custom-header-calendar/CustomHeaderCalendar';
import { styles } from './styles';
import { View } from 'react-native';
import { monthNumberToMonthName } from '../../../../utils/global';
import { StoreState } from '../../../../store/store.types';
import { connect, ConnectedProps } from 'react-redux';

/**
 * For props
 * CalendarProvider https://github.com/wix/react-native-calendars/blob/70cb88000b84868146dff281ee72487184f6252b/src/expandableCalendar/calendarProvider.js
 * ExpandableCalendar https://github.com/wix/react-native-calendars/blob/70cb88000b84868146dff281ee72487184f6252b/src/expandableCalendar/index.js
 */

interface OwnProps {
  onNewDateSelected: (newDate: string) => void;
}

const mapStateToProps = (state: StoreState) => {
  const scheduledDates = state.profile.scheduledDates;
  return { scheduledDates };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CalendarHeader: React.FC<OwnProps & PropsFromRedux> = ({
  onNewDateSelected,
  scheduledDates,
}) => {
  const dateNow = new Date().toISOString().split('T')[0];
  const initialMonthName = monthNumberToMonthName(
    parseInt(dateNow.split('-')[1], 10),
  );

  const [currMonthName, setCurrMonthName] = useState(initialMonthName);

  const onDateChanged = (newDate: string) => {
    onNewDateSelected(newDate);
  };

  const onMonthChange = (newDate: any) => {
    const { month } = newDate;
    const monthName = monthNumberToMonthName(month);
    setCurrMonthName(monthName);
  };

  const markedDates = Object.assign(
    {},
    ...scheduledDates.map((key) => ({
      [key]: {
        marked: true,
        dotColor: color.brand,
      },
    })),
  );

  return (
    <View style={styles.container}>
      <CalendarProvider
        date={dateNow}
        onDateChanged={onDateChanged}
        onMonthChange={onMonthChange}
        disabledOpacity={0.6}
        showTodayButton
        todayButtonTextStyle={styles.todayBtnText}
      >
        <ExpandableCalendar
          hideArrows
          initialPosition={ExpandableCalendar.positions.CLOSED}
          theme={{
            calendarBackground: color.background,
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: color.brand,
            selectedDayTextColor: color.background,
            todayTextColor: color.brand,
            dayTextColor: color.textSecondary,
            arrowColor: 'orange',
            textDayFontFamily: 'Gilroy-Regular',
            textDayHeaderFontFamily: 'Gilroy-Regular',
            textDayFontSize: 15,
            textMonthFontFamily: 'Gilroy-Bold',
          }}
          firstDay={1}
          style={styles.expandableCalendarContainer}
          markedDates={markedDates}
        />
      </CalendarProvider>
      <CustomHeaderCalendar month={currMonthName} />
    </View>
  );
};

export default connector(CalendarHeader);
