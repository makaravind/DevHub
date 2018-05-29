import React from 'react';
import Moment from 'react-moment';

function CountDownTimer({time}) {
    return (
        <small>
            <Moment subtract={{minutes: 60}} interval={1000} format="MM/DD HH:MM:SS">
                {time}
            </Moment>
        </small>
    )
}

export default CountDownTimer