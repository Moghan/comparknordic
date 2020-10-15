import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { navigate } from '@reach/router'
import { RouteComponentProps } from "@reach/router"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
      marginTop: 24
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function ContactCard(props: RouteComponentProps) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            AK
          </Avatar>
        }
        title="Anders Kensby"
        subheader="Frontend Engineer"
      />
      <CardMedia
        className={classes.media}
        image="https://media-exp1.licdn.com/dms/image/C5603AQFclhtP_AiYKw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=vNySLSh5EQbyPDFYNj11s3sdU9YquVTAiHwl2AUD5IY"
        title="me"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Looking for adventures.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => navigate("https://www.linkedin.com/in/anderskensby/?locale=en_US")}>
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => navigate("https://github.com/Moghan")}>
            <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
