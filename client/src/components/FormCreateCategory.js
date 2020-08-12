import React from 'react'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Exit from './Exit'
import { useDispatch } from 'react-redux'
import showFormAction from '../actions/showForm'
import axios from 'axios'
import Error from './Error'
import categoryAction from '../actions/category'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}))

export default function FormCreateCategory() {
    const classes = useStyles();
    const [category, setCategory] = React.useState('')
    const [error, setError] = React.useState('')
    const dispatch = useDispatch()

    function exitFormCategory() {
        dispatch(showFormAction.hiddenFormCategory)
    }

    function addCategory() {
        console.log('added category: ', category)
        axios({
            method: 'post',
            url: '/api/category',
            data: { name: category },
            headers: {
                "Content-Type": "application/json",
                "Authorization": window.localStorage.getItem("token")
            }
        })
            .then(res => {
                dispatch(categoryAction.addCategory(res.data))
            })
            .catch(error => setError(error.response.data))
        setCategory('')
    }
    return (
        <div className='form-create flex-rows'>
            <div className='form-create-category'>
                <div className='flex-rows border-bottom margin-bottom-20'>
                    <h2>Create new category</h2>
                    <Exit handleClick={exitFormCategory} />
                </div>
                <div className='flex-rows'>
                    <div>
                        <TextField className='no-outline'
                            style={{ background: '#fff' }}
                            id="outlined-basic"
                            label="Name category"
                            variant="outlined"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Icon>add</Icon>}
                            onClick={addCategory}
                        >
                            Add
                    </Button>
                    </div>
                </div>
                <div style={{ margin: '20px 0px 0px 0px' }}>
                    <Error error={error} />
                </div>
            </div>
        </div>
    )
}
