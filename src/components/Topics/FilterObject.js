import React,{Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredArray:[],
        }
    }

    setUserInput(val){
        this.setState({
            userInput:val,
        })
    }

    doProblem(val){
        let filteredArray = [];
        let unfilteredArray = this.state.employees;

        for(let i = 0;i<unfilteredArray.length;i++){
            console.log(unfilteredArray[i])
            if(unfilteredArray[i].hasOwnProperty(val)){
                filteredArray.push(unfilteredArray[i]);
            }
        }

        this.setState({
            filteredArray: filteredArray,
        })
    }



    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.employees)}</span>
                <input className="inputLine" onChange={e => this.setUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.doProblem(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;
