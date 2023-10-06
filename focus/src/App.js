import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
        <div style={{ padding: 20, height: '100vh' }}>
        <Grid container spacing={2} style={{ height: '100%' }}>

        {/* Left Column */}
        <Grid item xs={3}>
            <Grid container direction="column" spacing={2} style={{ height: '100%' }}>
            
            {/* Left Column - First Box */}
            <Grid item xs>
                <Paper style={{ height: '100%', backgroundColor: '#eee' }}>
                Box 1
                </Paper>
            </Grid>
            
            {/* Left Column - Second Box */}
            <Grid item xs>
                <Paper style={{ height: '100%', backgroundColor: '#eee' }}>
                Box 2
                </Paper>
            </Grid>
            </Grid>
        </Grid>

        {/* Middle Column */}
        <Grid item xs={6}>
            <Paper style={{ height: '100%', backgroundColor: '#eee' }}>
            Large Box
            </Paper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={3}>
            <Grid container direction="column" spacing={2} style={{ height: '100%' }}>
            
            {/* Right Column - First Box */}
            <Grid item xs>
                <Paper style={{ height: '100%', backgroundColor: '#eee' }}>
                Box 3
                </Paper>
            </Grid>
            
            {/* Right Column - Second Box */}
            <Grid item xs>
                <Paper style={{ height: '100%', backgroundColor: '#eee' }}>
                Box 4
                </Paper>
            </Grid>
            </Grid>
        </Grid>
        </Grid>
    </div>
  );
}