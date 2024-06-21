import React from 'react'
import styles from './Header.module.scss';

//정적 이미지 로딩
import foodImage from'../../../assets/img/meals.jpg'; //변수명을 써줘야 한다.

const Header = () => {
  //console.log('styles: ', styles);

  const {header, 'main-image': mainImage } = styles;

  return (
    <>
    <header className={header}>
        <h1>ReactMeals</h1>    
    </header>
    <div className={mainImage}>
        <img src={foodImage} alt='음식 사진'/>
    </div>
    </>
  );
};

export default Header