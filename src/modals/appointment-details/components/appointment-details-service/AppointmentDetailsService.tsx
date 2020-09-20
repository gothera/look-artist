import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';

interface OwnProps {
  serviceName: string;
}

const AppointmentDetailsService: React.FC<OwnProps> = ({ serviceName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>
        {strings.modal.appointmentDetails.serviceLabel}
      </Text>
      <Text style={styles.serviceName}>{serviceName}</Text>
    </View>
  );
};

export default AppointmentDetailsService;
