import React from 'react';

class CompanyForm extends React.Component{
    state = {
        name: "",
        website: "",
        twitter: "",
        logo: ""
    }

    handleImage = (e) => {
        this.setState({
            logo: e.target.file[0]
        })
    }

    render(){
        return(
            <form>
                <label>Company Name:</label>
                    {/* search for company in database if company exist go back to formif not cont.  */}
                <label>Company Website:</label>
                <input type="text" name="website" id="website"/><br/>
                <label>Company Twitter:</label>
                <input type="text" name="twitter" id="twitter"/><br/>
                <label>Company Logo:</label>
                <input type="file" name="logo" id="logo" accept="image/*" onChange={this.handleImage}></input>
                <input type="submit" value="Add Company"/>
            </form>
        )
    }
}

export default CompanyForm