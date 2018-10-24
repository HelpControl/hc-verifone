import { Action } from '@ngrx/store';
export class UserCredantionals {
  login: string;
  constructor() {}
}
export enum ActionTypes {
  LOGIN_REQUEST = '[AuthStore] Login request',
  LOGIN_FAILURE = '[AuthStore] Login failure',
  LOGIN_SUCCESS = '[Class] Login success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { login: string; password: string }) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: UserCredantionals }) {}
}

export type Actions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction;
