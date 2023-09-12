import React from 'react'
import {data} from "./DataCard"

function TestCard(){
    return(
        <>
        <img 
        className='w-full h-[400px] object-cover'
        src= "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=''
        />

        <div className='relative flex items-center'>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {data.map((item) => (
                    <img
                    className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                    src={item.img}
                    alt='/'
                    
                    />
                
                ))}
              

            </div>
        </div>
        
        </>
    )
}
export default TestCard;