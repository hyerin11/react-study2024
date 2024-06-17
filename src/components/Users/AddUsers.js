import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

// AddUsers 컴포넌트는 사용자 추가 폼을 렌더링하고 사용자 데이터를 부모 컴포넌트로 전달합니다.
const AddUsers = ({ onAddUser }) => {
  // useState를 사용하여 사용자 이름과 나이 상태를 관리합니다.
  const [userValue, setUserValue] = useState({
    username: '',
    age: '',
  });

  // 사용자 이름 변경 핸들러
  const usernameChangeHandler = (e) => { 
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      username: e.target.value,
    }));
  };

  // 사용자 나이 변경 핸들러
  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      age: e.target.value,
    }));
  };

  // 폼 제출 핸들러
  const userSubmitHandler = (e) => {
    e.preventDefault();

    // 입력값 검증
    if (userValue.username.trim() === '' || userValue.age.trim() === '') {
      return;
    }

    // 나이 검증 (1 미만의 값은 허용하지 않음)
    if (+userValue.age < 1) return;

    // 유효한 사용자 데이터를 부모 컴포넌트로 전달
    onAddUser(userValue);

    // 폼 초기화
    setUserValue({
      username: '',
      age: '',
    });
  };

  return (
    <> 
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={userValue.username}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={userValue.age}
          />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
