import React from 'react';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ProductDetailTechSpec = () => {
    return (
        <Container className="tech-spec">
            <h1>Tech Spec</h1>
            <TableContainer component={Paper}>
                <Table size="large" aria-label="a dense table">
                    <TableBody>
                    <TableRow>
                            <TableCell>PROCESSOR</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>OS</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>DISPLAY</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>GRAPHICS</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>STORAGE</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>MEMORY</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>KEYBOARD</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>CONNECTIVITY</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>INPUT & OUTPUT</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>AUDIO</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell>ADDITIONAL FEATURES</TableCell>
                            <TableCell align="left">asdsadsadsadsadsadsadsadsadsadsadsasadsaddsa</TableCell>
                    </TableRow>
                  
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
export default ProductDetailTechSpec;