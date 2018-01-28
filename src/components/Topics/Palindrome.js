import React,{Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();

        this.state={
            userInput:'',
            palindrome:'',
        }
    }

    updateUserInput(val){
        this.setState({
            userInput:val,
        });
    }

    getPalindrone(val){
        let reverse = val.split("").reverse().join("");
        
        let palindrome = (val === reverse ? "true" : "false");

        this.setState({
            palindrome: palindrome,
        })

    }


    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.updateUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.getPalindrone(this.state.userInput)}>Try</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;
