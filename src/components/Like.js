import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export class Like extends Component{
    state = {
        like: 0,
        topic: 'Final Blog ',
        title: ' The Beginning of {this.chapter} ',
        paragraph: ' I am using this function to write my blog. It is like a silent blog because the code speaks for it self. If you dont understand how this is happening is okay! I will explain in depth in the next flew blogs!',
        conclusion: ' If you put this in your code you will get the blog, once you console.log your state ',
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
                        {this.state.title}<br/><br/>
                        {this.state.paragraph}<br/>
                        {this.state.conclusion}
                    </Typography>

                </div>
            )
        }
    

}

export default Like


// state = {
//     like: 0,
// }
// addCount = e => {
//     this.setState({
//         like: this.state.like + 1
//     })
// }
// render(){
//     return(
//         <div>
//             <Button variant="contained" onClick={this.addCount}>
//                 Like
//             </Button>
//             <Typography>
//                 {this.state.like}
//             </Typography>

//         </div>
//     )
// }