import React from 'react';
import { View, Text } from 'react-native';
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
        hideArrows
        // hideDayNames
        // disablePan
        // hideKnob
        initialPosition={ExpandableCalendar.positions.CLOSED}
        // calendarStyle={{ backgroundColor: 'red' }}
        // headerStyle={{ backgroundColor: 'red' }} // for horizontal only
        // customHeader={() => (
        //   <View style={{ width: '100%', height: 100, backgroundColor: 'blue' }}>
        //     <Text>render header</Text>
        //   </View>
        // )}
        theme={{
          calendarBackground: color.background,
          // textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: color.brand,
          selectedDayTextColor: color.background,
          todayTextColor: color.brand,
          dayTextColor: color.textPrimary,
          arrowColor: 'orange',
          'stylesheet.calendar.header': {
            header: {
              // backgroundColor: 'blue',
            },
          },
        }}
        // disableAllTouchEventsForDisabledDays
        firstDay={1}
        markedDates={{
          '2020-09-12': { marked: true, dotColor: 'black' },
          '2020-09-13': { marked: true, dotColor: 'red' },
        }}
        allowShadow={false}
        style={{ marginTop: -10, marginLeft: 0 }}
        // renderHeader={() => (
        //   <View
        //     style={{
        //       flexDirection: 'row',
        //       justifyContent: 'space-between',
        //       paddingLeft: 10,
        //       paddingRight: 10,
        //       marginTop: 6,
        //       alignItems: 'center',
        //       backgroundColor: 'red',
        //     }}
        //   >
        //     <Text>custom header</Text>
        //   </View>
        // )}
      />
    </CalendarProvider>
  );
};

export default CalendarHeader;
