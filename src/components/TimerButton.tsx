import React from 'react';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface TimerButtonProps {
    value : string;
    handleFunc : () => void;
    disabled : boolean;
}

function TimerButton({ value, handleFunc, disabled }: TimerButtonProps) {
    const screen250 = useMediaQuery('(max-width:250px)');

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                size={screen250 ? "small" : "medium"}
                onClick={handleFunc}
                disabled={disabled}
            >
                {value}
            </Button>
        </div>
    )
}

export default TimerButton;