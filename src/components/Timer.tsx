import React, { useState, useEffect, useRef } from 'react';
import Card from '@material-ui/core/Card';
import TimerContent from './TimerContent';
import TimerButton from './TimerButton';

function Timer() {
    const [ hrs, setHrs ] = useState(0);
    const [ min, setMin ] = useState(0);
    const [ sec, setSec ] = useState(0);
    const [ disableStart, setDisableStart ] = useState(false);
    const [ disableStop , setDisableStop  ] = useState(true);
    const [ disableReset, setDisableReset ] = useState(true);
    var countRef = useRef<any>(null);      //'useRef' beacuse interval can't store in variable or state but can store in useRef of ReactJS
    var firstRun = useRef<boolean>(true);  //'useRef' beacuse firstRun can't store in variable but can store in useRef or state of ReactJS
    

    useEffect(() => {
        if(sec === 0 && !firstRun.current) {
            (() => setMin(x => (x === 59) ? 0 : x + 1))();
        }
    }, [sec === 0]);

    useEffect(() => {
        if(min === 0 && !firstRun.current) {
            (() => setHrs(x => x + 1))();
        }
    }, [min === 0]);

    
    const handleStart = () => {
        countRef.current =  setInterval(() => {
                               setSec(x => (x === 59) ? 0 : x + 1);
                            }, 1000);
        firstRun.current = false;
        setDisableStart(true);
        setDisableStop(false);
        setDisableReset(false);
    }

    const handleStop = () => {
        clearInterval(countRef.current);
        setDisableStart(false);
        setDisableStop(true);
        setDisableReset(false);

        if(hrs === 0 && min === 0 && sec === 0) {
          //back to initially
            setDisableStart(false);
            setDisableStop(true);
            setDisableReset(true);
        }
    }

    const handleReset = () => {
        clearInterval(countRef.current);
        setHrs(0); setMin(0); setSec(0);
        firstRun.current = true;
        //back to initially
        setDisableStart(false);
        setDisableStop(true);
        setDisableReset(true);
    }

    
    return (
        <Card className="timer" raised>
            <div className="timer_content">
                <TimerContent value={hrs}/> <span style={{ fontSize: "5.25rem" }}>:</span>
                <TimerContent value={min}/> <span style={{ fontSize: "5.25rem" }}>:</span>
                <TimerContent value={sec}/>
            </div>

            <div className="timer_button">
                <TimerButton value="start" handleFunc={handleStart} disabled={disableStart}/>
                <TimerButton value="stop"  handleFunc={handleStop}  disabled={disableStop}/>
                <TimerButton value="reset" handleFunc={handleReset} disabled={disableReset}/>
            </div>
        </Card>
    )
}

export default Timer;