import React, { Component } from 'react';
import Box from '@mui/material/Box';
import PrimarySearchAppBar from './AppBar';
import { Button, TextField } from '@mui/material';


export default class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.NextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.PrevNext();
    } 

    render() {
        const { value, handleChange } = this.props;


        return (
            <Box sx={{ flexGrow: 1 }}>
                <React.Fragment>
                    <PrimarySearchAppBar />

                    <div className="grid">
                        <TextField
                            id="First Name"
                            label="FirstName"
                            variant="filled"
                            onChange={handleChange('FirstName')}
                            defaultValue={value.FirstName}
                        />
                        <br />
                        <TextField
                            id="Last Name"
                            label="LastName"
                            variant="filled"
                            onChange={handleChange('LastName')}
                            defaultValue={value.LastName}
                        />
                        <br />
                        <TextField
                            id="Email ID"
                            label="Email"
                            variant="filled"
                            onChange={handleChange('Email')}
                            defaultValue={value.Email}
                        />
                        <br />
                        <Button
                            label="Continue"
                            variant="contained"
                            onClick={this.continue}
                            title="Submit"
                        >Continue</Button>

                    </div>
                </React.Fragment>
            </Box>
        )
    }
}
