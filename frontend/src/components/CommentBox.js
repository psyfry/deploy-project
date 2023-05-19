import React from 'react'
//import { useDispatch } from 'react-redux'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
//import { initializeArticles } from '../reducers/articleReducer'
import Card from '@mui/material/Card';
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
const CommentBox = ({ id, comments }) => {

    /*const dispatch = useDispatch()
         useEffect(() => {
            dispatch(initializeArticles())
        }, [ dispatch ]) */
    return (
        <Card sx={{ maxWidth: 400 }}>
            <Typography>Comments</Typography>
            <Divider />
            {!comments ? null : <CommentsList comments={comments} />}
            <AddComment id={id} />
        </Card>
    )
}

export default CommentBox