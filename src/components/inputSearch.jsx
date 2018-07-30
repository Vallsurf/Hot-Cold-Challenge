import React from 'react';

export default class guessForm extends React.Component {

    onSubmit(value){
        value.preventDefault();
        const guess = this.input.value; 
        this.props.onClick(guess); 
        this.input.value = '';
        this.input.focus();
    }
  
    render(){
    return (
        <form onSubmit={e => this.onSubmit(e)}>
            <label htmlFor="guess">Guess a Number!</label>&emsp;
            <input
                type="guess"
                id="guess"
                name="guess"
                placeholder="Enter a Number"
                autoComplete="off"
                aria-labelledby="feedback"
                ref={input => (this.input = input)}
                required
               
            />
             <button type="submit"
              name="submit"
              id="guessButton" >
                    Guess
                </button>
                <button
                    type="button"
                    id="reset"
                    name="reset"
                    onClick={this.props.onReset}
                    >Reset</button>
        </form>
    );
}}