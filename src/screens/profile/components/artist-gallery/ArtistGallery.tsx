import React from 'react';
import { View, FlatList } from 'react-native';
import { HPageViewHoc } from 'react-native-head-tab-view';
import { useSelector } from 'react-redux';
import PostCardContainer from '../../../../components/post/post-card-container/PostCardContainer';
import { selectPostsById } from '../../../../store/post/post.selectors';
import { styles } from './styles';

const HFlatList = HPageViewHoc(FlatList);

interface Props {
  listProps: any;
}

const ArtistGallery: React.FC<Props> = ({ listProps }) => {
  const postsById = useSelector(selectPostsById);

  const renderPostCard = ({ item, index }: { item: number; index: number }) => {
    return (
      <View style={styles.postContainer}>
        <PostCardContainer
          postId={item}
          style={
            index % 2 === 0
              ? styles.firstColumnPostContainer
              : styles.secondColumnPostContainer
          }
        />
      </View>
    );
  };

  return (
    <HFlatList
      {...listProps}
      data={postsById}
      renderItem={renderPostCard}
      keyExtractor={(_: number, index: number) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ArtistGallery;
