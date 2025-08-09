import {useState} from 'react'
import { Snackbar } from '@mui/material'

const SnackBar = ({ open, onclose, message }) => {


    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            message={message === 'Firebase: Error (auth/invalid-credential).' ? 'Invalid email or password' : message}
            autoHideDuration={3000}
            onClose={onclose}

        />
    )
}

export default SnackBar