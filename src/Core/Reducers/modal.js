export const modal = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                [action.payload]: {
                    isShow: true
                }
            }
        case 'CLOSE_MODAL':
            return {
                [action.payload]: {
                    isShow: false
                }
            }
        default:
            return state
    }
}