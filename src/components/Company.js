import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'
import ButtonBase from '@material-ui/core/ButtonBase'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 275,
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.05,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
          },
        },
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.2,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      },
  }))

function Company(props) {
    const classes = useStyles()

    return(
        <Grid 
        height="150"
        width="150"
        item xs={3}>
        <Card className={classes.root} style={{ background: "linear-gradient(to bottom, #A9A9A9 0%, #b3b39a 100%)"}}>
            <Link to={{ 
                pathname:"/form", rCompId: props.id, rCompName: props.name
            }}>
                <ButtonBase
                focusRipple
                key={props.id}
                image={props.logo}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: 'auto',
                    height: 'auto'
                }}
                >
                <CardMedia
                component="img"
                alt={props.name}
                flex-wrap= "wrap"
                height="auto"
                width="100%"
                image={props.logo}
                title={props.name}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                    >
                    {props.name}
                    <span className={classes.imageMarked} />
                    </Typography>
                </span></ButtonBase>
            </Link>
            <Button href={props.website} size="small" color="primary">
            Apply Here <CheckOutlinedIcon/>
            </Button>
            <a href={props.twitter}><IconButton aria-label="share">
            <TwitterIcon/>
            </IconButton></a>
        </Card>
        </Grid>
    )
}

export default connect(null)(Company)