import React from 'react';


class SearchContainer extends React.Component{

    state = {
        companies: [],
        search: ""
    }

    componentDidMount(){
        fetch("http://localhost:3000/companies")
        .then(res => res.json())
        .then( (json) => {
            this.setState({
                companies: json.data 
            })
        })
    }

    renderSearchResults(){
        let compDisplay = this.state.companies
        if(this.state.search){
            compDisplay = this.state.companies.filter((company) => 
            company.attributes.name.toLowerCase().includes(this.state.search.toLowerCase())
        )}
        
        return(compDisplay.map((company) => {
             return(
             <option value={company.attributes.id}>{company.attributes.name}</option>
                //  <Search name = {company.attributes.name} id = {company.attributes.id}/>
            )
        }))
    }

    handleInputChange = (e) => {
        this.setState({
            search: e.target.value
        }) 
    }

    render (){
        return(
            <div>
                <input type="search" placeholder="Company.." id="rCompId" name="rCompId" onChange={this.handleInputChange}/><br/>
                <select onChange={this.props.compIdEvent}>
                    <option value=" ">select company</option>
                    {this.renderSearchResults()}
                    </select>
            </div>
        )
    }


}
export default SearchContainer