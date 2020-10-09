import { Navigation } from 'react-native-navigation';
import { showAddPostModal } from '../navigation';

export const useNavigationListeners = () => {
  Navigation.events().registerBottomTabPressedListener(({ tabIndex }) => {
    if (tabIndex === 1) {
      showAddPostModal();
    }
  });
};
