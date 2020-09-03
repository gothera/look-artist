import React from 'react';
import { Text, View, FlatListProps } from 'react-native';
import { color } from '../../theme';
import ScreenFlatList from '../../containers/screen/ScreenFlatList';

const NotificationsScreen = () => {
  const renderItem = ({ item, index }: { item: number; index: number }) => {
    return (
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: color.unchosen,
          marginVertical: 10,
          opacity: 0.5,
        }}
      >
        <Text>{item}</Text>
      </View>
    );
  };

  const flatListProps: FlatListProps<any> = {
    data: [100, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    renderItem: renderItem,
  };

  return <ScreenFlatList headerTitle="Sabin" flatListProps={flatListProps} />;
};

export default NotificationsScreen;
