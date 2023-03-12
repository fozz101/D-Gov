import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

function Counter({ start, end, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.querySelector('.counter');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top <= windowHeight - delay;
        setIsVisible(isVisible);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [delay]);

  return (
    <div className="counter">

      {isVisible ? (
        <CountUp start={start} end={end} duration={2} />
      ) : (
        end
      )}      <span className='text-xl'>+</span>
    </div>
  );
}

export default Counter;
