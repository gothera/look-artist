import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ChooseWeekDays from './components/choose-week-days/ChooseWeekDays';
import { DaysAbbreviation } from '../../types/enums';
import ChooseIntervals from '../../components/interval/choose-intervals/ChooseIntervals';
import { styles } from './styles';
import FooterSaveAndClear from '../../components/footer/footer-save-and-clear/FooterSaveAndClear';
import { updateDefaultProgram } from '../../store/profile/profile.actions';
import { connect, ConnectedProps } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { isEndingAfterStartingHour } from '../../utils/global';
import ErrorText from '../../components/errors/error-text/ErrorText';
import strings from '../../res/strings/strings';

interface OwnProps {
  componentId: string;
}

const mapDispatchToProps = {
  updateDefaultProgram,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const EditWeeklyProgramModal: React.FC<OwnProps & PropsFromRedux> = ({
  updateDefaultProgram,
}) => {
  const [selectedDays, setSelectedDays] = useState<DaysAbbreviation[]>([]);
  const [showIntervals, setShowIntervals] = useState(false);

  const [startingHour, setStartingHour] = useState<string | undefined>(
    undefined,
  );
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

  const areHoursCorrect =
    startingHour !== undefined &&
    endingHour !== undefined &&
    isEndingAfterStartingHour(startingHour, endingHour);

  const isClearAllDisabled = selectedDays.length === 0;

  const isSaveDisabled =
    selectedDays.length === 0 ||
    startingHour === undefined ||
    endingHour === undefined ||
    !areHoursCorrect;

  const onClearAll = () => {
    setSelectedDays([]);
    setShowIntervals(false);
    setStartingHour(undefined);
    setEndingHour(undefined);
  };

  const closeModal = () => {
    Navigation.dismissAllModals();
  };

  const onSave = () => {
    if (startingHour && endingHour) {
      updateDefaultProgram(selectedDays, startingHour, endingHour);
    }
    closeModal();
  };

  return (
    <View style={styles.container}>
      <ChooseWeekDays selectedDays={selectedDays} onDayPress={onDayPress} />
      <ChooseIntervals
        showIntervals={showIntervals}
        startingHour={startingHour}
        endingHour={endingHour}
        setStartingHour={setStartingHour}
        setEndingHour={setEndingHour}
      />
      <FooterSaveAndClear
        isClearDisabled={isClearAllDisabled}
        isSaveDisabled={isSaveDisabled}
        onClear={onClearAll}
        onSave={onSave}
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
    </View>
  );
};

export default connector(EditWeeklyProgramModal);
