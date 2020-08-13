import React from 'react';
import FilterDetail from './FilterDetail';
import { connect } from 'react-redux';
import { Chip, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import * as action from '../redux/actions/index';

const Filter = (props) => {
    const { Item } = props;
    const [isDisplayFilter, setIsDisplayFilter] = React.useState(true);
    const handleDisplay = () => {
        setIsDisplayFilter(!isDisplayFilter);
    }

    const onClearItem = () =>{
        props.onClearItem();
    }

    React.useEffect(() => {
        function handle() {
            if (res.matches) {
                setIsDisplayFilter(false)
            } else {
                setIsDisplayFilter(true)
            }
        }
        const res = window.matchMedia('(max-width:769px)');
        res.addEventListener('change', handle);
        return () => {
            res.removeEventListener('change', handle);
        }
    }, [])
    return (
        <div>
            <div className="filter-title">
                <h3>filter by</h3>
                {!isDisplayFilter && <IconButton onClick={handleDisplay}><MenuIcon /></IconButton>}
                {!!isDisplayFilter && <IconButton onClick={handleDisplay}><CloseIcon /></IconButton>}
                <div className="filter-chip">{Item.map((x, y) => <Chip key={y} label={x} />)} {Item.length > 1 && <button onClick={onClearItem}>x</button>}</div>
            </div>
            {!!isDisplayFilter && <div className="filter-list">
                <FilterDetail title="screen size" label={[{ label: '13 inch' }, { label: '15 inch' }, { label: '17 inch' }]} />
                <FilterDetail title="screen type" label={[{ label: 'full hd' }, { label: '4k touch' }, { label: 'oled 4k touch' }, { label: 'oled 4k' }]} />
                <FilterDetail title="refresh rate" label={[{ label: '60 hz' }, { label: '300 hz' }, { label: '144 hz' }, { label: '120 hz' }, { label: '240 hz' }]} />
                <FilterDetail title="processor" label={[{ label: '10th Gen Intel® Core™ i7' }, { label: '9th Gen Intel® Core™ i7' }]} />
                <FilterDetail title="graphics" label={[{ label: 'GeForce RTX 2070 Max-Q' }, { label: 'GeForce RTX 2080 Super Max-Q' }, { label: 'GeForce GTX 1650 Ti Max-Q ' }]} />
                <FilterDetail title="storage" label={[{ label: '512 SSD ' }, { label: '1TB SSD ' }, { label: '256 SSD ' }]} />
                <FilterDetail title="memory" label={[{ label: '16 gb' }, { label: '32 gb' }]} />
                <FilterDetail title="color" label={[{ label: 'black' }, { label: 'mercury' }]} />
                <FilterDetail title="keyboard" label={[{ label: 'Per key RGB ' }, { label: 'Single-zone RGB ' }]} />
                <FilterDetail title="studio edition" label={[{ label: 'Studio Edition - No (16)' }]} />
            </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Item: state.Item
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onClearItem: () =>{
            dispatch(action.clearFilterItem());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);