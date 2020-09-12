import React, { useRef } from 'react';
import { Animated, FlatList, FlatListProps } from 'react-native';
import AnimatedScreenHeader from '../../components/header/animated-screen-header/AnimatedScreenHeader';
import { HEADER_SCREEN_HEIGHT } from '../../res/constants';

interface OwnPros {
  headerTitle: string;
  flatListProps: FlatListProps<FlatList>;
}

const ScreenFlatList: React.FC<OwnPros> = ({ headerTitle, flatListProps }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  /**
   * TODO
   * add all flatlist props
   */

  return (
    <>
      <AnimatedScreenHeader title={headerTitle} scrollY={scrollY} />
      <Animated.FlatList
        data={flatListProps.data}
        renderItem={flatListProps.renderItem}
        keyExtractor={flatListProps.keyExtractor}
        contentContainerStyle={[
          flatListProps.contentContainerStyle,
          { paddingTop: HEADER_SCREEN_HEIGHT },
        ]}
        onScroll={onScroll}
        onEndReachedThreshold={flatListProps.onEndReachedThreshold}
        onEndReached={flatListProps.onEndReached}
        ListHeaderComponent={flatListProps.ListHeaderComponent}
      />
    </>
  );
};

export default ScreenFlatList;
