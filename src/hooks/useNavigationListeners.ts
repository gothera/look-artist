import { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { showAddPostModal } from '../navigation';

export const useNavigationListeners = (componentId: string) => {
  useEffect(() => {
    const subscribeNavigation = Navigation.events().registerBottomTabPressedListener(
      ({ tabIndex }) => {
        if (tabIndex === 1) {
          showAddPostModal();
        }
      },
    );

    return () => {
      subscribeNavigation.remove();
    };
  }, [componentId]);
};
