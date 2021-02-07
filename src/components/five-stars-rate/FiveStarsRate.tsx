import React from 'react';
import { View } from 'react-native';
import { StarFilledIcon } from '../../res/svg';
import { color } from '../../theme';
import { styles } from './styles';

interface OwnProps {
  rate: number;
  starSize?: number;
}

const FiveStarsRate: React.FC<OwnProps> = ({ rate, starSize = 12 }) => {
  return (
    <View style={styles.rowContainer}>
      <StarFilledIcon
        width={starSize}
        fill={rate >= 1 ? color.alert : color.muted}
        style={styles.starIcon}
      />
      <StarFilledIcon
        width={starSize}
        fill={rate >= 2 ? color.alert : color.muted}
        style={styles.starIcon}
      />
      <StarFilledIcon
        width={starSize}
        fill={rate >= 3 ? color.alert : color.muted}
        style={styles.starIcon}
      />
      <StarFilledIcon
        width={starSize}
        fill={rate >= 4 ? color.alert : color.muted}
        style={styles.starIcon}
      />
      <StarFilledIcon
        width={starSize}
        fill={rate >= 5 ? color.alert : color.muted}
        style={styles.starIcon}
      />
    </View>
  );
};

export default FiveStarsRate;
