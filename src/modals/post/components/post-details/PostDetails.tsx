import React from 'react';
import { View, Text } from 'react-native';
import { Post } from '../../../../types/globalTypes';
import { styles } from './styles';

interface Props {
  post: Post;
}

const PostDetails: React.FC<Props> = ({ post }) => {
  return (
    <View style={{ paddingBottom: 40 }}>
      <Text style={styles.text}>{post.description}</Text>
    </View>
  );
};

export default PostDetails;
