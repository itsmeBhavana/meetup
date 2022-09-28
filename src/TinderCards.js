import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';

function TinderCArds() {
    const [poeple,setPeople]=useState([]);

    useEffect(()=>{
        async function fetchData() {
            const req=await axios.get('/meetup/cards');
            setPeople(req.data);
        }
        fetchData();
    },[])

    const swiped=(direction,nameToDelete)=>{
        console.log("removing: "+ nameToDelete);
    };
    const outOfFrame=(name)=>{
        console.log(name+ "left the screen");
    }
  return (
    <div className='tinderCards'>
        <div className="tinderCards__cardContainer">
        {poeple.map(person=>(
            <TinderCard
            className='swipe'
            key='person.name'
            preventSwipe={['up','down']}
            onSwipe={(dir)=>swiped(dir,person.name)}
            oncardLeftScreen={()=>outOfFrame(person.name)}>
                <div style={{backgroundImage:`url(${person.imgUrl})` }} className='card'>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
        
    </div>
  )
}

export default TinderCArds