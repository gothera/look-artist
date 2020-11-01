import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import CalendarSelectDays from './components/calendar-select-days/CalendarSelectDays';
import { SelectedDateCalendar } from '../../types/globalTypes';
import { color } from '../../theme';
import FooterSaveAndClear from '../../components/footer/footer-save-and-clear/FooterSaveAndClear';
import {
  getSelectedDatesArrayFromCalendar,
  isEndingAfterStartingHour,
} from '../../utils/global';
import ChooseIntervals from '../../components/interval/choose-intervals/ChooseIntervals';
import ErrorText from '../../components/errors/error-text/ErrorText';
import strings from '../../res/strings/strings';
import { connect, ConnectedProps } from 'react-redux';
import { updateSpecificProgram } from '../../store/profile/profile.actions';
import { Navigation } from 'react-native-navigation';

interface OwnProps {
  componentId: string;
}

const mapDispatchToProps = {
  updateSpecificProgram,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const EditDailyProgramModal: React.FC<OwnProps & PropsFromRedux> = ({
  updateSpecificProgram,
}) => {
  const [selectedDates, setSelectedDates] = useState<SelectedDateCalendar>({});
  const selectedDatesArr = getSelectedDatesArrayFromCalendar(selectedDates);
  const [startingHour, setStartingHour] = useState<string | undefined>(
    undefined,
  );
  const [endingHour, setEndingHour] = useState<string | undefined>(undefined);

  const setNewDaySelected = (date: string) => {
    if (!(date in selectedDates) || selectedDates[date].selected === false) {
      setSelectedDates({
        ...selectedDates,
        [date]: {
          selected: true,
          selectedColor: color.brand,
        },
      });
    } else {
      setSelectedDates({
        ...selectedDates,
        [date]: {
          selected: false,
          selectedColor: color.background,
        },
      });
    }
  };

  const isNoSelectedDate = selectedDatesArr.length === 0;

  const areHoursCorrect =
    startingHour !== undefined &&
    endingHour !== undefined &&
    isEndingAfterStartingHour(startingHour, endingHour);

  const isSaveDisabled =
    isNoSelectedDate ||
    startingHour === undefined ||
    endingHour === undefined ||
    !areHoursCorrect;

  const onClearAll = () => {
    setSelectedDates({});
    setStartingHour(undefined);
    setEndingHour(undefined);
  };

  const closeModal = () => {
    Navigation.dismissAllModals();
  };

  const onSave = () => {
    if (startingHour && endingHour) {
      updateSpecificProgram(selectedDatesArr, startingHour, endingHour);
    }
    closeModal();
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContainerStyle}
      >
        <CalendarSelectDays
          selectedDates={selectedDates}
          setNewDaySelected={setNewDaySelected}
        />
        <ChooseIntervals
          showIntervals={!isNoSelectedDate}
          startingHour={startingHour}
          endingHour={endingHour}
          setStartingHour={setStartingHour}
          setEndingHour={setEndingHour}
          containerStyle={styles.chooseIntervalContainer}
          showDescription
        />
        <ErrorText
          errorMessage={strings.modal.editSpecificDays.hoursError}
          show={
            startingHour === undefined || endingHour === undefined
              ? undefined
              : !areHoursCorrect
          }
          containerStyle={styles.errorContainer}
        />
      </ScrollView>
      <FooterSaveAndClear
        isClearDisabled={isNoSelectedDate}
        onClear={onClearAll}
        isSaveDisabled={isSaveDisabled}
        onSave={onSave}
      />
    </>
  );
};

export default connector(EditDailyProgramModal);
