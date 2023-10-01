import React, { useEffect, useState } from 'react';
import './home.css';

/* Search Icon */
import { BiSearch } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';

/* Images */
import img1 from '../../images/img__1.jpg';
import img2 from '../../images/img__2.jpg';
import img3 from '../../images/img__3.jpg';
import img4 from '../../images/img__4.jpg';
import img5 from '../../images/img__5.jpg';
import img6 from '../../images/img__6.jpg';
import img7 from '../../images/img__7.jpg';
import img8 from '../../images/img__8.jpg';
import img9 from '../../images/img__9.jpg';
import img10 from '../../images/img__10.jpg';
import img11 from '../../images/img__11.jpg';
import img12 from '../../images/img__12.jpg';
import img13 from '../../images/img__13.jpg';
import img14 from '../../images/img__14.jpg';
import img15 from '../../images/img__15.jpg';
import img16 from '../../images/img__16.jpg';
import img17 from '../../images/img__17.jpg';
import img18 from '../../images/img__18.jpg';

const Home = () => {
  const [range, setRange] = useState(5);
  const [maxRange, setMaxRange] = useState(8);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  /* Array of Images Objects */
  const images = [
    {
      id: 1,
      path: img1,
      desc: 'Llustration of witches in a forest by van gogh, black cat, candels, moon, vegetation in the back, fantastical, magical, pink colors',
    },
    { id: 2, path: img2, desc: 'Realistic quetzalcoatl' },
    {
      id: 3,
      path: img3,
      desc: 'Cute and adorable cartoon it baby, fantasy, dreamlike, surrealism, super cute, trending on artstation',
    },
    {
      id: 4,
      path: img4,
      desc: 'Vintage 90s anime style environmental wide shot of a chaotic arcade at night',
    },
    {
      id: 5,
      path: img5,
      desc: 'Portrait of a young facing the camera, male, short hair samuray, with glasses, serious gaze, cartoon, in the nature background',
    },
    {
      id: 6,
      path: img6,
      desc: 'Beautifull girl raw photo, hyper detailed ultra sharp, bloodwave, ornate, intricate, digital painting, concept art, smooth, sharp focus, illustration, 8k',
    },
    {
      id: 7,
      path: img7,
      desc: 'A cyber warrior in a burnt land, extremely highly detailed futuristic navy seals commando armor, war photography style    ',
    },
    {
      id: 8,
      path: img8,
      desc: 'Futuristic cyberpunk masked assassin, half cyborg, riding a motorcycle, full body, in heavy rain, open road, neon lights, cyberpunk city, hyper realistic, unreal engine',
    },
    {
      id: 9,
      path: img9,
      desc: 'review and demonstrate the pros and cons of various products in a specific niche, such as tech gadgets, beauty products, or fitness equipment.',
    },
    {
      id: 10,
      path: img10,
      desc: 'Cute girl in blue dress black hair black wayfarer glasses sitting psychedelic patterns inside cafe holding cup of coffee with background by greg rutkowski makoto shinkai kyoto animation key art feminine mid shot',
    },
    {
      id: 11,
      path: img11,
      desc: 'Realistic, ultra hd, animated panda bear, in street clothes, on a rainy day, with an umbrella and rain boots in night glasses.',
    },
    {
      id: 12,
      path: img12,
      desc: 'Far off in the distance an ornate ice palace on mt. olympus, vibrant colorful stunning dynamically lit dynamically composed dynamic depth high detail high resolution 4k hd photograph',
    },
    {
      id: 13,
      path: img13,
      desc: 'A young woman sitting in a chair, looking at a door ajar, highly detailed illustration at night, cumulonimbus clouds in the sky, rocket launch far over the horizon, by makoto shinkai, by aaron horkey, by moebius, by nico delort,',
    },
    {
      id: 14,
      path: img14,
      desc: 'A 7 years old boy with brown hair and a little smaller blond girl are walking through the forest, they stoped at a lake and they are watching fishes',
    },
    {
      id: 15,
      path: img15,
      desc: 'big robotic rabbit with small robotic rabbit',
    },
    {
      id: 16,
      path: img16,
      desc: 'Hi.. please make me a high quality moving son goku animation, with glowing effect.',
    },
    {
      id: 17,
      path: img17,
      desc: 'Yin yang with the 5 elements of wood, fire, earth, metal and water, realistic',
    },
    {
      id: 18,
      path: img18,
      desc: 'Ultra hd! editorial, white and chrome vintage, iso 400, surrealistic, 8k, bmw m1, simon stalenhag',
    },
  ];

  // function to update window size
  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  // useEffect to track the window size change
  useEffect(() => {
    document.getElementById(
      'range'
    ).style.gridTemplateColumns = `repeat(${range}, 1fr)`;
    window.addEventListener('resize', updateWindowSize);

    if (windowSize <= 757) {
      document.getElementById('range').style.gap = '5px';
      setMaxRange(4);
    } else if (windowSize <= 1000) {
      setMaxRange(6);
    } else if (windowSize > 1000 && range <= '3') {
      document.getElementById('range').style.gap = '40px';
      setMaxRange(8);
    } else if (windowSize > 1000 && range >= '4') {
      document.getElementById('range').style.gap = '5px';
      setMaxRange(8);
    } else {
      setMaxRange(8);
    }
  }, [windowSize, range]);

  /* Function that keep track the value of range variable */
  const handleRange = (event) => {
    const newValue = event.target.value;
    setRange(newValue);
  };
  return (
    <div>
      <h1 className='heading'>Dream Oracle</h1>

      {/* Search Bar */}
      <div className='home__search__bar'>
        <span>
          <BiSearch size={20} />
        </span>
        <input
          type='text'
          id='home__search'
          placeholder='Search for an Image'
        />
      </div>

      {/* Buttons (Search and Generate) below Search Bar */}
      <div className='btns'>
        <button className='sign__in__btn search__btn' type='button'>
          Search
        </button>
        <button className='sign__in__btn gen__btn' type='button'>
          Generate
        </button>
      </div>

      {/* Range that adjust the images Columns */}
      <div className='range__wrapper'>
        <p>columns: {range}</p>
        <input
          type='range'
          id='col__range'
          min={1}
          max={maxRange}
          step={1}
          value={range}
          onChange={handleRange}
        />
      </div>
      <div id='range' className={`col col-${range}`}>
        {images.map((images, i) => {
          return (
            <div
              style={{ position: 'relative' }}
              key={i}
              className='box'
              id='box'
            >
              <div className='icons__wrapper'>
                <div className='icons'>
                  <span>
                    <CiSearch size={20} />
                  </span>
                  <span>
                    <AiOutlineHeart size={20} />
                  </span>
                </div>
              </div>
              <img
                loading='lazy'
                id='img'
                src={images.path}
                alt={images.desc}
              />
              <div className='content__wrapper'>
                {/* <div className='icons'>
                  <span>
                    <CiSearch size={20} />
                  </span>
                  <span>
                    <AiOutlineHeart size={20} />
                  </span>
                </div> */}
                <p className='images__prompt'>{images.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
