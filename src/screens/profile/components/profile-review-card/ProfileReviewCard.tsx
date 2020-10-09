import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../../../components/ui/LineDivider';
import { selectReviewById } from '../../../../store/review/review.selectors';
import { StoreState } from '../../../../store/store.types';
import { styles } from './styles';

interface OwnProps {
  reviewId: number;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const review = selectReviewById(ownProps.reviewId)(state);
  return { review };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileServiceCard: React.FC<OwnProps & PropsFromRedux> = ({
  review,
}) => {
  const { name, description, avatar, date, rating } = review;
  return (
    <View>
      <View style={styles.avatarContainer}>
        <FastImage
          resizeMode="contain"
          style={styles.avatarStyle}
          source={{ uri: avatar }}
        />
        <View>
          <View style={styles.avatarContainer}>
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <LineDivider containerStyle={styles.divider} />
    </View>
  );
};

export default connector(ProfileServiceCard);
