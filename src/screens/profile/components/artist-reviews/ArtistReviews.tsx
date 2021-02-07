import React from 'react';
import { FlatList } from 'react-native';
import { HPageViewHoc } from 'react-native-head-tab-view';
import { useSelector } from 'react-redux';
import ReviewEntry from '../../../../components/review/review-entry/ReviewEntry';
import ReviewSummarization from '../../../../components/review/review-summarization/ReviewSummarization';
import { selectReviews } from '../../../../store/review/review.selectors';
import { Review } from '../../../../types/globalTypes';
import { styles } from './styles';

const HFlatList = HPageViewHoc(FlatList);

interface Props {
  listProps: any;
}

const ArtistReviews: React.FC<Props> = ({ listProps }) => {
  const reviews = useSelector(selectReviews);

  const reviewsList = Object.values(reviews.local);

  const renderReviewEntry = ({ item }: { item: Review }) => {
    return (
      <ReviewEntry
        userFullName={item.name}
        userPicture={item.avatar}
        rate={item.rating}
        description={item.description}
        date={item.date}
      />
    );
  };

  return (
    <HFlatList
      {...listProps}
      data={reviewsList || []}
      renderItem={renderReviewEntry}
      keyExtractor={(_: number, index: number) => index.toString()}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        reviews.summarization &&
        reviewsList.length > 0 && (
          <ReviewSummarization summarization={reviews.summarization} />
        )
      }
      ListHeaderComponentStyle={styles.headerContainer}
    />
  );
};

export default ArtistReviews;
