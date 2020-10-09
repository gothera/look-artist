import React, { useState, useRef, RefObject, useImperativeHandle } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import TextInputWithLabel from '../../../../components/input/TextInputWithLabel';
import LineDivider from '../../../../components/ui/LineDivider';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { TextInputRef } from '../../../../types/refTypes';

interface OwnProps {
  imagesPath: string[];
  passedRef: RefObject<TextInputRef>;
}

const SelectedImagesList: React.FC<OwnProps> = ({ imagesPath, passedRef }) => {
  const descInputRef = useRef<TextInput>(null);

  useImperativeHandle(passedRef, () => ({ getValue }));

  const getValue = () => descInputRef.current?.props.value || '';

  const renderImage = ({ item }: { item: string; index: number }) => {
    return (
      <View style={styles.listItemContainer}>
        <FastImage source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  const renderListFooter = () => (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionLabel}>Description</Text>
      <TextInput
        ref={descInputRef}
        style={styles.descriptionInput}
        multiline
        placeholder={'Enter post description'}
        // onChangeText={setDescription}
        // value={description}
      />
      <LineDivider />
    </View>
  );

  return (
    <KeyboardAwareFlatList
      data={imagesPath}
      renderItem={renderImage}
      numColumns={2}
      horizontal={false}
      contentContainerStyle={styles.listContentContainer}
      keyExtractor={(item: string, index: number) => `image-${item}-${index}`}
      ListFooterComponent={renderListFooter}
      extraHeight={300}
    />
  );
};

export default SelectedImagesList;
