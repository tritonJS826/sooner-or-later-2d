import React, { RefObject } from 'react';
import loginImg from '../../../Resources/login.svg';

interface LoginStateProps {
  containerRef: RefObject<HTMLDivElement>
}

const Login: React.FC<LoginStateProps> = () => (
  <div className="base-container">
    <div className="header">Login</div>
    <div className="content">
      <div className="image">
        <img src={loginImg} alt="img-auth" />
      </div>
      <div className="form">
        <div className="form-group">
          <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group">
          <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn">
        Login
      </button>
    </div>
  </div>
);

export default Login;
