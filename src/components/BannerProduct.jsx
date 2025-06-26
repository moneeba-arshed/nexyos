import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Item = ({ id, level }) => {
  const className = `item level${level}`;
  return <div className={className}>{id}</div>;
};

const Carousel = ({ items, initialActive }) => {
  const [active, setActive] = useState(initialActive);
  const [direction, setDirection] = useState('');

  const moveLeft = () => {
    const newActive = active - 1 < 0 ? items.length - 1 : active - 1;
    setActive(newActive);
    setDirection('left');
  };

  const moveRight = () => {
    const newActive = (active + 1) % items.length;
    setActive(newActive);
    setDirection('right');
  };

  const generateItems = () => {
    const output = [];
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      const level = active - i;
      output.push(<Item key={index} id={items[index]} level={level} />);
    }
    return output;
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <TransitionGroup className={direction}>{generateItems()}</TransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
  );
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function AnimatedCarousel() {
  return <Carousel items={items} initialActive={0} />;
}
