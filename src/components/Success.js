import React, { Component } from 'react';
import Box from '@mui/material/Box';
import PrimarySearchAppBar from './AppBar';



export default class Success extends Component {

    render() {

        return (
            <Box sx={{ flexGrow: 1 }}>
                <React.Fragment>
                    <PrimarySearchAppBar />

                    <div className="grid center">
                        <h1>Thank You your Submission</h1>
                        <p>You will get your emailwith further instruction</p>
                    </div>
                </React.Fragment>
            </Box>
        )
    }
}
