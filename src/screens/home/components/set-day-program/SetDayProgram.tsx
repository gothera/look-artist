import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import {
  dateToDayMonth,
  isEndingAfterStartingHour,
} from '../../../../utils/global';
import ChooseIntervals from '../../../../components/interval/choose-intervals/ChooseIntervals';
import ErrorText from '../../../../components/errors/error-text/ErrorText';
import strings from '../../../../res/strings/strings';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { updateSpecificProgram } from '../../../../store/profile/profile.actions';
import { fetchAppointmentOfDay } from '../../../../store/appointment/appointment.actions';
import { connect, ConnectedProps } from 'react-redux';

interface OwnProps {
  date: string;
}

const mapDispatchToProps = {
  updateSpecificProgram,
  fetchAppointmentOfDay,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SetDayProgram: React.FC<OwnProps & PropsFromRedux> = ({
  date,
  updateSpecificProgram,
  fetchAppointmentOfDay,
}) => {
  const [startingHour, setStartingHour] = useState<string | undefined>(
    undefined,
  );
  const [endingHour, setEndingHour] = useState<string | undefined>(undefined);

  const areHoursCorrect =
    startingHour !== undefined &&
    endingHour !== undefined &&
    isEndingAfterStartingHour(startingHour, endingHour);

  const isSaveProgramDisabled =
    !startingHour || !endingHour || !areHoursCorrect;

  const onSaveProgramPress = () => {
    if (startingHour && endingHour) {
      updateSpecificProgram([date], startingHour, endingHour, () => {
        fetchAppointmentOfDay(date);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Set availability for {dateToDayMonth(date)}
      </Text>
      <ChooseIntervals
        showIntervals={true}
        startingHour={startingHour}
        endingHour={endingHour}
        setStartingHour={setStartingHour}
        setEndingHour={setEndingHour}
        containerStyle={styles.chooseIntervalContainer}
        optionsContainerStyle={styles.optionsIntervalContainer}
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
      <View style={styles.btnContainer}>
        <PrimaryButton
          title={'Save Program'}
          isDisabled={isSaveProgramDisabled}
          onPress={onSaveProgramPress}
        />
      </View>
    </View>
  );
};

export default connector(SetDayProgram) as React.FC<OwnProps>;
