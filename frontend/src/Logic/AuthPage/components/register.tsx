import React, { RefObject } from 'react';
import loginImg from '../../../Resources/login.svg';

interface RegisterStateProps {
  containerRef: RefObject<HTMLDivElement>
}

const Register: React.FC<RegisterStateProps> = () => (
  <div className="base-container">
    <div className="header">Register</div>
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
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="email" />
        </div>
        <div className="form-group">
          <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn">
        Register
      </button>
    </div>
  </div>
);

export default Register;
