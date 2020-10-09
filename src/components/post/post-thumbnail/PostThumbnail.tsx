import React from 'react';
import FastImage from 'react-native-fast-image';
import { connect, ConnectedProps } from 'react-redux';
import { selectPostById } from '../../../store/post/post.selectors';
import { StoreState } from '../../../store/store.types';

interface OwnProps {
  postId: number;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const post = selectPostById(ownProps.postId)(state);

  return {
    post,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const PostThumbnail: React.FC<OwnProps & PropsFromRedux> = ({ post }) => {
  const { pictures } = post;
  const imageSrc = pictures[0]
    ? { uri: pictures[0] }
    : { uri: 'https://unsplash.it/400/400?image=1' };
  return (
    <FastImage source={imageSrc} style={{ width: '100%', height: '100%' }} />
  );
};

export default connector(PostThumbnail);
