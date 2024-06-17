import React, { useRef, useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import ErrorModal from './components/UI/Modal/ErrorModal';


const App = () => {

// 회원들이 저장될 배열
  const [userList, setUserList] = useState([]); //빈 배열인데

  // let cnt = 1; 일반변수는 절대 올 수 없다.

  const count = useRef(1);

  const addUserHandler = user => { //신규 유저를 넣으면
    
    console.log('count: ',count.current);
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
