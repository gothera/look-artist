import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FooterOptions from '../footer-options/FooterOptions';
import PrimaryButton from '../../button/PrimaryButton';
import { styles } from './styles';
import strings from '../../../res/strings/strings';

interface OwnProps {
  onClear: () => void;
  onSave: () => void;
  isSaveDisabled: boolean;
  isClearDisabled: boolean;
}

const FooterSaveAndClear: React.FC<OwnProps> = ({
  onClear,
  onSave,
  isSaveDisabled,
  isClearDisabled,
}) => {
  return (
    <FooterOptions contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={onClear}
        style={styles.clearBtn}
        hitSlop={{ left: 16 }}
        disabled={isClearDisabled}
      >
        <Text
          style={[
            styles.clearText,
            isClearDisabled && styles.clearTextDisabled,
          ]}
        >
          {strings.action.clearAll}
        </Text>
      </TouchableOpacity>
      <PrimaryButton
        title="Save"
        containerStyle={{ width: 120 }}
        onPress={onSave}
        isDisabled={isSaveDisabled}
      />
    </FooterOptions>
  );
};

export default FooterSaveAndClear;
