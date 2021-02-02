/**
 * This component is forked from a react-fixed-bottom gist.
 * Source in https://gist.github.com/israelias/a1f24435b411baad24fec9aba8ab2286
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

const SAFARI_MOBILE_BOTTOM_MENU_HEIGHT = 44;

export default class FixedBottom extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        offset: PropTypes.number,
    };

    static defaultProps = {
        offset: 0,
    };

    state = {
        bottom: this.props.offset,
    };

    // Embrace React
    anchorRef = React.createRef();

    constructor(props) {
        super(props);
        // We don't want the framerate to crash, do we?
        this.handleScroll = throttle(this.computeOffsetBottom, 200);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Throttled calls may be scheduled before the component unmounts
        this.handleScroll.cancel();
        window.removeEventListener('scroll', this.handleScroll);
    }

    computeOffsetBottom = () => {
        if (!this.anchorRef.current) {
            return;
        }

        const {bottom} = this.anchorRef.current.getBoundingClientRect();
        const {offset} = this.props;
        if (Math.floor(bottom) > window.innerHeight) {
            this.setState({bottom: offset + SAFARI_MOBILE_BOTTOM_MENU_HEIGHT});
        } else {
            this.setState({bottom: offset});
        }
    };

    render() {
        const {bottom} = this.state;
        const {children, offset} = this.props;
        const node = React.cloneElement(React.Children.only(children), {
            style: {
                ...children.props.style,
                bottom,
                position: 'fixed'
            },
        });
        return (
            <>
                {node}
                {/* This div is used to run compute the offset without adding a ref */}
                {/* on the rendered children */}
                <div
                    ref={this.anchorRef}
                    style={{
                        position: 'fixed',
                        bottom: offset,
                    }}
                />
            </>
        );
    }
}
