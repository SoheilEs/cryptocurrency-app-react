import React from 'react';
import classes from './Coin.module.css'
const Coin = ({image,symbol,price,name,marketCap,priceChange}) => {
   
    return (

        <div className={classes.contaniner}>
           <img className={classes.image} src={image} alt={name} />
           <span className={classes.name}>{name}</span>
           <span className={classes.symbol}>{symbol}</span>
           <span className={classes.price}>$ {price}</span>
           <span className={priceChange >0 ? classes.greenPriceChange : classes.redPriceChange}>{priceChange}</span>
           <span className={classes.marketCap}>$ {marketCap}</span>
        </div>
    );
};

export default Coin;