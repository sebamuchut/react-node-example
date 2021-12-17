import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {field: 'nombre', headerName: 'Nombre', width: 200},
    {field: 'sector', headerName: 'Sector', width: 200},
    {field: 'edad', headerName: 'Edad', width: 200},
    {field: 'email', headerName: 'Email', width: 200}
]

const TableResult = ({info}) => {
    let id = 0;
    const rowData = info?.map(e => {
            return {
                id: id+=1,
                nombre: e?.name,
                sector: e?.sector,
                edad: e?.age,
                email: e?.email
            }
        })

    return(
        <DataGrid 
        rows={rowData}
        columns={columns}
        density='compact'
    />
    )
};

export default TableResult;