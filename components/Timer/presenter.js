import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

class Timers extends Component {
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if (!currentProps.isPlaying && nextProps.isPlaying) {
            //start Interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({ timerInterval });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            //stop Interval
            clearInterval(this.state.timerInterval);
        }
    }

    render() {
        const {
            isPlaying,
            elapsedTime,
            timeDuration,
            startTimer,
            restartTimer,
            addSecond
        } = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timeDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && <Button iconName={"play-circle"} onPress={startTimer} />}

                    {isPlaying && <Button iconName={"stop-circle"} onPress={restartTimer} />}
                </View>
            </View>
        );
    }
}

export default Timers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});
