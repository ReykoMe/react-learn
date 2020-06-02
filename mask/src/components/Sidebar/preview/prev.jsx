import React from 'react';
import classes from './prev.module.css';

const Prev = () => {
    return(
        <div className={classes.item}>
            <img src={require("../../../media/last_post_img_prev.jpg")} alt=""/>
            <h4>Apple not save the world</h4>
            <p>Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to develop and sell Wozniak's Apple I personal computer, though Wayne sold his share back within 12 days.</p>
        </div>
    )
}

export default Prev;