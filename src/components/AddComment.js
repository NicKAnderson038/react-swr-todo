import {
  Box,
  Button,
  FormGroup,
  TextField,
  makeStyles,
} from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { loremIpsum } from 'lorem-ipsum'
import React from 'react'
import useSWR from 'swr'
import { API, IS_LOCAL_JSON } from '../constant'
import useRequest from '../service'

const useStyles = makeStyles({
  text: {
    fontFamily: 'bungee',
  },
})

const lorem = () =>
  loremIpsum({
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
  const { data } = useSWR(API)
  const classes = useStyles()

  const my_data = IS_LOCAL_JSON ? data : data?.comments

  return (
    <Box marginTop={2}>
      <div>
        <span className={classes.text}>Number Of Comments: {my_data?.length}</span>
        <Formik
          initialValues={{ comment: '' }}
          onSubmit={async (values, formikHelpers) => {
            values.body = lorem()
            if (IS_LOCAL_JSON) {
              const { success } = await useRequest.optomisticApi.post({
                values,
                storeValue: my_data,
                urlKey: API,
                refetch: true,
              })

              if(success) formikHelpers.resetForm()
            } else {
              alert(`POST: ${values.comment}`)
              formikHelpers.resetForm()
            }
          }}
        >
          {/* <Formik
          initialValues={{ comment: '' }}
          onSubmit={async (values, formikHelpers) => {
            values.body = lorem()
            mutate(API, [...data, values], false)
            await axios.post(API, values)
            trigger(API)
            formikHelpers.resetForm()
          }}
        > */}
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
