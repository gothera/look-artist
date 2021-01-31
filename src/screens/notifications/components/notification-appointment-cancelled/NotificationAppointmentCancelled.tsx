import React from 'react';
import { Text, View } from 'react-native';
import UserAvatar from '../../../../components/avatar/user-avatar/UserAvatar';
import { Notification } from '../../../../types/globalTypes';
import { monthNumberToMonthName } from '../../../../utils/global';
import styles from './styles';

interface OwnProps {
  notification: Notification;
}

const NotificationAppointmentCancelled: React.FC<OwnProps> = ({
  notification,
}) => {
  const date = new Date(notification.extra.date);
  return (
    <View>
      <View style={styles.container}>
        <UserAvatar size={50} photoUrl={notification.extra.clientPhoto} />
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>
            <Text style={styles.notificationName}>
              {`${notification.extra.clientName} `}
            </Text>
            {'cancelled appointment'}
          </Text>
          <Text
            style={styles.notificationDescription}
          >{`for ${date.getDate()} ${monthNumberToMonthName(
            date.getMonth() + 1,
          )}, ${notification.extra.startingTime.substring(0, 5)}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationAppointmentCancelled;
