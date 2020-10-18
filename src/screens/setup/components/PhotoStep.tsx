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
import StepTitle from './StepTitle';
import { showLoadingModal } from '../../../navigation';
import strings from '../../../res/strings/strings';

const ImagePicker = NativeModules.ImageCropPicker;

interface OwnProps {
  slideToNext: () => void;
}

const mapStateToProps = (state: StoreState) => {
  return {
    isUploadingProfilePicture: state.profile.isUploadingProfilePicture,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  changeProfilePicture: (formData: FormData, onSuccess: () => void) =>
    dispatch(changeProfilePicture(formData, onSuccess)),
});

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

  const onContinuePress = () => {
    if (!imagePicked) {
      return;
    }
    const picture = {
      name: imagePicked.filename,
      type: 'image/jpg',
      uri: imagePicked.path.replace('file://', ''),
    };
    const formData = new FormData();
    formData.append('picture', picture);

    changeProfilePicture(formData, slideToNext);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.screen.setup.photo.title}</Text>
      <Text style={styles.description}>
        {strings.screen.setup.photo.description}
      </Text>
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
      <View style={styles.btnContainer}>
        <PrimaryButton
          title={'Continue'}
          onPress={onContinuePress}
          isDisabled={isContinueDisabled}
        />
      </View>
    </View>
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
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
