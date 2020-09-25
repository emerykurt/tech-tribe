import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

const useStyles = makeStyles({
    root: {
      maxWidth: 275,
    },
  })

function Company(props) {
    const classes = useStyles()

    return(
        <Grid item xs={3}>
        <Card className={classes.root} style={{ background: "#a5a8a6"}}>
            <CardActionArea>
                <Link to={{ 
                    pathname:"/form", rCompId: props.id, rCompName: props.name
                }}>
                    <CardMedia
                    component="img"
                    alt={props.name}
                    height="auto"
                    width="auto"
                    image={props.logo}
                    title={props.name}
                    />
                </Link>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={props.website} size="small" color="primary">
                Apply Here <CheckOutlinedIcon/>
                </Button>
                <a href={props.twitter}><IconButton aria-label="share">
                <TwitterIcon/>
                </IconButton></a>
            </CardActions>
        </Card>
        </Grid>
    )
}

export default connect(null)(Company)