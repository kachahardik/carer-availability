import React from 'react'

import Week from '../../component/week'

const CarerAvailability = (props) => {

    const { date } = props;

    return (
        <Week date={date} />
    )
}

export default CarerAvailability
