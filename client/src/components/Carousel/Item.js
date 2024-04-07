import { Paper, Button } from '@mui/material';
import React from 'react';

function Item({ item }) {
    return (
        <Paper>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <img
                    className='imgcarou'
                    src={item.image}
                    loading="lazy"
                    alt={item.title}
                />
                <h2>{item.title}</h2>
                <Button className="CheckButton">
                    ACHÈTE !
                </Button>
            </div>
        </Paper>
    );
}

export default Item;
