import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { typography, color } from '../../theme';
import LineDivider from '../ui/LineDivider';
import { DownArrowIcon } from '../../res/svg';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import { PickerItem } from '../../types/globalTypes';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  label: string;
  onValueChanged?: (text: string) => void;
  placeholder: string;
  items: PickerItem[];
  setSelected: (newValue: string) => void;
}

const PickerInput: React.FC<OwnProps> = ({
  containerStyle,
  label,
  onValueChanged,
  placeholder,
  items,
  setSelected,
}) => {
  const [selection, setSelection] = useState<string | undefined>(undefined);

  const renderDownArrowIcon = () => <DownArrowIcon />;

  const onValueChange = (newValue: string) => {
    setSelection(newValue);
    setSelected(newValue);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.rowTouchable}>
        <RNPickerSelect
          onValueChange={onValueChange}
          items={items}
          Icon={renderDownArrowIcon}
          style={pickerStyle}
          InputAccessoryView={() => null}
          placeholder={{ label: 'Select a service', value: 'select-service' }}
        />
      </View>

      <LineDivider />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  label: TextStyle;
  rowTouchable: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
  },
  label: {
    ...typography.textInputLabel,
    color: color.muted,
  },
  rowTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 5,
  },
});

const pickerStyle: PickerStyle = {
  viewContainer: {
    width: '100%',
  },
  iconContainer: {
    marginTop: 2,
    paddingRight: 8,
  },
  placeholder: {
    ...typography.textInput,
    color: color.muted,
  },
  inputIOS: {
    ...typography.textInput,
    color: color.textSecondary,
  },
};

export default PickerInput;
