import React, { useRef, useState, useEffect } from "react";
import throttle from 'lodash.throttle';
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const FixedBottom = ({ children, offset }) => {
    const safariOffset = 44;
    const anchorRef = useRef(null);
    const [bottom, setBottom] = useState(0)

    const getOffsetBottom = () => {
        if (!anchorRef.current) return
        // const {bottom} = anchorRef.current.getBoundingClientRect();
        if (Math.floor(bottom) > window.innerHeight) {
            setBottom(offset + safariOffset);
        } else {
            setBottom(offset);
        }
    };

    const handleScroll = throttle(getOffsetBottom, 200)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    }, []);

    //
    // if (trigger) {
    //     window.addEventListener('scroll', handleScroll);
    // }


    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: {bottom},
                }}
            >
                {children}
            </div>

            <div
                ref={anchorRef}
                style={{
                    position: 'fixed',
                    bottom: {offset},
                }}
            />
        </>

    )
}

FixedBottom.propTypes = {
    children: PropTypes.element.isRequired,
    offset: PropTypes.number,
};

export default FixedBottom