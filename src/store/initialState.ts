import { StoreState } from './store.types';
const initialState: StoreState = {
  profile: {
    isLogging: false,
  },
  view: {
    aux: '',
  },
  offeredServices: {
    local: {},
  },
};

export default initialState;
