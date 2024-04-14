import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import MovieGrid from '../components/MovieGrid';
import { useNavigate } from 'react-router-dom';

const Home = () => {

const [search, setSearch] = useState('');
const navigate  = useNavigate();
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <Typography variant='h3'>Welcome to MovieBuzz</Typography>
                <Typography variant='h5'>Search for your favorite movies</Typography>
                <TextField label='Search Movies' variant='outlined' sx={{ width: '100%', maxWidth: '800px' }} onChange={(e)=>{setSearch(e.target.value)}} />
                <Button variant='contained' sx={{ width: '100%', maxWidth: '800px' }} onClick={()=>{ navigate(`/Movies/${search}`) }}>Search</Button>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                <Typography variant='h4'>Trending Movies</Typography>
                <hr style={{ width: '100%', maxWidth: '800px', border: '1px solid white' }} />
                <MovieGrid search={'home'}/>
            </Box>
        </>
    )
}

export default Home