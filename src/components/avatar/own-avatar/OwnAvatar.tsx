import React from 'react';
import { StyleProp } from 'react-native';
import { StoreState } from '../../../store/store.types';
import { connect, ConnectedProps } from 'react-redux';
import FastImage, { ImageStyle } from 'react-native-fast-image';

interface OwnProps {
  size: number;
  style?: StyleProp<ImageStyle>;
}

const mapStateToProps = (state: StoreState) => {
  return {
    photoUrl: state.profile.profilePicture,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const OwnAvatar: React.FC<OwnProps & PropsFromRedux> = ({
  size,
  photoUrl,
  style,
}) => {
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

export default connector(OwnAvatar);
