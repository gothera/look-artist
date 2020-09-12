import React from 'react';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { color } from '../../../../theme';

/**
 * For props
 * CalendarProvider https://github.com/wix/react-native-calendars/blob/70cb88000b84868146dff281ee72487184f6252b/src/expandableCalendar/calendarProvider.js
 * ExpandableCalendar https://github.com/wix/react-native-calendars/blob/70cb88000b84868146dff281ee72487184f6252b/src/expandableCalendar/index.js
 */

const CalendarHeader = () => {
  return (
    <CalendarProvider
      date={'2020-09-20'}
      onDateChanged={(param: any) => {
        console.log('=== on date changed ===', param);
      }}
      showTodayButton
      disabledOpacity={0.6}
    >
      <ExpandableCalendar
        // horizontal={false}
        hideArrows
        // hideDayNames
        // disablePan
        // hideKnob
        initialPosition={ExpandableCalendar.positions.CLOSED}
        // calendarStyle={{ backgroundColor: 'red' }}
        // headerStyle={{ backgroundColor: 'red' }} // for horizontal only
        // disableWeekScroll
        // theme={this.getTheme()}
        theme={{
          calendarBackground: color.background,
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: color.brand,
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          monthTextColor: 'red',
        }}
        disableAllTouchEventsForDisabledDays
        firstDay={1}
        markedDates={{
          '2020-09-12': { marked: true, dotColor: 'black' },
        }}
        allowShadow={false}
        style={{ marginTop: -10, marginLeft: 0 }}

        // markedDates={getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}}
        // leftArrowImageSource={require('../img/previous.png')}
        // rightArrowImageSource={require('../img/next.png')}
      />
    </CalendarProvider>
  );
};

export default CalendarHeader;
