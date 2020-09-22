import React from 'react'
import Interview from './InterviewForm'
import Work from './WorkLifeform'
import User from './UserForm'
import Confirm from './Confirm'
import Success from './Success'


export class RatingForm extends React.Component {
    state = {
        step: 1,
        rTitle: '',
        rInt: '',
        rIntCom: '',
        rTech: '',
        rTechCom: '',
        rLang: '',
        rCompen: '',
        rBenef: '',
        rDivers: '',
        rMentor: '',
        rCult: '',
        rCultCom: '',
        rOv: '',
        rFName: '',
        rLName: '',
        rBootcamp: '',
        rCity: '',
        rState: '',
        rCompId: '',
        
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //Go back a step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    interview = () => {
        let { step } = this.state;
        this.setState({
            step: step=1
        })
    }
    work = () => {
        let { step } = this.state;
        this.setState({
            step: step=2
        })
    }
    user = () => {
        let { step } = this.state;
        this.setState({
            step: step=3
        })
    }
    review = () => {
        let { step } = this.state;
        this.setState({
            step: step=4
        })
    }
    reviewInterview = () => {
        const { step } = this.state;
        this.setState({
            step: step + 3
        })
    }
    reviewWork = () => {
        const { step } = this.state;
        this.setState({
            step: step + 2
        })
    }
    
    


    //handle fields change
    handlechange = input => (e) => {
        // debugger
        this.setState({[input]: e.target.value})
    }

    render() {
        const {step} = this.state
        const {rTechCom, rInt, rIntCom, rTech, rTitle, rLang, rCompen, rBenef, rDivers, rMentor, rCult, rCultCom, rOv, rFName, rLName, rBootcamp, rCity, rState, rCompId} = this.state
        const values = {rTechCom, rInt, rIntCom, rTech, rTitle, rLang, rCompen, rBenef, rDivers, rMentor, rCult, rCultCom, rOv, rFName, rLName, rBootcamp, rCity, rState, rCompId}
        
        switch(step){
            case 1:
                return (
                    <Interview
                        nextStep={this.nextStep}
                        interview={this.interview}
                        work={this.work}
                        user={this.user}
                        review={this.review}
                        reviewInterview={this.reviewInterview}
                        handlechange={this.handlechange}
                        values={values}/>
                )
            case 2:
                return(
                    <Work
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        interview={this.interview}
                        work={this.work}
                        user={this.user}
                        review={this.review}
                        reviewWork={this.reviewWork}
                        handlechange={this.handlechange}
                        values={values}/>
                )
            case 3:
                return(
                    <User
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        interview={this.interview}
                        work={this.work}
                        user={this.user}
                        review={this.review}
                        handlechange={this.handlechange}
                        values={values}/>
                )
            case 4:
                return(
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        interview={this.interview}
                        work={this.work}
                        user={this.user}
                        values={values}/>
                )
            case 5:
                return(
                    <Success
                        handlechange={this.handlechange}
                        values={values}/>
                )
            default:
        }
    }
}

export default RatingForm
