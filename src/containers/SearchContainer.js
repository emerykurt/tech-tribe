import React from 'react';
import CompaniesContainer from './CompaniesContainer';

class SearchContainer extends React.Component{

    renderSearchResults(e){
        debugger
        let search = e.target.value
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

    render (){
        return(
            <div>
                <input type="search" placeholder="Company.." id="rCompId" name="rCompId" onChange={this.renderSearchResults} /><br/>
            </div>
        )
    }


}

export default SearchContainer