import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { selectPostById } from '../../../store/post/post.selectors';
import { showPostModal } from '../../../navigation';
import PostCard from '../post-card/PostCard';

interface OwnPros {
  postId: number;
  componentId?: string;
  style?: StyleProp<ViewStyle>;
}

const PostCardContainer: React.FC<OwnPros> = ({ postId, style }) => {
  const post = useSelector(selectPostById(postId));

  const onPress = () => {
    showPostModal({ props: { postId } });
  };

  return (
    <PostCard
      photo={post.pictures[0]}
      style={style}
      onPress={onPress}
      hasMorePhotos={post.pictures.length > 1}
    />
  );
};

export default PostCardContainer;
