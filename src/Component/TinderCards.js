import React,{useState} from 'react';
import './TinderCard.css'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
    const [people, setPepole] = useState([
        {
            name:'Remon roy',
            url:'https://files.fm/thumb_show.php?i=bm9ynjw5v'
        },
        {
            name:'Bordha',
            url:'https://files.fm/thumb_show.php?i=rfazc6rsd'
        },
        {
            name:'Jhankar Mahabub',
            url:'https://files.fm/thumb_show.php?i=d22dn594b'
        },
        {
            name:'motivational speech',
            url:'https://files.fm/thumb_show.php?i=3b242b8bc'
        },
        
    ])
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
      
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className='tinderCard'>
            <div className="tinderCard_container">
                {
                    people.map((per)=>(
                        <TinderCard 
                            className='swipe'
                            key={per.name}
                            onSwipe={(dir)=>onSwipe(dir,per.name)}
                            onCardLeftScreen={() => onCardLeftScreen(per.name)}
                            preventSwipe={['up','down']} 
                        >
                        <div 
                            style={{backgroundImage:`url(${per.url})`}}
                            className="card"
                        >
                            <h3 style={{color:'#ddd'}}>{per.name}</h3>
                        </div>
                        
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TinderCards;