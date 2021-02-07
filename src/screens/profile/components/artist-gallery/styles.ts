import { StyleSheet, ViewStyle } from 'react-native';
import {
  POSTS_LIST_NUM_COLUMNS,
  POST_CARD_HEIGHT,
} from '../../../../res/constants';

interface Style {
  postContainer: ViewStyle;
  firstColumnPostContainer: ViewStyle;
  secondColumnPostContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  postContainer: {
    flex: 1 / POSTS_LIST_NUM_COLUMNS,
    justifyContent: 'center',
    alignItems: 'center',
    height: POST_CARD_HEIGHT + 32,
  },
  firstColumnPostContainer: {
    marginLeft: 4,
  },
  secondColumnPostContainer: {
    marginRight: 4,
  },
});
