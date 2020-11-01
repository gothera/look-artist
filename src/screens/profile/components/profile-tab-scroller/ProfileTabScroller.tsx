import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  FlatListProps,
  View,
} from 'react-native';
const TabBarHeight = 48;
const HeaderHeight = 210;

interface OwnProps {
  onGetRef: (instance: FlatList<number> | null) => void;
}
const TabScene: React.FC<
  OwnProps & Animated.AnimatedProps<FlatListProps<number>>
> = ({
  numColumns: numCols,
  onGetRef,
  onScroll,
  data,
  renderItem,
  ListFooterComponent,
  onScrollEndDrag,
  onMomentumScrollEnd,
  onMomentumScrollBegin,
  onEndReached,
}) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <Animated.FlatList
      scrollToOverflowEnabled={true}
      numColumns={numCols}
      ref={onGetRef}
      scrollEventThrottle={16}
      onScroll={onScroll}
      onEndReached={onEndReached}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollEnd={onMomentumScrollEnd}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      ListHeaderComponent={() => <View style={{ height: 10 }} />}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={{
        paddingTop: HeaderHeight + TabBarHeight,
        paddingHorizontal: 10,
        minHeight: windowHeight - TabBarHeight,
        paddingBottom: 30,
      }}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TabScene;
