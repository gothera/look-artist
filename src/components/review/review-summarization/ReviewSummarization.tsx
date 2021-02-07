import React from 'react';
import { View, Text } from 'react-native';
import { ArtistReviewsSummarization } from '../../../services/api/api.types';
import ReviewSumOverview from '../review-sum-overview/ReviewSumOverview';
import ReviewSumPerStar from '../review-sum-per-star/ReviewSumPerStar';
import { styles } from './styles';

interface OwnProps {
  summarization: ArtistReviewsSummarization;
}

const ReviewSummarization: React.FC<OwnProps> = ({ summarization }) => {
  const { reviewsAverage, reviewsCount } = summarization;

  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.firstHalfContainerAux]}>
        <ReviewSumOverview
          reviewsAverage={reviewsAverage}
          reviewsCount={reviewsCount}
        />
      </View>
      <View style={styles.halfContainer}>
        <ReviewSumPerStar summarization={summarization} />
      </View>
    </View>
  );
};

export default ReviewSummarization;
