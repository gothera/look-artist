import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import { color, spacing, typography } from '../../theme';
import { PickerItem } from '../../types/globalTypes';
import LineDivider from '../ui/LineDivider';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle;
  label: string;
  onValueChanged?: (text: string) => void;
  placeholder: string;
  items: PickerItem[];
  setSelected?: (newValue: string) => void;
  value: string | undefined;
  dividerStyle?: ViewStyle;
}

const PickerInput: React.FC<OwnProps> = ({
  containerStyle,
  label,
  onValueChanged,
  placeholder,
  items,
  value,
  labelStyle,
  dividerStyle,
}) => {
  const onValueChange = (newValue: string) => {
    onValueChanged?.(newValue);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.rowTouchable}>
        <RNPickerSelect
          onValueChange={(value, index) => onValueChange(value)}
          items={items}
          style={pickerStyle}
          value={value}
          placeholder={{ label: placeholder, value: 'default' }}
        />
      </View>

      <LineDivider containerStyle={[styles.divider, dividerStyle]} />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  label: TextStyle;
  rowTouchable: ViewStyle;
  divider: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
  },
  label: {
    ...typography.subheadlineSemiBold,
    color: color.textSecondary,
  },
  rowTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 5,
  },
  divider: {
    // marginTop: spacing.small,
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
  inputAndroid: {
    ...typography.textInput,
    color: color.textSecondary,
  },
};

export default PickerInput;
