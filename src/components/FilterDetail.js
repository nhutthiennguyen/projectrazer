import React, {useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails,FormControlLabel,Checkbox, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { green } from '@material-ui/core/colors';


const FilterDetail = ({ label, title,})=>{
    const [isChecked, setIsChecked] = useState(false);
    const [filter, setFilter] = useState('');
    const onAddFilter = (event)=>{
        const value = event.target.value;
        setIsChecked(!isChecked)
        if (isChecked){
            setFilter(value);
        }else{
            return;
        }
        console.log(filter)
        
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
                        control= {<Checkbox value={x.label}  onChange={onAddFilter}  />}
                        label = { x.label }
                        
                     />
                )}
            </AccordionDetails>
            </Accordion>
      </Grid>
    )
}

export default FilterDetail;