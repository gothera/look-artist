import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { useSelector } from 'react-redux';
import { selectPostById } from '../../store/post/post.selectors';
import PostDetails from './components/post-details/PostDetails';
import PostModalHeader from './components/post-modal-header/PostModalHeader';
import PostModalImages from './components/post-modal-images/PostModalImages';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  postId: number;
}

const PostModal: React.FC<OwnProps> = ({ componentId, postId }) => {
  const post = useSelector(selectPostById(postId));

  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  return (
    <>
      <PostModalHeader componentId={componentId} scrollY={scrollY} />
      <Animated.ScrollView style={styles.container} onScroll={onScroll}>
        <PostModalImages photos={post.pictures} scrollY={scrollY} />
        <PostDetails post={post} />
      </Animated.ScrollView>
    </>
  );
};

export default PostModal;
