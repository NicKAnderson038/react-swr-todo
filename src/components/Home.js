import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core'
import { Link } from 'wouter'
import DeleteIcon from '@material-ui/icons/Delete'
import { isUndefined } from 'lodash'
import axios from 'axios'
import React from 'react'
import { v4 } from 'uuid'
import useSWR from 'swr'
import { API, baseRoute, IS_LOCAL_JSON } from '../constant'
import { deleteRequestOptomisticApi } from '../service'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#555454',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover, &:focus': {
      backgroundColor: '#5b67f37d',
    },
  },
}))(TableRow)

// text-decoration: none;
const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  text: {
    fontFamily: 'bungee',
    fontWeight: 300,
  },
})

const Home = ({ commentsFromServer }) => {
  const { data } = useSWR(API, { initialData: commentsFromServer })
  const classes = useStyles()

  const my_data = IS_LOCAL_JSON ? data : data?.comments

  return (
    <Box marginTop={2}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell className={classes.text}>Id</StyledTableCell>
              <StyledTableCell className={classes.text}>
                Comment
              </StyledTableCell>
              <StyledTableCell className={classes.text} align="right">
                Actions
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {my_data?.map((row) => (
              <StyledTableRow key={v4()}>
                <Link
                  className={classes.link}
                  to={
                    isUndefined(row.id)
                      ? baseRoute
                      : `${baseRoute}user/${row.id}`
                  }
                >
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className={classes.text}
                  >
                    {isUndefined(row.id) && <CircularProgress size={15} />}
                    {row.id}
                  </StyledTableCell>
                </Link>
                <Link
                  className={classes.link}
                  to={
                    isUndefined(row.id)
                      ? baseRoute
                      : `${baseRoute}user/${row.id}`
                  }
                >
                  <StyledTableCell className={classes.text}>
                    {row.comment}
                  </StyledTableCell>
                </Link>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.text}
                    startIcon={<DeleteIcon />}
                    onClick={async () => {
                      if (IS_LOCAL_JSON) {
                        await deleteRequestOptomisticApi({
                          values: row.id,
                          storeValue: my_data,
                          urlKey: API,
                          refetch: true,
                        })
                      } else {
                        alert(`DELETE ID: ${row.id}`)
                      }
                    }}
                  >
                    {/* <Button
                    variant="contained"
                    color="secondary"
                    className={classes.text}
                    startIcon={<DeleteIcon />}
                    onClick={async () => {
                      const deleteUrl = '/comments/' + row.id
                      const url = '/comments'
                      mutate(
                        url,
                        data.filter((c) => c.id !== row.id),
                        false
                      )
                      await axios.delete(deleteUrl)
                      trigger(url)
                    }}
                  > */}
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await axios('/comments')
  const json = res.data
  return { commentsFromServer: json }
}

export default Home
