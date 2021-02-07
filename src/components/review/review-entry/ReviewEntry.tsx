import React from 'react';
import { View, Text } from 'react-native';
import ReviewEntryHeader from '../review-entry-header/ReviewEntryHeader';
import { styles } from './styles';

interface OwnProps {
  userPicture?: string;
  userFullName: string;
  rate: number;
  date: string; // already normalized TODO
  description: string;
}

const ReviewEntry: React.FC<OwnProps> = ({
  userPicture,
  userFullName,
  rate,
  date,
  description,
}) => {
  return (
    <View style={styles.container}>
      <ReviewEntryHeader
        userFullName={userFullName}
        userPicture={userPicture}
        rate={rate}
        date={date}
      />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ReviewEntry;
