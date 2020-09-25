import React from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "#8A9EA7",
    },
  }))

function Rating(props){
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }

    return (
      <Grid item xs={4}>
        <Card style={{ background: "#eaeaea"}} className={classes.root}>
          <CardHeader
            avatar={
              <Avatar 
              src={props.rLogo}
              aria-label="recipe" className={classes.avatar}
              />
            }
            action={
                <Avatar style={{ background: "#413F3D"}} aria-label="recipe" className={classes.avatar}
                >{props.rOv}</Avatar>
              }
            title={props.rTitle}
            subheader={props.rBootCamp}
          />
          <CardContent>
            <Typography>
                {props.rComp}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Company Culture: <strong>{props.rCult}</strong>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <a href={props.rLinked}><IconButton aria-label="share">
              <LinkedInIcon/>
            </IconButton></a>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent >
              <Typography variant="h6">Work Life:</Typography><br/><br/>
              <Typography variant="body2" color="textSecondary" component="p">
                Benefits: <strong>{props.rBenef}</strong><br/>
                Diversity: <strong>{props.rDivers}</strong><br/>
                Mentorship: <strong>{props.rMentor}</strong><br/>
              </Typography><br/><br/><br/>
              <Typography variant="h6">Interview Process:</Typography><br/><br/>
              <Typography variant="body2" color="textSecondary" component="p">
                <details>
                    <summary>Interview Process: {props.rInt}</summary>
                    <p>{props.rIntCom}</p>
                </details>
                <details>
                    <summary>Technical Interview Process: {props.rTech}</summary>
                    <p>{props.rTechCom}</p>
                </details>
              </Typography>
              <Typography>
                    <blockquote>
                        - {props.rFName} {props.rLName}, {props.rBootCamp}<br/>
                        {props.rCity}, {props.rState} 
                    </blockquote>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Grid>
      )
}
export default connect(null)(Rating)