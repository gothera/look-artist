import { Services } from '../strings/categories';

export const makeupServicesSelection = Object.values(Services.makeup).map(
  (name) => {
    return {
      value: name,
      label: name,
    };
  },
);

export const lashesServicesSelection = Object.values(Services.lashes).map(
  (name) => {
    return {
      value: name,
      label: name,
    };
  },
);

export const eyebrowsServicesSelection = Object.values(Services.eyebrows).map(
  (name) => {
    return {
      value: name,
      label: name,
    };
  },
);

export const nailsServicesSelection = Object.values(Services.nails).map(
  (name) => {
    return {
      value: name,
      label: name,
    };
  },
);

export const bodyCareServicesSelection = Object.values(Services.bodyCare).map(
  (name) => {
    return {
      value: name,
      label: name,
    };
  },
);

export const hairServicesSelection = Object.values(Services.hair).map(
  (name) => {
    return {
      value: name,
      label: name,
    };
  },
);
