import React, { useState } from 'react';
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
import { AsyncDispatch } from '../../../store/store.types';
import { color, typography } from '../../../theme';
import { ImagePickerResponse } from '../../../types/globalTypes';
import StepTitle from './StepTitle';

const ImagePicker = NativeModules.ImageCropPicker;

interface OwnProps {
  slideToNext: () => void;
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  changeProfilePicture: (formData: FormData) =>
    dispatch(changeProfilePicture(formData)),
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const PhotoStep: React.FC<OwnProps & PropsFromRedux> = ({
  slideToNext,
  changeProfilePicture,
}) => {
  const [imagePicked, setImagePicked] = useState<
    ImagePickerResponse | undefined
  >(undefined);

  const onOpenLibrary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: false,
      sortOrder: 'none',
    }).then((image: any) => {
      console.log('received image', image);
      const imagePickedMapped = {
        path: image.path,
        mime: image.mime,
        width: image.width,
        height: image.height,
        filename: image.filename,
      } as ImagePickerResponse;
      console.log('=== image picked mapped ===', imagePickedMapped);
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
    console.log(imagePicked, picture);
    const formData = new FormData();
    formData.append('picture', picture);

    // const config = {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMSIsImlhdCI6MTU5NzA5MDY3MSwiZXhwIjoxNTk4ODE4NjcxfQ.9eH5oy-A8kqxQyhM1x9OtHuLJvt7VOO6CDWho2b6Hi_casVtqboRQZF4CMDM1ZMjarSV6CUWsPD89umzieBTXQ',
    //     'content-type': 'multipart/form-data',
    //   },
    // };

    // Axios.post('http://localhost:8080/api/artist/picture/17', formData, config)
    //   .then((response) => console.log('=== response ===', response))
    //   .catch((error) => {
    //     console.log('=== error ==', error);
    //   });

    // changeProfilePicture(formData);
    console.log('=== formData ===', formData);

    // console.log('--image---', imagePicked);
    slideToNext();
  };

  return (
    <View style={styles.container}>
      <StepTitle
        title="Choose a profile picture"
        description="This is how you will remain in people's head"
      />
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
});

export default connector(PhotoStep) as React.FC<OwnProps>;
