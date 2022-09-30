import React, { Component } from 'react';
import Box from '@mui/material/Box';
import PrimarySearchAppBar from './AppBar';
import { Button, TextField } from '@mui/material';


export default class FormPersonalDetails extends Component {
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
                            id="Description"
                            label="Description"
                            variant="filled"
                            onChange={handleChange('Description')}
                            defaultValue={value.Description}
                        />
                        <br />
                        <TextField
                            id="Bio"
                            label="Bio"
                            variant="filled"
                            onChange={handleChange('Bio')}
                            defaultValue={value.Bio}
                        />
                        <br />
                        <TextField
                            id="city"
                            label="City"
                            variant="filled"
                            onChange={handleChange('city')}
                            defaultValue={value.city}
                        />
                        <br />
                        <>
                        <Button
                            label="Continue"
                            variant="contained"
                            onClick={this.continue}
                            title="Submit"
                        >Continue</Button>&nbsp;&nbsp;
                        <Button
                            label="Back"
                            variant="contained"
                            onClick={this.back}
                            title="Back"
                        >Back</Button>
                        </>

                    </div>
                </React.Fragment>
            </Box>
        )
    }
}
