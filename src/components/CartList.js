import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

const CartList = ({img, name, quantity, price})=>{
    return(
      
            <TableRow>
            <TableCell align="center">{img}</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{quantity}</TableCell>
            <TableCell align="center">{price}</TableCell>
            </TableRow>
        
    )
}
export default CartList;