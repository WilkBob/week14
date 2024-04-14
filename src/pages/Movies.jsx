import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import MovieGrid from '../components/MovieGrid';
import {useParams} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Movies = () => {
    const navigate = useNavigate();
    const {search} = useParams();
    const [newsearch, setnewSearch] = useState('');
  return (<>
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <Typography variant='h5'>Showing Results for '{search}'</Typography>
                <TextField label='Search Movies' variant='outlined' sx={{ width: '100%', maxWidth: '400px' }} onChange={(e)=>{setnewSearch(e.target.value)}} />
                <Button variant='contained' sx={{ width: '100%', maxWidth: '400px' }} onClick={()=>{navigate(`/Movies/${newsearch}`) }}>Search</Button>
            </Box>
    <MovieGrid search={search}/>
 </> )
}

export default Movies
