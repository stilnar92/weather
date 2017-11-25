import {daysOfWeek} from './Constants';

export const timeStampConvertTime = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substr(-2)}`
}

export const getDayofWeek = (timeStamp) => {
    return daysOfWeek[new Date(timeStamp * 1000).getDay()];
}
export const getIconClass = (code) => {
    switch (code) {
        case '01d':
            return 'clear-sky-day';
        case '01n':
            return 'clear-sky-night';
        case '02d':
            return 'few-cloudy-day';
        case '02n':
            return 'few-cloudy-night';
        case '03n':
            return 'scattered-cloudy';
        case '03d':
            return 'scattered-cloudy';
        case '04n':
            return 'broken-cloudy';
        case '04d':
            return 'broken-cloudy';
        case '09n':
            return 'shower-rain';
        case '09d':
            return 'shower-rain';
        case '10d':
            return 'rain-day';
        case '10n':
            return 'rain-night';
        case '11d':
            return 'thunderstorm';
        case '11n':
            return 'thunderstorm';
        case '13d':
            return 'snow';
        case '13n':
            return 'snow';
        case '50d':
            return 'mist';
        case '50n':
            return 'mist';
        default:
            return 'clear-sky-day'

    }
}
