import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface OwnProps {
  userName: string;
  serviceName: string;
}

const AppointmentUserService: React.FC<OwnProps> = ({
  userName,
  serviceName,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userNameText} numberOfLines={1}>
        {userName}
      </Text>
      <Text style={styles.serviceName} numberOfLines={1}>
        {serviceName}
      </Text>
    </View>
  );
};

export default AppointmentUserService;
