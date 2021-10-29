import React from 'react';

// third party packages
import moment from 'moment';

// container
import CarerAvailability from './container/add-availability';

import './App.css';

const currentDate = new Date(moment().valueOf());

const App = () => {

	return (
		<div className="container">
			<CarerAvailability date={currentDate} />
		</div>
	)
}

export default App
