import React, { Component } from 'react';
import Box from '@mui/material/Box';
import PrimarySearchAppBar from './AppBar';
import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';



export default class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();

        this.props.NextStep();
    }
    back = (e) => {
        e.preventDefault();

        this.props.PrevNext();
    }

    render() {
        const { value: { FirstName, LastName, Email, Description, Bio, city } } = this.props

        return (
            <Box sx={{ flexGrow: 1 }}>
                <React.Fragment>
                    <PrimarySearchAppBar />

                    <div className="grid">
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Your FirstName"
                                    secondary={FirstName}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Your LastName"
                                    secondary={LastName}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Your Email"
                                    secondary={Email}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Your Description"
                                    secondary={Description}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Your Bio"
                                    secondary={Bio}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary={city}
                                />
                            </ListItem>
                        </List>
                        <br />
                        <>
                            <Button
                                label="Confirm & Continue"
                                variant="contained"
                                onClick={this.continue}
                                title="Submit"
                            >Confirm</Button>&nbsp;&nbsp;
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
