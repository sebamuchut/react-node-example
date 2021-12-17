import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableResult from './tableResults';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import loading from '../loader.gif'

const Home = () => {
    const [ info, setInfo ] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const result = await axios.get('http://localhost:3001/api');
        if (result.data) setInfo(result.data)
    };

    useEffect(() => {
      fetchData()
    }, []);

    const goBack = () => {
        navigate('/')
    }

    return(
        <div style={{ height: '80vh',  width: '100%' }}>
            {
                info.length > 1 ? <TableResult info={info} /> 
                : <img src={loading} style={{ width: '40px', marginBlock: '5rem' }} alt=''/>

            }
            <Button variant='contained' style={{ margin: '1rem' }} onClick={goBack}>Volver</Button>
        </div>
    )
};

export default Home;