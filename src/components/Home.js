import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { isUndefined } from 'lodash'
import axios from 'axios';
import React from 'react';
import useSWR, { mutate, trigger } from 'swr';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#555454',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Home = ({commentsFromServer }) => {
  const {data} = useSWR('/comments', { initialData: commentsFromServer});
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Comment</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {data?.map(row => (
              <StyledTableRow key={row.comment}>
                <StyledTableCell component="th" scope="row">
                    {isUndefined(row.id) && <CircularProgress size={15}/>}
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.comment}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={async () => {
                      const deleteUrl = '/comments/'+row.id;
                      const url = '/comments';
                      mutate(url, data.filter(c => c.id !== row.id), false);
                      await axios.delete(deleteUrl);
                      trigger(url);
                    }}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


Home.getInitialProps = async ctx => {
  const res = await axios('/comments')
  const json = res.data
  return { commentsFromServer: json }
}

export default Home