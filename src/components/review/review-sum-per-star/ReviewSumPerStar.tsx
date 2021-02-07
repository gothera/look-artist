import React from 'react';
import { View, Text } from 'react-native';
import { StarFilledIcon } from '../../../res/svg';
import { ArtistReviewsSummarization } from '../../../services/api/api.types';
import { color } from '../../../theme';
import { styles } from './styles';

interface OwnProps {
  summarization: ArtistReviewsSummarization;
}

const ReviewSumPerStar: React.FC<OwnProps> = ({ summarization }) => {
  const {
    reviewsCount,
    numberOf1s,
    numberOf2s,
    numberOf3s,
    numberOf4s,
    numberOf5s,
  } = summarization;

  const starsArr = [numberOf1s, numberOf2s, numberOf3s, numberOf4s, numberOf5s];

  const renderXStat = (starIndex: number) => {
    const widthPercentage = (100 * starsArr[starIndex]) / reviewsCount;

    return (
      <View style={styles.statRowContainer}>
        <View style={{ flexDirection: 'row', flex: 0.2 }}>
          <View style={styles.columnInStatRow}>
            <Text style={styles.indexText}>{starIndex + 1}</Text>
          </View>
          <View style={styles.columnInStatRow}>
            <StarFilledIcon
              width={10}
              style={styles.starIcon}
              fill={color.muted}
            />
          </View>
        </View>
        <View style={styles.part2}>
          <View style={styles.horizontalLine} />
          <View
            style={[
              styles.filledHorizontalLine,
              { width: `${widthPercentage}%` },
            ]}
          />
        </View>
        <View style={styles.part3}>
          <View style={styles.tailColumn}>
            <Text style={styles.totalCount}>{starsArr[starIndex]}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderXStat(4)}
      {renderXStat(3)}
      {renderXStat(2)}
      {renderXStat(1)}
      {renderXStat(0)}
    </View>
  );
};

export default ReviewSumPerStar;
