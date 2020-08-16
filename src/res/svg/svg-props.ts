import { StyleProp, ViewStyle } from 'react-native';
export interface SVGProps {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
