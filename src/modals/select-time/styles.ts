import { StyleSheet, ViewStyle } from 'react-native';
import { color } from '../../theme';

interface Style {
  background: ViewStyle;
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: color.modalBackground,
  },
  container: {
    height: '35%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: color.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
