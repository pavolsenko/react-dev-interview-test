import * as React from 'react';
import {Button, Container, Paper, Typography} from '@material-ui/core';
import axios from 'axios';

interface IWeather {
    description: any;
    temperature: any;
}

interface IWeatherBoxProps {
    location: any;
    units?: any;
}

interface IWeatherBoxState {
    weather?: IWeather;
}

export class WeatherBox extends React.PureComponent<IWeatherBoxProps, IWeatherBoxState> {
    constructor(props: IWeatherBoxProps) {
        super(props);

        this.fetchWeather = this.fetchWeather.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    public async fetchWeather() {
        const result = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                appId: process.env.REACT_APP_API_KEY,
                q: this.props.location,
                units: this.props.units || 'metric',
            },
        });

        this.setState({
            weather: {
                description: result.data.weather[0].main,
                temperature: result.data.main.temp,
            },
        });
    }

    public componentDidMount() {
        this.fetchWeather();
    }

    public onClick() {
        this.fetchWeather();
    }

    public render() {
        return (
            <Container maxWidth='sm'>
                <Paper elevation={3}>
                    <div>
                        <Typography variant={'h4'} component={'h1'}>Weather in {this.props.location}</Typography>
                    </div>

                    <div>
                        <Typography variant={'h2'} component={'div'}>
                            {this.state?.weather?.temperature || '-'}°C
                        </Typography>

                        <Typography variant={'h3'} component={'div'}>
                            {this.state?.weather?.description || '-'}
                        </Typography>
                    </div>

                    <div>
                        <Button
                            onClick={this.onClick}
                            variant={'contained'}
                        >
                            Reload weather
                        </Button>
                    </div>
                    </Paper>
            </Container>
        );
    }
}
