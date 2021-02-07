import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { LINEAR_GRADIENT_TRANSPARENT_COLOR } from '../../../res/constants';
import { LayersIcon } from '../../../res/svg';
import { color } from '../../../theme';
import PressableCard from '../../pressable-card/PressableCard';
import { styles } from './styles';

interface OwnProps {
  photo: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  hasMorePhotos: boolean;
}

const PostCard: React.FC<OwnProps> = ({
  photo,
  style,
  onPress,
  hasMorePhotos,
}) => {
  return (
    <PressableCard onPress={onPress}>
      <View style={[styles.container, style]}>
        {hasMorePhotos && (
          <View style={styles.layersIconContainer}>
            <LayersIcon fill={color.background} />
          </View>
        )}
        <LinearGradient
          colors={LINEAR_GRADIENT_TRANSPARENT_COLOR}
          style={styles.gradient}
        />
        <FastImage
          source={{ uri: photo }}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
    </PressableCard>
  );
};

export default PostCard;
