import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ViewState } from '../../store/store.types';

interface OwnProps {
  onPress: () => void;
}

const CheckBox: React.FC<OwnProps> = ({ onPress }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

interface Style {
  unselectedContainer: ViewStyle;
  selectedContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  unselectedContainer: {
    width: 14,
    height: 14,
    borderRadius: 14,
  },
});

export default CheckBox as React.FC<OwnProps>;
