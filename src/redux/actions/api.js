import T from './types';

export const apiStart = label => ({
  type: T.API_START,
  payload: label
});

export const apiEnd = label => ({
  type: T.API_END,
  payload: label
});

export const apiAction = ({
  url = '',
  onSuccess = () => {},
  onFailure = () => {},
  label = ''
}) => ({
  type: T.API,
  payload: {
    url,
    onSuccess,
    onFailure,
    label
  }
});
