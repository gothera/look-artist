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
    notificationsById: [],
    local: {},
    fetching: false,
    nextPage: 0,
  },
  appointment: {
    local: {},
    fetching: true,
  },
};

export default initialState;
