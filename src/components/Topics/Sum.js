import React,{Component} from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            num1:0,
            num2:0,
            sum:null,
        }
    }

    updateNumbers(val,num){
        if(num === 1){
            this.setState({
                num1:val,
            })
        }

        if(num === 2){
            this.setState({
                num2:val,
            })
        }
    }

    sumNums(num1,num2){
        this.setState({
            sum: parseInt(num1,10)+parseInt(num2,10),
        })
    }

    


    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.updateNumbers(e.target.value,1)}/>
                <input className="inputLine" onChange={e => this.updateNumbers(e.target.value,2)}/>
                <button className="confirmationButton" onClick={() => this.sumNums(this.state.num1,this.state.num2)}>Sum</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;
