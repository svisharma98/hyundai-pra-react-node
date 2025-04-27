import { Box, Card, Divider, FormControl, FormHelperText, Grid, MenuItem, Paper, Select, Typography } from '@mui/material';
import React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Dashboard1 = () => {

    return (
        <>
            <>Dashboard</>
            <Card>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid key={index} size={{ xs: 2, sm: 2, md: 2 }}>
                                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                    <Select
                                        fullWidth
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value={10}>Make</MenuItem>
                                        <MenuItem value={20}>Modal</MenuItem>
                                        <MenuItem value={30}>Varients</MenuItem>
                                        <MenuItem value={30}>Years</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        ))}
                    </Grid>
                </Box>


            </Card><br />


            <Card>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                    <Box>
                        <Typography variant="h6">Total Amount Claimed</Typography>
                        {/* <Typography variant="h4">120</Typography>  */}
                        <Box>
                            <span style={{ fontWeight: 800, fontSize: '25px' }}>120</span>

                            <span style={{ marginLeft: 50 }}>2% <ArrowDropUpIcon sx={{ color: 'green' }} /> </span>
                            <span style={{ marginLeft: 10 }}>0.2% <ArrowDropDownIcon /></span>

                        </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Box>
                        <Typography variant="h6">Varients</Typography>
                        <Typography variant="body">$12,345</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Box>
                        <Typography variant="h6">Dealers</Typography>
                        <Typography variant="body">$12,345</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Box>
                        <Typography variant="h6">Unit in Operation</Typography>
                        <Typography variant="body">$12,345</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Box>
                        <Typography variant="h6">Warranty Claims</Typography>
                        <Typography variant="body">$12,345</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Box>
                        <Typography variant="h6">Service Complaints</Typography>
                        <Typography variant="body">$12,345</Typography>
                    </Box>
                </Box>
            </Card><br />

            <Card>
                Card 3
            </Card><br />
            <Card>
                Card 4
            </Card>
        </>
    );
}

export default Dashboard1;
