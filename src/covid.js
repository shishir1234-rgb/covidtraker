import React, { useEffect, useState } from 'react'
import '../src/covid.css';


const Covid=()=>{
    const [data, setData]=useState([]);
    const getCovidData=async()=>{
        try{
            const res = await fetch ('https://data.covid19india.org/data.json');
            const showdata = await res.json();
            console.log(showdata.statewise[0]);
            setData(showdata.statewise[0]);
        }
        catch(err){
            console.log(err);

        }
        
}
    useEffect(()=>{
        getCovidData();

    },[]);
    return(
        <>

        <div className='upper'>
             <h1>🔴LIVE</h1>
            <h2>CORONAVIRUS TRAKER</h2>
        </div>
       
           

            <ul>
            <li className='card'>
                
                <div className='card_inner'>
                    <p className='card_name'><span>OUR</span>COUNTRY</p>
                    <p className='total'>INDIA</p>                                        
                </div>             
        </li>
        <li className='card'>
                
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span>RECOVERED</p>
                    <p className='total'>{data.recovered}</p>                                        
                </div>             
        </li>
        <li className='card'>
                
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL </span>CONFIRMED</p>
                    <p className='total'>{data.confirmed}</p>                                        
                </div>             
        </li>
        <li className='card'>
                
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span>DEATHS</p>
                    <p className='total'>{data.deaths}</p>                                        
                </div>             
        </li>
        <li className='card'>
                
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span>ACTIVE</p>
                    <p className='total'>{data.active}</p>                                        
                </div>             
        </li>
        <li className='card'>
                
                <div className='card_inner'>
                    <p className='card_name'><span>LAST</span>UPDATED</p>
                    <p className='total'>{data.lastupdatedtime}</p>                                        
                </div>             
        </li>
                
                
            </ul>

       
        </>
    )
}

export default Covid
