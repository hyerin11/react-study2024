import React from 'react';

import styles from './EventForm.module.scss';
import { useNavigate } from 'react-router-dom';

const EventForm = ({ method, event={} }) => {

  const {
    title,
    desc: description,
    'img-url': image,
    'start-date': date
  } = event;

  //날짜 형식 변경 (yyy-MM-dd로 변경)
  /**
   * @param date - yyyy년 MM월 dd일
   */
  const convertDateFormat = (date) => {
    // const array = date.split('년 ');
    // console.log(array);
  
    const [yearPart, monthDayPart] = date.split('년 ');
    const [monthPart, dayPart] = monthDayPart.split('월 ');
    const day = dayPart.replace('일', '');

    //console.log('date: ', {yearPart, monthPart, day});
    return `${yearPart}-${monthPart}-${day}`;
  };
  const formatDate = convertDateFormat(date);




  // const { eventId: id } = useParams();
  const navigate = useNavigate();

  const cancelHandler = (e) => {
    // window.location.href = '/events/' + id;
    // navigate('/events/' + id);
    navigate('..');
  };

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? description : ''}
        />
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button>{method === 'post' ? 'Save' : 'Modify'}</button>
      </div>
    </form>
  );
};

export default EventForm;