import React, { useState } from 'react';

import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';

const Login = ({ onLogin }) => {
  // 사용자가 입력한 이메일 상태관리
  const [enteredEmail, setEnteredEmail] = useState('');
  // 이메일 입력값이 정상인지 유무 확인
  const [emailIsValid, setEmailIsValid] = useState();
  // 사용자가 입력한 비밀번호 상태관리
  const [enteredPassword, setEnteredPassword] = useState('');
  // 패스워드 입력값이 정상인지 유무 확인
  const [passwordIsValid, setPasswordIsValid] = useState();
  // 이메일, 패스워드 둘 다 정상인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormIsValid(
      e.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  // 로그인 버튼을 눌렀을 때 이벤트 핸들러
  const submitHandler = (e) => {
    e.preventDefault();
    //App.js에서 호출받아옴
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            // 포커스를 잃었을 때.(마우스가 떠났을 때 검사를 함)
            onBlur={validateEmailHandler}

          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div className={styles.actions}>
          <Button
          type="submit"
          className={styles.btn}
          disabled={!formIsValid}>
            Login
          </Button>
        </div>

      </form>
    </Card>
  );
};

export default Login;
