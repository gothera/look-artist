import React, { useState } from 'react';
import ImagePicker, { Image as Img } from 'react-native-image-crop-picker';
import { Navigation } from 'react-native-navigation';
import { categoriesSelection } from '../../res/constants/pickerItems';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { BigAvatarPlaceholder } from '../../res/svg/placeholder/BigAvatarPlaceholder';
import { StoreState } from '../../store/store.types';
import { connect, ConnectedProps } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TextInputWithLabel from '../../components/input/TextInputWithLabel';
import strings from '../../res/strings/strings';
import PickerInput from '../../components/input/PickerInput';
import {
  changeProfilePicture,
  updateArtistProfile,
  logout,
} from '../../store/profile/profile.actions';
import FooterOptions from '../../components/footer/footer-options/FooterOptions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../components/button/PrimaryButton';
import TextEntry from '../../components/entry/text-entry/TextEntry';

const LEFT_BUTTON_CLOSE = 'close-edit-profile-modal';

interface OwnProps {
  componentId: string;
}

const mapStateToProps = (store: StoreState) => {
  return {
    profile: store.profile,
  };
};

const mapDispatchToProps = {
  changeProfilePicture,
  updateArtistProfile,
  logout,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const EditProfileModal: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  profile,
  updateArtistProfile,
  changeProfilePicture,
  logout,
}) => {
  const {
    profilePicture,
    firstName: initialFirstName,
    lastName: initialLastName,
    bio: initialBio,
    category: initialCategory,
    email: initialEmail,
    phoneNumber: initialPhone,
  } = profile;

  const [imagesPicked, setImagesPicked] = useState<Img | undefined>(undefined);
  const [firstName, setFirstName] = useState(initialFirstName || '');
  const [lastName, setLastName] = useState(initialLastName || '');
  const [bio, setBio] = useState(initialBio || '');
  const [category, setCategory] = useState<string | undefined>(initialCategory);
  const [phone, setPhone] = useState(initialPhone || '');
  const [email, setEmail] = useState(initialEmail || '');

  const isDisabled =
    firstName === initialFirstName &&
    initialBio === bio &&
    lastName === initialLastName &&
    initialCategory === category &&
    email === initialEmail &&
    phone === initialPhone &&
    !imagesPicked;

  Navigation.mergeOptions(componentId, {
    topBar: {
      leftButtons: [
        {
          id: LEFT_BUTTON_CLOSE,
          icon: require('../../res/images/icons/close-icon.png'),
        },
      ],
    },
  });

  const onSavePress = () => {
    updateArtistProfile({
      firstName,
      bio,
      lastName,
      phone,
      email,
      category: category || 'Makeup',
    });
    if (imagesPicked) {
      const picture = {
        name: imagesPicked.filename,
        type: 'image/jpg',
        uri: imagesPicked.path.replace('file://', ''),
      };
      const formData = new FormData();
      formData.append('picture', picture);
      changeProfilePicture(formData);
    }
    closeModal();
  };

  Navigation.events().registerNavigationButtonPressedListener(
    ({ buttonId }) => {
      if (buttonId === LEFT_BUTTON_CLOSE) {
        closeModal();
      }
    },
  );

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      sortOrder: 'none',
    }).then((imagePickerResponse: Img | Img[]) => {
      if (!Array.isArray(imagePickerResponse)) {
        setImagesPicked(imagePickerResponse);
      }
    });
  };

  const imagesPath = imagesPicked?.path || profilePicture;

  const onLogoutPress = () => {
    logout();
  };

  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={openImagePicker}>
            {!imagesPath && <BigAvatarPlaceholder />}
            {imagesPath && (
              <Image
                style={styles.image}
                source={{
                  uri: imagesPath,
                }}
              />
            )}
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={styles.chooseBtnContainer}
            onPress={openImagePicker}
          >
            <Text>Choose profile picture</Text>
          </TouchableOpacity>

          <TextInputWithLabel
            label="First Name"
            placeholder="Enter First Name"
            text={firstName}
            setText={setFirstName}
            containerStyle={styles.input}
          />
          <TextInputWithLabel
            label="Last Name"
            placeholder="Enter Last Name"
            text={lastName}
            setText={setLastName}
            containerStyle={styles.input}
          />
          <TextInputWithLabel
            label="Bio"
            placeholder="Enter bio"
            text={bio}
            setText={setBio}
            containerStyle={styles.input}
            multiline={true}
            maxLengthUndefined
          />
          <PickerInput
            label="Category"
            containerStyle={styles.input}
            dividerStyle={styles.divider}
            value={category}
            placeholder="category"
            items={categoriesSelection}
            onValueChanged={setCategory}
          />
          <TextInputWithLabel
            label="Email address"
            placeholder="email"
            text={email}
            setText={setEmail}
            containerStyle={styles.input}
            keyboardType={'email-address'}
          />
          <TextInputWithLabel
            label="Phone"
            placeholder="Enter Phone Number"
            text={phone}
            setText={setPhone}
            containerStyle={styles.input}
            keyboardType={'numeric'}
          />
          <TextEntry
            title={strings.action.logout}
            onPress={onLogoutPress}
            containerStyle={styles.logoutContainer}
            titleStyle={styles.logoutText}
          />
        </View>
      </KeyboardAwareScrollView>
      <FooterOptions>
        <PrimaryButton
          title={strings.action.save}
          isDisabled={isDisabled}
          onPress={onSavePress}
        />
      </FooterOptions>
    </>
  );
};

export default connector(EditProfileModal);
