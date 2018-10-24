import { UserCredantionals } from './actions';

export interface State {
  userCredantionals: UserCredantionals;
  isLoading: boolean;
  error: string;
}

export const initionalState: State = {
  userCredantionals: null,
  isLoading: false,
  error: null
};
