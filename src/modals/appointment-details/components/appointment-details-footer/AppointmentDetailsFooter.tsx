import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FooterOptions from '../../../../components/footer/footer-options/FooterOptions';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import { showDeleteConfirmationModal } from '../../../../navigation';

interface OwnProps {
  appointmentIdStr: string;
}

const AppointmentDetailsFooter: React.FC<OwnProps> = ({ appointmentIdStr }) => {
  const deleteAppointment = () => {
    // logic for redux
    // + dismiss all modals
    // make sure to happen all of this on success
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

export default AppointmentDetailsFooter;
