import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { showAppointmentDetailsModal } from '../../../navigation';
import { selectAppointmentById } from '../../../store/appointment/appointment.selectors';
import { StoreState } from '../../../store/store.types';
import { AppointmentType } from '../../../types/globalTypes';
import UserAvatar from '../../avatar/user-avatar/UserAvatar';
import AddAppointmentText from '../../button/add-appointment-text/AddAppointmentText';
import AppointmentIndicator from '../../ui/appointment-indicator/AppointmentIndicator';
import AppointmentUserService from '../appointment-user-service/AppointmentUserService';
import { styles } from './styles';

interface OwnProps {
  appointmentIdStr: string;
  isLast?: boolean;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const appointment = selectAppointmentById(ownProps.appointmentIdStr)(state);
  const isFreeSpot = appointment.type === AppointmentType.Free;
  const clientName = appointment?.clientName;
  const serviceName = appointment.serviceName;
  const clientPhoto = appointment.photo;
  const startingTime = appointment.startingTime;
  const endingTime = appointment.endingTime;
  const date = appointment.date;

  return {
    isFreeSpot,
    clientName,
    serviceName,
    clientPhoto,
    startingTime,
    endingTime,
    date,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AppointmentRow: React.FC<OwnProps & PropsFromRedux> = ({
  isFreeSpot,
  clientName,
  serviceName,
  clientPhoto,
  startingTime,
  endingTime,
  isLast,
  appointmentIdStr,
  date,
}) => {
  const intervalStr = startingTime.substr(0, 5) + '-' + endingTime.substr(0, 5);

  const goToAppointmentDetailsModal = () => {
    showAppointmentDetailsModal({
      props: { appointmentIdStr },
    });
  };

  return (
    <View style={styles.container}>
      <AppointmentIndicator addCircleOnTail={isLast} />
      <View style={styles.intervalContainer}>
        <Text style={styles.intervalText}>{intervalStr}</Text>
        {isFreeSpot && <Text style={styles.intervalFreeSpotsLabel}> Free</Text>}
      </View>

      {!isFreeSpot && (
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={goToAppointmentDetailsModal}
        >
          <UserAvatar size={44} photoUrl={clientPhoto} />
          {clientName && serviceName && (
            <AppointmentUserService
              userName={clientName}
              serviceName={serviceName}
            />
          )}
        </TouchableOpacity>
      )}

      {isFreeSpot && (
        <View style={styles.addAppointmentBtnContainer}>
          <AddAppointmentText
            startingTime={startingTime.substr(0, 5)}
            endingTime={endingTime.substr(0, 5)}
            date={date}
          />
        </View>
      )}
    </View>
  );
};

export default connector(AppointmentRow);
