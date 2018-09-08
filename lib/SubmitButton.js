import React from 'react';
import render from 'react-dom';
import PropTypes from 'prop-types';

export default class SubmitButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            loading: false,
            loaded: false
        };
    }
    
    getButtonClass() {
        const { clicked } = this.state;

        let btnClass = 'submit-btn';

        if (clicked) {
            btnClass += ' round';
        }

        return btnClass;
    }

    render() {
        const label = this.props.hasOwnProperty('label') ? this.props.label : 'Submit';
        const el = this.props.hasOwnProperty('el') ? this.props.el : 'submit-button';
        return (
            <div id={el} className="submit-container">
                <div className={this.getButtonClass()} onClick={e => {
                    this.setState({
                        clicked: true
                    });
                }}>
                    <span>{label}</span>    
                </div>

                <svg className="loader-svg">
                <path stroke="#CCCCCC" fill="none" strokeWidth="4" d="M25,2.5A22.5,22.5 0 1 1 2.5,25A22.5,22.5 0 0 1 25,2.5"></path>
                </svg>

                <svg className="loader-svg">
                <path stroke="#20BF7E" fill="none" strokeWidth="4" d="M25,2.5A22.5,22.5 0 1 1 2.5,25A22.5,22.5 0 0 1 25,2.5"></path>
                </svg>
            </div>
        );
    }
}

SubmitButton.propTypes = {
}
