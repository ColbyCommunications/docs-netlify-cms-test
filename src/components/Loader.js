import React from 'react';
import PropTypes from 'prop-types';
import style from './loader.module.scss';

import { CSSTransition } from 'react-transition-group';

// delays to show spinner just to avoid spinner flickering

export default class GlobalLoader extends React.Component {
    static propTypes = {
        loading: PropTypes.bool,
    };

    static defaultProps = {
        loading: false,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const defaultStyle = {
            transition: `opacity 500ms ease-in-out`,
            opacity: 0,
        };
        return (
            <div className={`${style.wrapper} h-screen`}>
                <div className={`${style.inlineSpinner}`} />
            </div>
        );
    }
}
