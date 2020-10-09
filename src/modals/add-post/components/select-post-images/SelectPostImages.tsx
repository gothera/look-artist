import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import FooterOptions from '../../../../components/footer/footer-options/FooterOptions';
import PrimaryButton from '../../../../components/button/PrimaryButton';

interface OwnProps {
  onSelect: () => void;
}

const SelectPostImages: React.FC<OwnProps> = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>
        {strings.modal.addPost.description}
      </Text>
      <FooterOptions contentContainerStyle={styles.footerContainer}>
        <PrimaryButton title={strings.action.select} onPress={onSelect} />
      </FooterOptions>
    </View>
  );
};

export default SelectPostImages;
