import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Fab,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Link } from 'wouter'
import { isUndefined } from 'lodash'
import HomeIcon from '@material-ui/icons/Home'
import React from 'react'
import useSWR from 'swr'

const API = process.env.NODE_ENV === 'development' ? '/comments' : '/db.json'
const baseRoute =
  process.env.NODE_ENV === 'development' ? '/' : '/react-swr-todo/'

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    display: 'grid',
  },
  card: {
    minWidth: 400,
    maxWidth: 600,
  },
  text: {
    fontFamily: 'bungee',
  },
  large: {
    width: '60px',
    height: '60px',
  },
  link: {
    textDecoration: 'none',
  },
  loader: {
      display: 'inline'
  }
})

export function User({ id }) {
  const { data } = useSWR(API)
  const classes = useStyles()
  const res = data?.filter((d) => `${d.id}` === id).pop()

  return (
    <div className={classes.root}>
      <br />
      <Fab color="primary" aria-label="Add">
        <Link to={baseRoute}>
          {' '}
          <HomeIcon style={{ color: 'white' }} />
        </Link>
      </Fab>
      <br />
      <br />
      <Card className={classes.card}>
        {isUndefined(res) ? (
          <CardContent>
            <CircularProgress className={classes.loader} size={100} />
          </CardContent>
        ) : (
          <>
            <CardContent>
              <Avatar
                className={classes.large}
                src={`https://i.pravatar.cc/150?img=${id}`}
              ></Avatar>
            </CardContent>

            <CardContent>
              <Typography
                className={classes.text}
                color="textPrimary"
                gutterBottom
              >
                {`${res.id}: ${res.comment}`}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                className={classes.text}
                color="textSecondary"
                gutterBottom
              >
                {res.body}
              </Typography>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}

export default User
