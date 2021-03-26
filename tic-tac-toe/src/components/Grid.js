import React, { useEffect } from 'react';
import './style.css';

var arr = ['','','','','','','','','']
const Grid = () => {
    
    const [turn,setTurn] = React.useState(0);
    const [color,setColor] = React.useState(false)
    const handleClick=(position)=>{
        if((turn % 2 === 0 ) && (turn<9)){
            arr[position]='O'
            
        }else{
            arr[position]='X'
        }

        if(turn == 8){
            alert('game draw')
        }else{
            setTurn(turn+1)
            setColor(!color)
        }
        console.log(arr)
        
    }
    

    useEffect(()=>{
        const check=()=>{
            const test=(((arr[0]===arr[1])&&(arr[1] === arr[2]) && (arr[0]!=''))
                        ||((arr[3]===arr[4])&&(arr[4] === arr[5]) && (arr[3]!=''))
                        ||((arr[6]===arr[7])&&(arr[7] === arr[8]) && (arr[6]!=''))
                        ||((arr[0]===arr[3])&&(arr[3] === arr[6]) && (arr[0]!=''))
                        ||((arr[1]===arr[4])&&(arr[4] === arr[7]) && (arr[1]!=''))
                        ||((arr[2]===arr[5])&&(arr[5] === arr[8]) && (arr[2]!=''))
                        ||((arr[0]===arr[4])&&(arr[4] === arr[8]) && (arr[0]!=''))
                        ||((arr[2]===arr[4])&&(arr[4] === arr[6] && (arr[2]!=''))
                        ))
            if(test){
                alert('we have a winner')
                arr = ['','','','','','','','','']

            }  
        };
        check()
        console.log()
    },[handleClick,alert])

    return (
       <div className='Grid'>
           <div className='grid-item'  onClick={()=>{handleClick(0)}}>{arr[0]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(1)}}>{arr[1]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(2)}}>{arr[2]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(3)}}>{arr[3]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(4)}}>{arr[4]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(5)}}>{arr[5]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(6)}}>{arr[6]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(7)}}>{arr[7]}</div>
           <div className='grid-item'  onClick={()=>{handleClick(8)}}>{arr[8]}</div>
        </div>
    )
}

export default Grid
