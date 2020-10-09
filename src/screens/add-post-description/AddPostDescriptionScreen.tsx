import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-image-crop-picker';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  imagesPicked: Image[];
}

const AddPostDescriptionScreen: React.FC<OwnProps> = ({
  componentId,
  imagesPicked,
}) => {
  console.log('== images picked ==', imagesPicked);
  return (
    <View style={styles.container}>
      <Text>{componentId}</Text>
    </View>
  );
};

export default AddPostDescriptionScreen;
