import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';


const FooterContent = ({ title, label }) => {
    const matches = useMediaQuery('(max-width:769px)');
    return (
        <div className={!matches ? "footer-content" : "footer-content-res"}>
            <h3>{title}</h3>
            <div className="footer-list-content">
                {label.map((x, y) =>
                    <ListItem>
                        <ListItemText key={y} primary={x.label} />
                    </ListItem>
                )}
            </div>
        </div>
    )
}
export default FooterContent;