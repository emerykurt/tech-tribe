import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export class Filter extends Component {
    
  state = ({
    checkedD: false,
    checkedM: false,
  });

  handleClick = (event) => {
    //   debugger
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  render(){
    //   debugger
    const {values, handleChange, handleclick} = this.props
  return (
    <Container  maxWidth="sm">
    <FormGroup row >
        <TextField 
                style={{ background: "rgb(141,155,106, 0.50)", marginRight: "auto"}}
                align='center'
                label='Company name...'
                variant='filled'
                margin='normal'
                id="search-companies"
                onChange={handleChange('search')}
                value={values.search}
            />
        <FormControlLabel
            control={<GreenCheckbox 
            checked={this.state.checkedD} 
            onChange={(e) => {this.handleClick(e); handleclick(e)}}
            value={values.divers} 
            name="checkedD" />}
            label="Diversity"
        />
      
        <FormControlLabel
            control={<GreenCheckbox 
            checked={this.state.checkedM} 
            onChange={(e) => {this.handleClick(e); handleclick(e)}} 
            value={values.mentor}
            name="checkedM" />}
            label="Mentorship"
        />

    </FormGroup>
    </Container>
  )}
}
export default Filter