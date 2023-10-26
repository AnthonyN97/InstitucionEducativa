import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    trimestre: string,
    duracion: string,
    evaluacion: string,
    vacaciones: string,
    entregaDeLibretas: string,
) {
    return { trimestre, duracion, evaluacion, vacaciones, entregaDeLibretas };
}

const rows = [
    createData('I', 'Del 09 de marzo al 3 de junio', 'Del 26 de mayo al 2 de junio', '', '4 de Junio'),
    createData('II', 'Del 06  de junio al 16  de setiembre', 'Del 8 de setiembre al  15 de setiembre', 'Del 25 de Julio al 05 de Agosto', '17 de Setiembre'),
    createData('III', 'Del  19 de setiembre al 22 de diciembre', 'Del 13 de diciembre al 20 de Diciembre', '', '22 de Diciembre'),
];

const AñoLectivo: React.FC = () => {
    return (
        <div className="container mx-3/5 mx-auto w-full sm:w-4/5 py-4 px-4 justify-center text-center items-center">
            <h1  className='place-content-center uppercase'>Calendarización del año lectivo:</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Trimestre</TableCell>
                            <TableCell align="right">Duración</TableCell>
                            <TableCell align="right">Evaluación</TableCell>
                            <TableCell align="right">Vacaciones</TableCell>
                            <TableCell align="right">Entrega de Libretas</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.trimestre}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.trimestre}
                                </TableCell>
                                <TableCell align="right">{row.duracion}</TableCell>
                                <TableCell align="right">{row.evaluacion}</TableCell>
                                <TableCell align="right">{row.vacaciones}</TableCell>
                                <TableCell align="right">{row.entregaDeLibretas}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default AñoLectivo;