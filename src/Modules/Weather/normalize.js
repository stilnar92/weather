import {timeStampConvertTime, getIconClass, getDayOfWeek} from  './Utils';
import {DAYS} from './Constants'

export const currentWeatherMapped = (current) => {
    const {
        weather: [
            {
                description,
                icon
            }
        ],
        dt: currentDate,
        main: {
            temp,
            humidity
        },
        wind
    } = current;
    return {
        iconClass: getIconClass(icon),
        description,
        currentDate: timeStampConvertTime(currentDate),
        temp,
        humidity,
        windSpeed: wind.speed,
        windDegree: parseInt(wind.deg, 10),
    }
}

export const predictsWeatherMapped = (predicts) => {
    return predicts.filter((predict, index) => DAYS.includes(index))
                    .map((predict) => {
                        return {
                            weekDay: getDayOfWeek(predict.dt),
                            iconClass: getIconClass(predict.weather[0].icon),
                            tempMax: predict.main.temp_max,
                            tempMin: predict.main.temp_min
                        }
                    })
}
