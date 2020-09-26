import { StoreState } from './store.types';
const initialState: StoreState = {
  profile: {
    isLogging: false,
    isFetching: false,
    localProgramEntries: {},
    programEntriesByDate: [],
    isUploadingProfilePicture: false,
  },
  view: {
    aux: '',
  },
  offeredService: {
    offeredServicesById: [],
    local: {},
  },
  notification: {
    notificationsById: [],
    local: {},
    fetching: false,
    nextPage: 0,
  },
  appointment: {
    appointmentIDs: {},
    local: {},
    fetching: true,
  },
};

export default initialState;
