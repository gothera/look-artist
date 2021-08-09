import React, { useState, useEffect } from 'react';
import {
  Image,
  ImageStyle,
  NativeModules,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import PrimaryButton from '../../../components/button/PrimaryButton';
import { BigAvatarPlaceholder } from '../../../res/svg';
import { changeProfilePicture } from '../../../store/profile/profile.actions';
import { AsyncDispatch, StoreState } from '../../../store/store.types';
import { color, typography, spacing } from '../../../theme';
import { ImagePickerResponse } from '../../../types/globalTypes';
import { showLoadingModal } from '../../../navigation';
import { BOTTOM_SPACE } from '../../../res/constants';

const ImagePicker = NativeModules.ImageCropPicker;

interface OwnProps {
  slideToNext: () => void;
}

const mapStateToProps = (state: StoreState) => {
  return {
    isUploadingProfilePicture: state.profile.isUploadingProfilePicture,
  };
};

const mapDispatchToProps = {
  changeProfilePicture,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const PhotoStep: React.FC<OwnProps & PropsFromRedux> = ({
  slideToNext,
  changeProfilePicture,
  isUploadingProfilePicture,
}) => {
  const [imagePicked, setImagePicked] = useState<
    ImagePickerResponse | undefined
  >(undefined);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isUploadingProfilePicture) {
      showLoadingModal();
    }
  }, [isUploadingProfilePicture]);

  const onOpenLibrary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      sortOrder: 'none',
    }).then((image: any) => {
      const imagePickedMapped = {
        path: image.path,
        mime: image.mime,
        width: image.width,
        height: image.height,
        filename: image.filename,
      } as ImagePickerResponse;
      setImagePicked(imagePickedMapped);
    });
  };

  const isContinueDisabled = !imagePicked;

  const setLoadingToFalse = () => {
    setIsLoading(false);
  };

  const onContinuePress = () => {
    if (!imagePicked) {
      slideToNext();
      return;
    }
    const splitName = imagePicked.path.split('/')
    const picture = {
      name: splitName == undefined ? imagePicked.path : splitName[splitName.length-1],
      type: imagePicked.mime,
      uri: imagePicked.path,
    };
    const formData = new FormData();
    formData.append('picture', picture);

    setIsLoading(true);

    changeProfilePicture(formData, slideToNext, setLoadingToFalse);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {!imagePicked && <BigAvatarPlaceholder />}
          {imagePicked && (
            <Image
              style={styles.image}
              source={{
                uri: imagePicked?.path,
              }}
            />
          )}
          <TouchableOpacity
            style={styles.chooseBtnContainer}
            onPress={onOpenLibrary}
          >
            <Text style={styles.chooseText}>
              {!imagePicked ? 'Choose from library' : 'Choose another photo'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          title={'Continue'}
          onPress={onContinuePress}
          loading={isLoading}
        />
      </View>
    </>
  );
};

interface Style {
  container: ViewStyle;
  avatarContainer: ViewStyle;
  chooseBtnContainer: ViewStyle;
  chooseText: TextStyle;
  btnContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 40,
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  avatarContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  chooseBtnContainer: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 20,
  },
  chooseText: {
    color: color.textSecondary,
    ...typography.button,
  },
  btnContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: BOTTOM_SPACE,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.base,
  },
  image: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  title: {
    ...typography.title3Bold,
    color: color.textSecondary,
  },
  description: {
    ...typography.subheadlineSemiBold,
    color: color.muted,
    marginTop: spacing.smallest,
  },
});

export default connector(PhotoStep) as React.FC<OwnProps>;
