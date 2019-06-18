export const Actions = {
    INCREMENT: { type: 'INCREMENT' },
    DECREMENT: { type: 'DECREMENT' },
}

export default function counter(state = 0, action) {
    switch (action.type) {
        case Actions.INCREMENT.type:
            return state + 1
        case Actions.DECREMENT.type:
            return state - 1
        default:
            return state
    }
}
