import React from 'react';

const GuessList = (props) => {
    const guesses = props.history.reverse().map(((value, index) => (
        <li key={index}>{value}</li>
    )));
    console.log(guesses); 
    return ( 
        <ul>
        {guesses}
        </ul>
     );
}
 
export default GuessList;