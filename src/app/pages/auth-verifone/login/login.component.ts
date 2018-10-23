import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}


  ngOnInit() {}
  /**
   * @method login
   * @description метод выполнения передачи данных пользователя для авторизации
   * @param authenticate
   */
  login(authenticate: Authenticate) {
    const action = {
      type: 'LOGIN',
      payload: authenticate
    };
    this.store.dispatch(action);
  }
}
