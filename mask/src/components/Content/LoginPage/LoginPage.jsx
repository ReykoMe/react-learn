import React from 'react';
const LoginForm = (props) => {
   return (
    <form>
    <div class="form-group">
      <label for="emailInput">Введите свой электронный адрес</label>
      <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Введите электронную почту" />
      <small id="emailHelp" class="form-text text-muted">Никогда и никому не сообщеайте эти данные</small>
    </div>
    <div class="form-group">
      <label for="passwordInput">Пароль</label>
      <input type="password" class="form-control" id="passwordInput" placeholder="Введите пароль" />
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="logoutTimeout" />
      <label class="form-check-label" for="logoutTimeout">Не выходить</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
   )
}

const LoginPage = (props) => {
    return (
        <div>
            <h1>It's a Login Page</h1>
            <LoginForm />
        </div>
    )
}

export default LoginPage