import React from 'react';
import './generate.css';

import { BsFileImage } from 'react-icons/bs';
import { BsImage } from 'react-icons/bs';

import { BiFullscreen } from 'react-icons/bi';
import { BiListUl } from 'react-icons/bi';

const Generate = () => {
  return (
    <section id='generate'>
      <div className='left'>
        <div className='describe__image'>
          <label htmlFor='describe'>Describe your image</label>
          <br />
          <textarea
            name='describe'
            id='describe'
            placeholder='A flower with white petals'
            rows='5'
          ></textarea>
          <br />
          <label htmlFor='negative'>Negative Prompt</label>
          <br />
          <input
            type='text'
            name='negative'
            id='negative'
            placeholder='blurry'
          />{' '}
          <br />
          <button
            style={{
              borderRadius: '20px',
              width: '150px',
              border: '2px solid var(--button--background--color)',
              float: 'right',
              clear: 'both',
              position: 'relative',
              right: '0px',
              marginTop: '11px',
            }}
            className='sign__in__btn'
            type='button'
          >
            Generate
          </button>
        </div>
      </div>
      <div className='right'>
        <div className='inner__right'>
          <p className='title'>
            {' '}
            <span>
              <BiFullscreen />
            </span>{' '}
            Dimensions
          </p>
          <input
            id='dimension__range'
            type='range'
            min={0}
            max={256}
            value={256}
            disabled
          />
          <br />
          <div className='resourse'>
            <BsFileImage />
            <BsImage />
          </div>
          <p className='dimensions'>256 x 256</p>

          <hr className='horizontal__row' />

          <p className='title model__type'>
            <span>
              <BiListUl size={20} />
            </span>{' '}
            Model Type
          </p>
          <p style={{ opacity: '1', marginTop: '0' }} className='title'>
            stGAN Model
          </p>
        </div>
      </div>
    </section>
  );
};

export default Generate;
