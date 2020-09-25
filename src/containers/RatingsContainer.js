import React from 'react'
import Rating from '../components/Rating'
import {connect} from 'react-redux'
import {fetchRatings} from '../actions/RatingsAction'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


class RatingsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchRatings()
    }

    renderRating(){
        return(
            this.props.ratings.map(rating => {
            return (
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
                />) 
            })
        
        )
    }

    render(){
        return(
            <div>
            <br/><br/>
            <Typography variant="h2"
            align='center'>
                TribalThoughts!
            </Typography><br/>
            <Grid
            container
            spacing={0}
            // direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
            {this.renderRating()}
            </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{ ratings: state.ratings}
}

export default connect(mapStateToProps, {fetchRatings})(RatingsContainer)