import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { ChevronLeftIcon } from '../../../../res/svg';
import { color } from '../../../../theme';

interface OwnProps {
  title: string;
  description: string;
  onPress: () => void;
  isLast?: boolean;
}

const EditProgramOption: React.FC<OwnProps> = ({
  title,
  description,
  onPress,
  isLast,
}) => {
  return (
    <TouchableHighlight underlayColor={color.highlight} onPress={onPress}>
      <View style={[styles.container, isLast && styles.bottomBorder]}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <ChevronLeftIcon
          style={styles.chevronIcon}
          fill={color.textSecondary}
        />
      </View>
    </TouchableHighlight>
  );
};

export default EditProgramOption;
