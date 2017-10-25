import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import * as Course from './Course';

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState;
    course: Course.CourseState;
    weatherForecasts: WeatherForecasts.WeatherForecastsState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    course:Course.reducer,
    weatherForecasts: WeatherForecasts.reducer
};