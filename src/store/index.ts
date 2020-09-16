import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  createMigrate,
  persistStore,
  persistReducer,
  PersistConfig,
  PersistedState,
} from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState, TAction, AsyncDispatch } from './store.types';
import initialState from './initialState';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const VERSION = 13;

const migrations: any = {
  [VERSION]: (state: PersistedState & StoreState) => {
    return {
      ...initialState,
      view: {
        ...initialState.view,
        aux: 'sal',
      },
    };
  },
};

const profileBlacklist = createBlacklistFilter('profile', [
  'isLogging',
  'isUploadingProfilePicture',
]);

const persistConfig: PersistConfig<StoreState> = {
  key: 'starter',
  version: VERSION,
  storage: FilesystemStorage,
  stateReconciler: autoMergeLevel2,
  transforms: [profileBlacklist],
  // There is an issue with redux-persist code. This needs to be null not undefined
  timeout: null as any,
  migrate: createMigrate(migrations, { debug: false }),
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleWare = (_: StoreState) => (next: any) => (
  action: TAction,
) => {
  console.log('[LOG] Action triggered', action);
  next(action);
};

const middleware: any[] = [thunkMiddleware, loggerMiddleWare];
const enhancers: any[] = [];
const composedEnhancers = composeWithDevTools<{ dispatch: AsyncDispatch }, {}>(
  applyMiddleware(...middleware),
  ...enhancers,
);

function configureStore() {
  const store = createStore<
    StoreState & PersistPartial,
    TAction,
    {
      dispatch: AsyncDispatch;
    },
    {}
  >(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);
  return { persistor, store };
}

export const { persistor, store } = configureStore();
export type PersistedState = typeof store;
