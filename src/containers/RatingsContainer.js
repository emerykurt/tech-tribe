import React from 'react'
import Rating from '../components/Rating'
import {connect} from 'react-redux'
import {fetchRatings} from '../actions/fetchRatings'


class RatingsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchRatings()
    }

    renderRating(){
        console.log(this.props)
        return(this.props.ratings.map(rating => {
            // debugger
            return(
                <Rating key={rating.id}
                rInt = {rating.attributes.interview} 
                rIntCom = {rating.attributes.interview_comment} 
                rTech = {rating.attributes.tech}
                rTechCom = {rating.attributes.tech_interview}
                rLang = {rating.attributes.language}
                rCompen = {rating.attributes.compensation}
                rBenef = {rating.attributes.benefits}
                rDivers = {rating.attributes.diversity}
                rMentor = {rating.attributes.mentorship}
                rCult = {rating.attributes.culture}
                rCultCom = {rating.attributes.culture_comment}
                rOv = {rating.attributes.overall}
                rFName = {rating.attributes.first_name}
                rLName = {rating.attributes.last_name}
                rBootCamp = {rating.attributes.bootcamp}
                rCity = {rating.attributes.city}
                rState = {rating.attributes.state}
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