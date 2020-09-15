import React from 'react';
import SearchContainer from './SearchContainer';

class RatingForm extends React.Component{
    state = {
        company_id: ""
    }

    compIdEvent = (e) => {
        this.setState({
            company_id: e.target.value
        }, () => console.log(this.state))
    }

    render(){
        return(
            <form name="compR">
                <SearchContainer compIdEvent={this.compIdEvent}/>
                <label>Interview Process:</label>
                <select name="rInt" id="rInt" form="compR">
                    <option value=" "> </option>
                    <option value="easy">easy</option>
                    <option value="moderate">moderate</option>
                    <option value="extensive">extensive</option>
                </select><br/>
                <textarea rows="3" cols="50" name="rCultCom" id="rCultCom" form="compR" placeholder="Enter details here..."/><br/>
                <label>Technical Interview Process:</label>
                <select name="rTech" id="rTech" form="compR">
                    <option value=" "> </option>
                    <option value="easy">easy</option>
                    <option value="moderate">moderate</option>
                    <option value="extensive">extensive</option>
                </select><br/>
                <textarea rows="3" cols="50" name="rCultCom" id="rCultCom" form="compR" placeholder="Enter details here..."/><br/>
                <label>Technical Language(s):</label>
                <input type="text" name="rLang" id="rLang"/><br/>
                <label>Compensation (this information will not be displayed or connected with your name):</label>
                <input type="number" min="50000.00" step="5.00" name="rCompen" id="rCompen"/><br/>
                <label>Benefits:</label>
                <select name="rBenef" id="rBenef" form="compR">
                    <option value=" "> </option>
                    <option value="poor">poor</option>
                    <option value="moderate">moderate</option>
                    <option value="excellent">excellent</option>
                </select><br/>
                <label>Diversity:</label>
                <select name="rDivers" id="rDivers" form="compR">
                    <option value=" "> </option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select><br/>
                <label>Mentorship:</label>
                <select name="rMentor" id="rMentor" form="compR">
                    <option value=" "> </option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select><br/>
                <label>Work Culture</label>
                <select name="rCult" id="rCult" form="compR">
                    <option value=" "> </option>
                    <option value="innovative">innovative</option>
                    <option value="challenging">challenging</option>
                    <option value="progressive">progressive</option>
                    <option value="flexible">flexible</option>
                    <option value="micromanaged">micromanaged</option>
                    <option value="difficult">difficult</option>
                    <option value="inflexible">inflexible</option>
                    <option value="hypercompetitive">hypercompetitive</option>
                </select><br/>
                <textarea rows="3" cols="50" name="rCultCom" id="rCultCom" form="compR" placeholder="Enter details here..."/><br/>
                <label>First Name:</label>
                <input type="text" name="rFName" id="rFName"/><br/>
                <label>Last Name:</label>
                <input type="text" name="rLName" id="rLName"/><br/>
                <label>City:</label>
                <input type="text" name="rCity" id="rCity"/><br/>
                <label>State:</label>
                <input type="text" name="state" id="state"/><br/>
                <label>Overall Score:</label><br/>
                <sub>poor </sub><input type="range" id="rOv" name="rOv" min="0" max="10" step="1"/><sub>  excellent</sub><br/>
                <input type="submit" value="Add Review"></input>
            </form>
        )
    }

}

export default RatingForm;