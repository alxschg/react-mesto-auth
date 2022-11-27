import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(email, password);
  }
  return (
    <>
      <Header>
        <Link to="/sign-up" className="header__button">
          Регистрация
        </Link>
      </Header>
      <section className="auth">
        <h2 className="auth__title">Вход</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={handleEmailChange}
            className="auth__input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            onChange={handlePasswordChange}
            className="auth__input"
            placeholder="Пароль"
            required
          />
          <button type="submit" className="auth__button">
            Войти
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
