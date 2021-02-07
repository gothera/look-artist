import React from 'react';
import { Animated, View } from 'react-native';
import PhotosCarousel from '../../../../components/carousel/photos-carousel/PhotosCarousel';
import { POST_MODAL_IMAGE_OPACITY_RANGE } from '../../../../res/constants';
import PostImageView from '../post-image-view/PostImageView';
import { styles } from './styles';

interface OwnProps {
  scrollY: Animated.Value;
  photos: string[];
}

const PostModalImages: React.FC<OwnProps> = ({ scrollY, photos }) => {
  const opacityOverlayContainer = scrollY.interpolate({
    inputRange: [0, POST_MODAL_IMAGE_OPACITY_RANGE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const hasMoreImages = photos.length > 1;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.opacityOverlay, { opacity: opacityOverlayContainer }]}
        pointerEvents="none"
      />
      {hasMoreImages ? (
        <PhotosCarousel photos={photos} />
      ) : (
        <PostImageView photos={photos} index={0} />
      )}
    </View>
  );
};

export default PostModalImages;
