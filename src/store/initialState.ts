import { StoreState } from './store.types';
const initialState: StoreState = {
  profile: {
    isLogging: false,
    isFetching: false,
    localProgramEntries: {},
    programEntriesByDate: [],
    isUploadingProfilePicture: false,
    likes: 0,
    appointmentsCount: 0,
    scheduledDates: [],
    rating: 5,
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
  post: {
    postsById: [],
    local: {},
    nextPage: 0,
    isFetching: false,
    hasNext: true,
  },
  review: {
    reviewById: [],
    local: {},
    nextPage: 0,
    isFetching: false,
    hasNext: true,
  },
};

export default initialState;
