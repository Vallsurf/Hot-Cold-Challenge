import React, { Component } from 'react';
import SearchForm from './inputSearch'; 
import Hint from './hint.jsx';
import GuessList from './guessList'; 

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        guess: 0,
        History: [], 
        correct: Math.floor(Math.random() * 100)
    })
    }
    
    inputtedGuess(guess){
        this.setState({guess})
        this.setState({ History: [...this.state.History, guess] }) 
    }

    onReset(){
        this.setState({
            guess: 0,
            History: [], 
            correct: Math.floor(Math.random() * 100)
        })
    }

    render() { 
        return ( 
        <div>
        <SearchForm onClick={value => this.inputtedGuess(value)} onReset={()=>this.onReset()}/> 
        <Hint value = {this.state.guess} correct = {this.state.correct} />
        <GuessList history = {this.state.History} />
        </div>
    );
    }
}
 
export default Game;