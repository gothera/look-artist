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
  notification: {
    notifications: [],
    fetching: false,
    nextPage: 0,
  },
};

export default initialState;
