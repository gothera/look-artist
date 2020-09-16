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

interface OwnProps {
  appointmentIdStr: string;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const appointment = selectAppointmentById(ownProps.appointmentIdStr)(state);
  const isFreeSpot = appointment.type === 'Free';
  const clientName = appointment.clientName;
  const serviceName = appointment.serviceName;
  const clientPhoto = appointment.photo;

  return {
    appointment,
    isFreeSpot,
    clientName,
    serviceName,
    clientPhoto,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AppointmentRow: React.FC<OwnProps & PropsFromRedux> = ({
  appointmentIdStr,
  appointment,
  isFreeSpot,
  clientName,
  serviceName,
  clientPhoto,
}) => {
  return (
    <View style={styles.container}>
      <AppointmentIndicator />
      <Text style={styles.intervalText}>12:00-13:00</Text>

      {!isFreeSpot && (
        <TouchableOpacity style={styles.rowContainer} onPress={() => {}}>
          <UserAvatar size={40} photoUrl={clientPhoto} />
          <AppointmentUserService
            userName={clientName}
            serviceName={serviceName}
          />
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
