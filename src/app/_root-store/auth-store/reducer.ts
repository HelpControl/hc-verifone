import { Actions, ActionTypes } from './actions';
import { initionalState, State } from './state';

export function featureReducer(state = initionalState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        userCredantionals: action.payload.user,
        error: null,
        isLoading: false
      };

    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };

    default: {
      return state;
    }
  }
}
