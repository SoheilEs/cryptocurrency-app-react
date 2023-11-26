import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
import { ClipLoader } from 'react-spinners';
import Coin from './Coin';
import classes from './Landing.module.css'


const Landing = () => {
    const [coins,setCoins]  = useState([])
    const [search, setSearch] = useState("")
    useEffect(()=>{
        const fetchApi = async () =>{
         setCoins( await getCoin() )
        
        }
       fetchApi() 
       
    },[])
    
    const changeHandler = (event)=>{
        setSearch(event.target.value)
   
    }
    const searchCoins = coins.filter(coin=> coin.name.toLowerCase().includes(search.toLocaleLowerCase()))
    return (
        <>
           
            <input className={classes.input} type="search" placeholder="Search...." value={search} onChange={changeHandler}/>
            {coins.length ? 
            <div className={classes.coinContainer}>
               {
                searchCoins.map(coin => <Coin 
                key={coin.id} 
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol.toUpperCase()}
                price={coin.current_price.toLocaleString()}
                marketCap={coin.market_cap.toLocaleString()}
                priceChange={coin.price_change_24h.toFixed(2)
}
                 /> )
               }
            </div>:<div style={{alignItems:"center",postion:"absolute", top:"50%"}}><ClipLoader color='#2970e3' size="150px"  /></div>
            }
            
        </>
    );
};

export default Landing;