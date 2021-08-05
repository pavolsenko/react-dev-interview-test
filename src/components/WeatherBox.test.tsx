import React from 'react';
import { render, screen } from '@testing-library/react';
import {WeatherBox} from './WeatherBox';

test('renders the weather box', () => {
    render(<WeatherBox location={'Zilina, Slovakia'}/>);
    const weatherComponent = screen.getByText('Reload weather');
    expect(weatherComponent).toBeInTheDocument();
});
