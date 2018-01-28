import React,{Component} from 'react';

class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            unfilteredArray:['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            filteredArray:[],
            userInput:'',
        }
    }

    setUserInput(val){
        this.setState({
            userInput:val,
        })
    }

    filterArray(val){
        let filterArray = [];
        let unfilteredArray = this.state.unfilteredArray;

        for(let i = 0;i<unfilteredArray.length;i++){
            if(!unfilteredArray[i].search(val)){
                filterArray.push(unfilteredArray[i]);
            }
        }

        this.setState({
            filteredArray:filterArray,
        })
    }



    render(){
        return(
            <div className="puzzleBox filterPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={e => this.setUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;
