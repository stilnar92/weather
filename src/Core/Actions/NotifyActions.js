export class NotifyActions {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    notify({type, message}) {
        this.dispatch(
            {
                type: type,
                payload: message
            }
        )
    }
    clear() {
        this.dispatch(
            {
                type: 'CLEAR_ERROR'
            }
        )
    }
}