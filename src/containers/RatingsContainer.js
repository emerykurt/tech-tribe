import React from 'react'
import {connect} from 'react-redux'
import Rating from '../components/Rating'
import RatingForm from '../components/RatingForm'

class RatingsContainer extends React.Component {
    state = {ratings: []}

    componentDidMount(){
        fetch("http://localhost:3000/ratings")
        .then(res => res.json())
        .then( (json) => {
            this.setState({
                ratings: json.data 
            })
        })
    }

    renderRating(){
        console.log(this.state)
        return(this.state.ratings.map(rating => {
            return(
                <Rating
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
                <h1>All the Ratings!</h1>
                {this.renderRating()}
            </div>)

    }
}
const mapStateToProps = state => {
    console.log(state)
}

export default connect(mapStateToProps)(RatingsContainer)