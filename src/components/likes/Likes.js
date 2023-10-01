import React, { useState } from 'react';
import './likes.css';

const Likes = () => {
  const [range, setRange] = useState(5);

  /* Function that keep track the value of range variable */
  const handleRange = (event) => {
    const newValue = event.target.value;
    setRange(newValue);
  };
  return (
    <div>
      <h1 className='likes__heading'>Likes</h1>

      <div className='like__range__wrapper'>
        <p>columns: {range}</p>
        <input
          type='range'
          id='col__range'
          min={1}
          max={8}
          step={1}
          value={range}
          onChange={handleRange}
        />
      </div>

      <p style={{ color: '#fff', opacity: '0.5', textAlign: 'center' }}>
        You haven't like any Image
      </p>
      {/* <div id='range' className={`col col-${range}`}>
        {images.map((images, i) => {
          return (
            <div key={i} className='box'>
              <img src={images.path} alt='' />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Likes;
