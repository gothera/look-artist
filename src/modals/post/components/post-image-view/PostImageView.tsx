import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';
import { ImageSource } from 'react-native-image-viewing/dist/@types';
import { styles } from './styles';

interface Props {
  photos: string[];
  index: number;
}

const PostImageView: React.FC<Props> = ({ photos, index }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onImagePress = () => {
    setIsModalVisible(true);
  };

  const imagesSource: ImageSource[] = photos.map((photo) => {
    return { uri: photo };
  });

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onImagePress}>
        <FastImage
          source={{ uri: photos[index] }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>
      <ImageView
        images={imagesSource}
        imageIndex={index}
        visible={isModalVisible}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default PostImageView;
