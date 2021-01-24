import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

interface OwnProps {
  imagesPath: string[];
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
}

const SelectedImagesList: React.FC<OwnProps> = ({
  imagesPath,
  ListFooterComponent,
}) => {
  const renderImage = ({ item }: { item: string; index: number }) => {
    return (
      <View style={styles.listItemContainer}>
        <FastImage source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <KeyboardAwareFlatList
      data={imagesPath}
      renderItem={renderImage}
      numColumns={2}
      horizontal={false}
      contentContainerStyle={styles.listContentContainer}
      keyExtractor={(item: string, index: number) => `image-${item}-${index}`}
      ListFooterComponent={ListFooterComponent}
      extraHeight={300}
    />
  );
};

export default SelectedImagesList;
