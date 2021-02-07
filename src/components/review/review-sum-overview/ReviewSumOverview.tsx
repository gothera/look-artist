import React from 'react';
import { View, Text } from 'react-native';
import FiveStarsRate from '../../five-stars-rate/FiveStarsRate';
import { styles } from './styles';

interface OwnProps {
  reviewsAverage: number;
  reviewsCount: number;
}

const ReviewSumOverview: React.FC<OwnProps> = ({
  reviewsAverage,
  reviewsCount,
}) => {
  const roundedRating = Math.round(reviewsAverage);
  const fixedRating = roundedRating.toFixed(1);

  return (
    <View style={styles.container}>
      <Text style={styles.averageRatingText}>
        {fixedRating}
        <Text style={styles.averageRatingBaseText}>/5</Text>
      </Text>
      <View style={styles.starsContainer}>
        <FiveStarsRate rate={roundedRating} starSize={16} />
      </View>
      <Text style={styles.reviewsTotal}>{`${reviewsCount} reviews`}</Text>
    </View>
  );
};

export default ReviewSumOverview;
