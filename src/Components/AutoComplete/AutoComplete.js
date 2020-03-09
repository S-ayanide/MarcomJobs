import React from 'react'
import './AutoComplete.css';

class AutoComplete extends React.Component{

    constructor(props){
        super(props)
        this.items = [
            'Wolframe',
            'Amazon',
            'Amadam',
            'Adrian',
            'ShopClues',
            'RawNix'
        ];
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChanged = (event) => {
        const value = event.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({
            suggestions,
            text: value
        }));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions() {
        const {suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map(item => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }
    
    render() {
        const {text} = this.state;
        return (
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type='text' placeholder="Search Jobs"/>
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default AutoComplete