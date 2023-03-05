import React from 'react';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

function PartyItem(props) {

    return (
        <Box>
            <h2>{props.party.name}</h2>
            <img width="500" src={props.party.imageURL}/>
            <Grid container spacing={2}>
                <Grid item xs = {3}/>
                <Grid item xs = {3}>
                    <p>Price: ${props.party.price}</p>
                </Grid>
                <Grid item xs = {3}>
                    <p>Start Time: {props.party.date.toLocaleString()}</p>
                </Grid>
                <Grid item xs = {3}/>
            </Grid>
        </Box>
    )
}

export default PartyItem;