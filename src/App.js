import React, { Fragment, useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


const App = () => {

// 회원들이 저장될 배열
  const [userList, setUserList] = useState([]); //빈 배열인데

  const addUserHandler = user => { //신규 유저를 넣으면
    
    console.log(user);
    setUserList(prev => [
      ...prev, //기존 회원 복사해와서
      {...user,
        id: Math.random().toString()}]); //추가회원 넣어줌
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
};

export default App;
