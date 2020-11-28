import {
  Box,
  Button,
  FormGroup,
  TextField,
  makeStyles,
} from '@material-ui/core'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { loremIpsum } from 'lorem-ipsum'
import React from 'react'
import useSWR, { mutate, trigger } from 'swr'

const useStyles = makeStyles({
  text: {
    fontFamily: 'bungee',
  },
})

const lorem = () => loremIpsum({
                count: 1, // Number of "words", "sentences", or "paragraphs"
                format: 'plain', // "plain" or "html"
                paragraphLowerBound: 3, // Min. number of sentences per paragraph.
                paragraphUpperBound: 7, // Max. number of sentences per paragarph.
                random: Math.random, // A PRNG function
                sentenceLowerBound: 5, // Min. number of words per sentence.
                sentenceUpperBound: 10, // Max. number of words per sentence.
                suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
                units: 'sentences', // paragraph(s), "sentence(s)", or "word(s)"
              })

export function AddComment() {
  const { data } = useSWR('/comments')
  const classes = useStyles()

  return (
    <Box marginTop={2}>
      <div>
        <span className={classes.text}>Number Of Comments: {data?.length}</span>

        <Formik
          initialValues={{ comment: '' }}
          onSubmit={async (values, formikHelpers) => {
            values.body = lorem()
            mutate('/comments', [...data, values], false)
            await axios.post('/comments', values)
            trigger('/comments')
            formikHelpers.resetForm()
          }}
        >
          <Form>
            <FormGroup>
              <Field
                autoComplete="off"
                as={TextField}
                name="comment"
                label="Comment"
              />
            </FormGroup>

            <Box marginTop={1}>
              <Button
                className={classes.text}
                type="submit"
                variant="contained"
                color="primary"
              >
                Add Comment
              </Button>
            </Box>
          </Form>
        </Formik>
      </div>
    </Box>
  )
}

export default AddComment
