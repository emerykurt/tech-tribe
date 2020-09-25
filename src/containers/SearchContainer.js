import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {search} from '../actions/CompaniesAction'

class SearchContainer extends React.Component{

    render () {
        const {search, value} = this.props
        return(
            <input type="search" 
            placeholder="Company.." 
            id="rCompId" name="rCompId" 
            value={value}
            onChange={(e) => search(e.target.value)} />
        )
    }
}

function mapStateToProps({companies}) {
    return {companies: companies}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({search}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)