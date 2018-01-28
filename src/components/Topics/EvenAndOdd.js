import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput: val,
        })
    }

    getArrays(val) {
        let arr = val.split(",");
        let evens = [];
        let odds = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10));
            }
            else {
                odds.push(parseInt(arr[i], 10));
            }
        }

        this.setState({ evenArray: evens, oddArray: odds,});

        console.log(this.state.evenArray);
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.updateUserInput(e.target.value)} />
                {/* <button className ="confirmationButton" onClick ={this.getArrays(this.state.userInput)}>Split</button> */}
                <button className="confirmationButton" onClick={() => this.getArrays(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}

export default EvenAndOdd;
