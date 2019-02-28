import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Timers from "./presenter";
import { actionCreator as tomatoActionCreators } from "../../reducer";

function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timeDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timeDuration
    };
}

function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActionCreators.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActionCreators.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActionCreators.addSecond, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timers);
