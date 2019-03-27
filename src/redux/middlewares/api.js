import 'whatwg-fetch';
import T from '../actions/types';
import { apiStart, apiEnd } from '../actions/api';

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== T.API) return;

  const { url, onSuccess, onFailure, label } = action.payload;

  if (!label) {
    console.log('payload.label is not set');
    return;
  }
  dispatch(apiStart(label));

  fetch(url)
    .then(resp => resp.json())
    .then(data => dispatch(onSuccess(data)))
    .then(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    })
    .catch(onFailure);
};

export default apiMiddleware;
