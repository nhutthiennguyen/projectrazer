import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import * as action from '../redux/actions/index';


const FilterDetail = (props) => {
    const [filterItem, setFilterItem] = React.useState([]);
    const { label, title } = props;
    const onAddFilter = (e) => {
        let target = e.target.checked;

        if (target) {
            setFilterItem(e.target.value)
        } 
        props.onAddFilter(filterItem,target)
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
                    {label.map((x, y) =>
                        <FormControlLabel
                            key={y}
                            control={<Checkbox value={x.label} onChange={onAddFilter} />}
                            label={x.label}

                        />
                    )}
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}
const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddFilter: (value,status) => {
            dispatch(action.addFilter(value,status));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterDetail);