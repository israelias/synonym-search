import React, {
  useState,
  useEffect,
  cloneElement,
  Children,
  ReactHTMLElement,
} from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

const SAFARI_MOBILE_BOTTOM_MENU_HEIGHT = 44;

const BottomRef = ({ children, offset = 0 }) => {
  const [defaultOffset, setDefaultOffset] = useState(0);
  const [defaultBottom, setDefaultBottom] = useState(defaultOffset);

  const anchorRef = React.useRef(null);

  const computeOffsetBottoms = (_anchorRef, _offset) => {
    // const elementRef = React.useRef(this.anchorRef);
    console.log('ref', _anchorRef);
    if (!_anchorRef.current) {
      console.log('nope');
      return;
    }
    console.log('ref', _anchorRef.current);
    const bottom = _anchorRef.current?.getBoundingClientRect().bottom;
    console.log(
      'ref',
      _anchorRef.current.getBoundingClientRect().bottom
    );

    if (Math.floor(bottom) > window.innerHeight) {
      setDefaultBottom(_offset + SAFARI_MOBILE_BOTTOM_MENU_HEIGHT);
    } else {
      setDefaultBottom(_offset);
    }
  };

  // const handleScroll = (_anchorRef, _offset) => {
  //   return throttle(computeOffsetBottom(_anchorRef, _offset), 200);
  // };

  const computeOffsetBottom = () => {
    console.log('ref', anchorRef);
    if (!anchorRef.current) {
      console.log('nope');
      return;
    }
    console.log('ref', anchorRef.current);
    const bottom = anchorRef.current?.getBoundingClientRect()?.bottom;
    console.log(
      'ref',
      anchorRef.current?.getBoundingClientRect()?.bottom
    );

    if (Math.floor(bottom) > window.innerHeight) {
      setDefaultBottom(offset + SAFARI_MOBILE_BOTTOM_MENU_HEIGHT);
    } else {
      setDefaultBottom(offset);
    }
  };

  const handleScroll = throttle(computeOffsetBottom, 200);

  /**
   * componentWillUnmount is use for cleanup (like removing event listeners, cancel the timer etc).
   * Say you are adding a event listener in componentDidMount and removing it in componentWillUnmount as below
   */
  useEffect(() => {
    if (anchorRef.current) {
      window.addEventListener('scroll', () => {
        if (anchorRef.current) {
          handleScroll();
        }
      });

      // returned function will be called on component unmount
      return () => {
        handleScroll.cancel();
        window.removeEventListener('scroll', () => {
          handleScroll();
        });
      };
    }
  }, [anchorRef.current]);

  // const node = cloneElement(Children.only(children), {
  //   style: {
  //     ...children.props.style,
  //     bottom: defaultBottom,
  //     position: 'fixed',
  //   },
  // });
  return (
    <>
      {children}
      {/* This div is used to run compute the offset without adding a ref */}
      {/* on the rendered children */}
      <div
        ref={anchorRef}
        style={{
          position: 'fixed',
          bottom: defaultOffset,
        }}
      />
    </>
  );
};

export default BottomRef;
