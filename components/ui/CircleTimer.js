import React from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Text } from 'react-native';

const CircleTimer = ({time}) => {
    return ( 
        <CountdownCircleTimer
         isPlaying={true}
         duration={time}
         size={300}
         colors={[
         ['#1F2937', 0.33],
         ['#FFDA00', 0.33],
         ['#DC143C', 0.33],
         ]}
        >
            { ({ remainingTime }) => {
                const minutes = Math.floor(remainingTime / 60)
                const halfTime = Math.floor((time / 60) / 2) > minutes;
                let seconds = remainingTime % 60
                seconds = seconds > 9 ? seconds : `0${seconds}`;
                const isComplete = (minutes === 0) && (parseInt(seconds) === 0);

                return (
                <>
                    <Text style={{fontSize: 40, color: '#000'}}>{minutes}:{seconds}</Text>
                    {(!isComplete && halfTime) && (
                    <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>Almost there!</Text>
                    )}
                    {isComplete && (
                        <Text style={{fontSize: 18, color: '#000', textAlign: 'center', fontWeight: 'bold'}}>
                        Waiting for confirmation from the restaurant...</Text>
                    )}
                </>
                );
            }}              
        </CountdownCircleTimer>
     );
}
 
export default CircleTimer;
