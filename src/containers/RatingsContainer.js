import React from 'react'
import Rating from '../components/Rating'
import {connect} from 'react-redux'
import {fetchRatings} from '../actions/RatingsAction'


class RatingsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchRatings()
    }

    renderRating(){
        return(this.props.ratings.map(rating => {
            // debugger
            return(
                <Rating key={rating.id}
                rTitle = {rating.attributes.rTitle}
                rInt = {rating.attributes.rInt} 
                rIntCom = {rating.attributes.rIntCom} 
                rTech = {rating.attributes.rTech}
                rTechCom = {rating.attributes.rTechCom}
                rLang = {rating.attributes.rLang}
                rCompen = {rating.attributes.rCompen}
                rBenef = {rating.attributes.rBenef}
                rDivers = {rating.attributes.rDivers}
                rMentor = {rating.attributes.rMentor}
                rCult = {rating.attributes.rCult}
                rCultCom = {rating.attributes.rCutlCom}
                rOv = {rating.attributes.rOv}
                rFName = {rating.attributes.rFName}
                rLName = {rating.attributes.rLName}
                rLinked = {rating.attributes.rLinked}
                rBootCamp = {rating.attributes.rBootcamp}
                rCity = {rating.attributes.rCity}
                rState = {rating.attributes.rState}
                rCompId = {rating.attributes.company_id}
                rComp = {rating.attributes.company.data.attributes.name}
                rLogo = {rating.attributes.company.data.attributes.logo}
                /> )
        }))
    }

    render(){
        return(
            <div>
                {/* <RatingForm /> */}
                <br/><br/><br/><br/><br/>
                <h1>All the Ratings!</h1>
                {this.renderRating()}
            </div>)

    }
}
const mapStateToProps = state => {
    return{ ratings: state.ratings}
}

export default connect(mapStateToProps, {fetchRatings})(RatingsContainer)