import React, { useEffect, useState } from 'react';
import ImagePicker, { Image } from 'react-native-image-crop-picker';
import { Navigation, NavigationComponentProps } from 'react-native-navigation';
import SelectPostImages from './components/select-post-images/SelectPostImages';
import { color } from '../../theme';
import SelectedImagesList from './components/selected-images-list/SelectedImagesList';
import strings from '../../res/strings/strings';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import LineDivider from '../../components/ui/LineDivider';
import FooterOptions from '../../components/footer/footer-options/FooterOptions';
import PrimaryButton from '../../components/button/PrimaryButton';
import { addPost } from '../../services/api/PostService';

const LEFT_BUTTON_CLOSE = 'close-add-post-modal';

interface OwnProps {}

const AddPostModal: React.FC<OwnProps & NavigationComponentProps> = ({
  componentId,
}) => {
  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        leftButtons: [
          {
            id: LEFT_BUTTON_CLOSE,
            icon: require('../../res/images/icons/close-icon.png'),
            color: color.textPrimary,
          },
        ],
      },
    });
  }, [componentId]);

  const [imagesPicked, setImagesPicked] = useState<Image[] | undefined>(
    undefined,
  );

  const [description, setDescription] = useState<string>('');

  const [isAddingPost, setIsAddingPost] = useState(false);

  useEffect(() => {
    const subscribeNavigation = Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId }) => {
        if (buttonId === LEFT_BUTTON_CLOSE) {
          closeModal();
        }
      },
    );

    return () => {
      subscribeNavigation.remove();
    };
  }, [componentId]);

  const hasSelectedImages =
    imagesPicked !== undefined && imagesPicked.length > 0;

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      width: 500,
      height: 500,
      cropping: true,
    }).then((imagePickerResponse: Image | Image[]) => {
      if (Array.isArray(imagePickerResponse)) {
        setImagesPicked(imagePickerResponse);
      } else {
        setImagesPicked([imagePickerResponse]);
      }
    });
  };

  const imagesPath = imagesPicked?.map((image: Image) => image.path);

  const onChangeDescription = (newDescription: string) => {
    setDescription(newDescription);
  };

  const onPost = async () => {
    setIsAddingPost(true);
    const pictures = imagesPicked?.map((imagePicked) => {
      return {
        name: imagePicked.filename,
        type: 'image/jpg',
        uri: imagePicked.path.replace('file://', ''),
      };
    });

    const formData = new FormData();
    formData.append('description', description);

    pictures?.forEach((picture) => {
      formData.append('pictures', picture);
    });

    addPost(formData)
      .then((_) => {
        setIsAddingPost(false);
        closeModal();
      })
      .catch((_) => {
        setIsAddingPost(false);
      });
  };

  const descriptionInput = (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionLabel}>Description</Text>
      <TextInput
        style={styles.descriptionInput}
        multiline
        placeholder={'Enter post description'}
        onChangeText={onChangeDescription}
        value={description}
      />
      <LineDivider />
    </View>
  );

  return (
    <View style={styles.container}>
      {!hasSelectedImages && <SelectPostImages onSelect={openImagePicker} />}
      {hasSelectedImages && imagesPath && (
        <>
          <SelectedImagesList
            imagesPath={imagesPath}
            ListFooterComponent={descriptionInput}
          />
          <FooterOptions>
            <PrimaryButton
              title={strings.action.post}
              onPress={onPost}
              loading={isAddingPost}
            />
          </FooterOptions>
        </>
      )}
    </View>
  );
};

export default AddPostModal;
