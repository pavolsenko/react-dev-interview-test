import React from 'react';
import './App.css';

import {WeatherBox} from './components/WeatherBox';

function App() {
    return (
        <div className='App'>
            <WeatherBox
                location={'Zilina, Slovakia'}
            />
        </div>
    );
}

export default App;
