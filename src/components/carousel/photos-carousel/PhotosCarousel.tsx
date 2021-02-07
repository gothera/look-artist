import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import PostImageView from '../../../modals/post/components/post-image-view/PostImageView';
import { styles } from './styles';

interface Props {
  photos: string[];
}

const PhotosCarousel: React.FC<Props> = ({ photos }) => {
  const renderPagination = (index: number, total: number, _: Swiper) => {
    return (
      <View style={styles.paginationBox}>
        <Text style={styles.paginationText}>
          <Text>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };

  return (
    <Swiper
      renderPagination={renderPagination}
      autoplayDirection={false}
      bounces={true}
      bouncesZoom={true}
      loop={false}
    >
      {photos.map((_, index) => (
        <View style={styles.slide} key={`photo-carousel-${index}`}>
          <PostImageView photos={photos} index={index} />
        </View>
      ))}
    </Swiper>
  );
};

export default PhotosCarousel;
