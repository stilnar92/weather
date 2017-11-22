export class ErrorActions {
    notify(errorMessage) {
        this.dispatch(
            {
                type: 'SHOW_ERROR',
                payload: errorMessage
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