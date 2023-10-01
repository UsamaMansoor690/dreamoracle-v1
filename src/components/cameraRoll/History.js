import React, { useState } from 'react';
import './history.css';

/* Search Icon */
import { BiSearch } from 'react-icons/bi';

const History = () => {
  const [range, setRange] = useState(5);

  /* Function that keep track the value of range variable */
  const handleRange = (event) => {
    const newValue = event.target.value;
    setRange(newValue);
  };

  return (
    <div>
      <h1 className='history__heading'>History</h1>
      <div className='history__search__wrapper'>
        <span>
          <BiSearch size={20} />
        </span>
        <input
          type='text'
          id='history__search__box'
          placeholder='Search for an image'
        />
      </div>
      <div className='btns'>
        <button
          style={{
            borderRadius: '20px',
            width: '160px',
            border: '2px solid var(--button--background--color)',
          }}
          className='sign__in__btn'
          type='button'
        >
          Search
        </button>
      </div>

      <div className='range__wrapper'>
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
        Nothing to show in History
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

export default History;
