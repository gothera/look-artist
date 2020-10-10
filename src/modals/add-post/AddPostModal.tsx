import React, { useState, useRef } from 'react';
import ImagePicker, { Image } from 'react-native-image-crop-picker';
import { Navigation } from 'react-native-navigation';
import SelectPostImages from './components/select-post-images/SelectPostImages';
import { color } from '../../theme';
import SelectedImagesList from './components/selected-images-list/SelectedImagesList';
import strings from '../../res/strings/strings';
import { TextInputRef } from '../../types/refTypes';
import { Text, View } from 'react-native';

const LEFT_BUTTON_CLOSE = 'close-add-post-modal';
const RIGHT_BUTTON_NEXT = 'next-add-post-modal';

interface OwnProps {
  componentId: string;
}

const AddPostModal: React.FC<OwnProps> = ({ componentId }) => {
  const [imagesPicked, setImagesPicked] = useState<Image[] | undefined>(
    undefined,
  );

  const descInputRef = useRef<TextInputRef>();

  const hasSelectedImages =
    imagesPicked !== undefined && imagesPicked.length > 0;

  Navigation.mergeOptions(componentId, {
    topBar: {
      leftButtons: [
        {
          id: LEFT_BUTTON_CLOSE,
          icon: require('../../res/images/icons/close-icon.png'),
        },
      ],
      rightButtons: [
        {
          id: RIGHT_BUTTON_NEXT,
          text: strings.action.next,
          color: color.textPrimary,
          disabledColor: color.muted,
          enabled: hasSelectedImages,
          fontFamily: 'Gilroy-Regular',
        },
      ],
    },
  });

  Navigation.events().registerNavigationButtonPressedListener(
    ({ buttonId }) => {
      if (buttonId === LEFT_BUTTON_CLOSE) {
        closeModal();
      } else if (buttonId === RIGHT_BUTTON_NEXT) {
        const val = descInputRef.current?.getValue();
        console.log('-- next --', val);
      }
    },
  );

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((imagePickerResponse: Image | Image[]) => {
      if (Array.isArray(imagePickerResponse)) {
        setImagesPicked(imagePickerResponse);
      } else {
        setImagesPicked([imagePickerResponse]);
      }
    });
  };

  const imagesPath = imagesPicked?.map((image: Image) => image.path);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Available soon</Text>
      {/* {!hasSelectedImages && <SelectPostImages onSelect={openImagePicker} />}
      {hasSelectedImages && imagesPath && (
        <>
          <SelectedImagesList
            imagesPath={imagesPath}
            passedRef={descInputRef}
          />
        </>
      )} */}
    </View>
  );
};

export default AddPostModal;
