# React dev interview test

## Instructions
1. Clone or fork this repository.
2. Register at *OpenWeatherMap.org* and get an API key here https://home.openweathermap.org/api_keys
3. Rename the file `.env.example` to `.env` and copy your weather API key there.   
4. Complete the tasks listed below.
5. Make sure your app runs with `npm run start` and all the tests pass with `npm run test`.   
6. When done submit a new public repo with your code or submit a pull request in case of a fork. 

## Tasks
1. Rewrite the class component in `WeatherBox.tsx` into a functional component.
2. In your new functional component add all missing typescript type declarations for variables, functions and parameters. Replace all `any` declarations with correct types.
3. Add a loading indicator to the component while the asynchronous call to the weather API is being executed.
4. Add some styling using Material UI's `useStyles` hook (add some vertical padding to the elements and some colors to the text).  
5. Create an input element using included `Material UI` library and load the weather data dynamically based on user input of a city.   
6. Add at least 3 more unit tests to your app using preconfigured jest setup.
7. Add and configure a tool to check code quality/static analysis (runnable by npm command).
