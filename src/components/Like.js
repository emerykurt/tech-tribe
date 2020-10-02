import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export class Like extends Component{
    state = {
        like: 0,
              }

    addCount = e => {
    this.setState({
        like: this.state.like + 1
    })
    }
            
    render(){
        // debugger
        console.log(this.state)
        return(
            <div>
                <Button variant="contained" onClick={this.addCount}>
                    Like
                </Button>
                <Typography>
                    {this.state.like}
                </Typography>
            </div>
        )
    }
}

export default Like


