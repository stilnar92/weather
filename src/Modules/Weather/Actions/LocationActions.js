import {dispatchPromise} from '../../../Core/Utils';

export class LocationActions {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    saveUserLocation = (location) => {
        return dispatchPromise(
            this.dispatch,
            'FIND_USER_LOCATION',
            location
        )
    }

    userConfirmLocation = () => {
        this.dispatch({
                type: 'USER_CONFIRM_LOCATION'
            }
        )
    }
}
