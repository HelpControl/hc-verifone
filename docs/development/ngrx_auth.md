# Модуль Авторизация с использовнием ngrx/store

Создадим стандартный feature store модуль для хренения и управления состоянием авторизованности.
Новый модуль генерируется с добавленим в импорт корневого модуля состоянияю

Создадим новый стандартный модуль состояний с обязательной регистрацией как зависимость в корневом Root Store

```bash
$ng g m _root-store/auth-store --flat false --module _root-store/root-store.module.ts
```

Далее создаем файл для `Actions`

```bash
$ng g class _root-store/auth-store/actions
```

и изменяем содержание следующим образом 

```javascript
import { Action } from '@ngrx/store';
export class UserCredantionals {
  login: string;
  constructor() {}
}
export enum ActionTypes {
  LOGIN_REGUEST = '[AuthStore] Login request',
  LOGIN_FAILURE = '[AuthStore] Login failure',
  LOGIN_SUCCESS = '[Class] Login success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REGUEST;
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
```

Далее необходимо создать в директории `feature store` файл `state.ts`

```bash
$ng g interface _root-store/state
```

Заменяем содержимое 

```javascript
import { UserCredantionals } from './actions';

export interface State {
  userCredantionals: UserCredantionals;
  isLoading: boolean;
  error: string;
}

export const InitionalState: State = {
  userCredantionals: null,
  isLoading: false,
  error: null
};
```