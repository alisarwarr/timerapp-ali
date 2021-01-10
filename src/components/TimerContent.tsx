import React from 'react';
import Typography from '@material-ui/core/Typography';

interface TimerContentProps {
    value : number;
}

function TimerContent({ value }: TimerContentProps) {
    return (
        <div>
            <Typography component="p">
                {
                    (value >= 0 && value <= 9)
                    ? `0${value}` : value
                }
            </Typography>
        </div>
    )
}

export default TimerContent;