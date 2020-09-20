import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import AppointmentIndicator from '../../ui/appointment-indicator/AppointmentIndicator';
import UserAvatar from '../../avatar/user-avatar/UserAvatar';
import AppointmentUserService from '../appointment-user-service/AppointmentUserService';
import AddAppointmentText from '../../button/add-appointment-text/AddAppointmentText';
import { StoreState } from '../../../store/store.types';
import { connect, ConnectedProps } from 'react-redux';
import { selectAppointmentById } from '../../../store/appointment/appointment.selectors';
import { AppointmentType } from '../../../types/globalTypes';
import { showAppointmentDetailsModal } from '../../../navigation';

interface OwnProps {
  appointmentIdStr: string;
  isLast?: boolean;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const appointment = selectAppointmentById(ownProps.appointmentIdStr)(state);
  const isFreeSpot = appointment.type === AppointmentType.Free;
  const clientName = appointment.clientName;
  const serviceName = appointment.serviceName;
  const clientPhoto = appointment.photo;
  const startingTime = appointment.startingTime;
  const endingTime = appointment.endingTime;

  return {
    isFreeSpot,
    clientName,
    serviceName,
    clientPhoto,
    startingTime,
    endingTime,
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
}) => {
  const intervalStr = startingTime + '-' + endingTime;

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
          <UserAvatar size={40} photoUrl={clientPhoto} />
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
          <AddAppointmentText />
        </View>
      )}
    </View>
  );
};

export default connector(AppointmentRow);
