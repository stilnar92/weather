export class InterfaceActions {
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

    showModal(type) {
        this.dispatch(
            {
                type: 'SHOW_MODAL',
                payload: type

            }
        )
    }

    closeModal(type) {
        this.dispatch(
            {
                type: 'CLOSE_MODAL',
                payload: type

            }
        )
    }
}