import {React,useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import db from './firebase'

function TinderCards() {
    const [people ,setPeople] = useState([])

   useEffect(()=>{
    db.collection('people').onSnapshot((snapshot)=>(
        setPeople(snapshot.docs.map((doc)=>doc.data()))
    ))
    // return(()=>{
    //     unsubscribe()
    // })
   },[])

    // setPeople([...people,'sonny','qazi'])
    return (
        <div>
            
            <div className="card-container">
                    {
                        people.map((person)=>(
                            <TinderCard className='swipe' key={person.name} preventSwipe={['up','down']}>
                                <div className='card' style={{backgroundImage:`url(${person.url})`}}>
                                    <h3>{person.name}</h3>
                                </div>
                            </TinderCard>
                        ))
                    }
            </div>
            
        </div>
    )
}

export default TinderCards
