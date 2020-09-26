import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect, ConnectedProps } from 'react-redux';
import FooterOptions from '../../../../components/footer/footer-options/FooterOptions';
import { showDeleteConfirmationModal } from '../../../../navigation';
import strings from '../../../../res/strings/strings';
import { deleteAppointment } from '../../../../store/appointment/appointment.actions';
import { AsyncDispatch } from '../../../../store/store.types';
import { styles } from './styles';

interface OwnProps {
  appointmentIdStr: string;
  date: string;
  closeModal: () => void;
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => {
  return {
    deleteAppointmentById: (
      appointmentId: string,
      date: string,
      closeModal: () => void,
    ) => dispatch(deleteAppointment(appointmentId, date, closeModal)),
  };
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AppointmentDetailsFooter: React.FC<OwnProps & PropsFromRedux> = ({
  appointmentIdStr,
  date,
  deleteAppointmentById,
  closeModal,
}) => {
  const deleteAppointment = () => {
    // logic for redux
    // + dismiss all modals
    // make sure to happen all of this on success
    deleteAppointmentById(appointmentIdStr, date, closeModal);
    Navigation.dismissAllModals();
  };

  const onCancelPress = () => {
    showDeleteConfirmationModal({
      props: {
        title: 'Cancel Appointment',
        description: 'Are you sure to cancel this appointment?',
        onDelete: deleteAppointment,
      },
    });
  };

  return (
    <FooterOptions contentContainerStyle={styles.footerContentContainer}>
      <TouchableOpacity
        onPress={onCancelPress}
        hitSlop={{ top: 10, bottom: 20, left: 30, right: 30 }}
      >
        <Text style={styles.cancelText}>
          {strings.modal.appointmentDetails.cancelAppointment}
        </Text>
      </TouchableOpacity>
    </FooterOptions>
  );
};

export default connector(AppointmentDetailsFooter) as React.FC<OwnProps>;
