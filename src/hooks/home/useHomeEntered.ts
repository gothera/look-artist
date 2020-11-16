import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { pushSetupScreen } from '../../navigation';
import { StoreState } from '../../store/store.types';
import { usePrevious } from '../generic/usePrevious';

export const useHomeEntered = () => {
  const hasSetup = useSelector((state: StoreState) => state.profile.hasSetup);

  const prevHasSetup = usePrevious(hasSetup);

  useEffect(() => {
    if (prevHasSetup === undefined && hasSetup === false) {
      pushSetupScreen();
    }
  }, []);
};
