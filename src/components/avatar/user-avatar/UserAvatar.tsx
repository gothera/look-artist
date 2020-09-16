import React from 'react';
import { StyleProp } from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';

interface OwnProps {
  size: number;
  style?: StyleProp<ImageStyle>;
  photoUrl?: string;
}

const UserAvatar: React.FC<OwnProps> = ({ size, style, photoUrl }) => {
  const imageSrc = photoUrl
    ? { uri: photoUrl }
    : { uri: 'https://unsplash.it/400/400?image=1' };
  return (
    <FastImage
      source={imageSrc}
      style={[{ width: size, height: size, borderRadius: size }, style]}
    />
  );
};

export default UserAvatar;
