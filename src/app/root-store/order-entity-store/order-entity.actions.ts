import { Action } from 'ngrx/store';

class Order {
  id: string;
  title: string;
  constructor(dto: any) {
    if(!dto){
      return nu
    }
    this.id = dto.id;
    this.title = dto.title;
  }

  public static fromDTO(dto) {
    return new Order(dto);
  }
}

export enum ActionTypes {
  LOAD_REQUEST = '[Order] Get order list',
  LOAD_FAILURE = '[Order] Update Order',
  LOAD_SUCCESS = '[Order] Delete'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFaliureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Order[] }) {}
}

export type Actions = LoadRequestAction | LoadFaliureAction | LoadSuccessAction;
