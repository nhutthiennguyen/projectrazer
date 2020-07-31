import React, {useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails,FormControlLabel,Checkbox, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { green } from '@material-ui/core/colors';
import {connect} from 'react-redux';
import * as types from '../redux/actions/filterAction';


const FilterDetail = (props)=>{
    const [checked, setChecked] = useState(false);

    const { label, title} = props;
    
    const onAddFilter = (event)=>{
        
        const value = event.target.value
        console.log(value)
    }
    
    
    return (
        <Grid className="filter-detail" item >
            
            <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: green[500] }} />}
            >
            <h3>{title}</h3>
            </AccordionSummary>
            <AccordionDetails>
                {label.map((x,y)=>
                    <FormControlLabel
                        key = {y}
                        control= {<Checkbox value={x.label} checked={checked} onChange={onAddFilter}  />}
                        label = { x.label }
                        
                     />
                )}
            </AccordionDetails>
            </Accordion>
      </Grid>
    )
}
const mapStateToProps = state =>{
    return{};
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        onAddFilter: (item)=>{
            dispatch(types.AddFilter(item))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FilterDetail);