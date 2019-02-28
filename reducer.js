//Import

//Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators
// play button pressed
function startTimer() {
    return {
        type: START_TIMER
    };
}

// stop button pressed
function restartTimer() {
    return {
        type: RESTART_TIMER
    };
}

// if elapsed time is over time_duration, auto stop timer
// else ealpse time
function addSecond() {
    return {
        type: ADD_SECOND
    };
}

//Reducer
const TIME_DURATION = 1500;
const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timeDuration: TIME_DURATION
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);

        case RESTART_TIMER:
            return applyRestartTimer(state);

        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

//Reducer function
function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: true
    };
}

function applyRestartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    };
}

function applyAddSecond(state) {
    if (state.elapsedTime < TIME_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    } else {
        return {
            ...state,
            isPlaying: false,
            elapsedTime: 0
        };
    }
}

//export action Creators
const actionCreator = {
    startTimer,
    restartTimer,
    addSecond
};
export { actionCreator };

//export reducer
export default reducer;
