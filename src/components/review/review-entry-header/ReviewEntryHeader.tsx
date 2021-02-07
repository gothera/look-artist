import React from 'react';
import { View, Text } from 'react-native';
import UserAvatar from '../../avatar/user-avatar/UserAvatar';
import FiveStarsRate from '../../five-stars-rate/FiveStarsRate';
import { styles } from './styles';

interface OwnProps {
  userPicture?: string;
  userFullName: string;
  rate: number;
  date: string; // already normalized TODO
}

const ReviewEntryHeader: React.FC<OwnProps> = ({
  userPicture,
  userFullName,
  rate,
  date,
}) => {
  return (
    <View style={styles.rowContainer}>
      <UserAvatar size={32} photoUrl={userPicture} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{userFullName}</Text>
        <FiveStarsRate rate={rate} />
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default ReviewEntryHeader;
