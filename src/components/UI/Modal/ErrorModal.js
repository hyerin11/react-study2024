import React from 'react';
//portal을 사용하기 위한 불러오기
import ReactDOM from 'react-dom';

import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';

const Backdrop = ({onClose}) => {
    return (
        <div className={styles.backdrop} onClick={onClose} />
    );
};

const ModaOverlay = ({title, message, onClose}) => {
    return (
<Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onClose}>Ok</Button>
        </footer>
      </Card>
    );
}

const ErrorModal = ({title, message, onClose}) => {
  return (
    <>
    {
        ReactDOM.createPortal(
            <Backdrop onClose={onClose} /> //이 백드롭을 포탈을 태워 보낼 것 이다.
            , document.getElementById('backdrop-root') //여기로 보낼 것 이다
        )
    }
    {
        ReactDOM.createPortal(
            <ModaOverlay title={title} message={message} onClose={onClose} />
            , document.getElementById('overlay-root')
        )
    }

      
    </>
  );
};

export default ErrorModal;