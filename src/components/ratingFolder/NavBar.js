import React, { Component } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


export class NavBar extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    confirm = e => {
        e.preventDefault()
        this.props.reviewInterview()
    }
    interview = e => {
        e.preventDefault()
        this.props.interview()
    }
    work = e => {
        e.preventDefault()
        this.props.work()
    }
    user = e => {
        e.preventDefault()
        this.props.user()
    }
    review = e => {
        e.preventDefault()
        this.props.review()
    }
    
    render() {
        return(
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={this.interview}>
                    Interview Process
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={this.work}>
                    Work Life
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={this.user}>
                    About You
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={this.review}>
                    Review
                </Link>
            </Breadcrumbs>
            
        )
    }
}

export default NavBar

