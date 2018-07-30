import React from 'react';

export default function Hint(props) {
        const num1 = props.value;
        const num2 = props.correct;
        const h = (num1 < num2) ? num2 - num1 : num1 - num2
        if (num1 === 0 ){
            return (<div><h1>Start Guessing!</h1></div>);
        }
        if (h === 0) {
        return (<div><h1>Correct</h1></div>);
        }
        else if (h < 5) {
            return (<div><h1>Hot! Hot! Hot!</h1></div>);
        }
        else if (h < 10) {
            return (<div><h1>Warmest!</h1></div>);
        }
        else if (h < 20) {
            return (<div><h1>Warmer!</h1></div>);
        }
        else {
            return (<div><h1>Yikes You're Cold</h1></div>);
        }

    }