import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './SwipeCards.css';

function SwipeCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
       const unsubscribe = database
            .collection('people')
            .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
            );

       return () => {
           unsubscribe();
       };
    }, []);
    //const people = [];
    //people.push('Peter', 'Andrew
    //setPeople([...people, 'Peter', 'Andrew'])

    return (
        <div>
            <div className="swipeCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}

                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default SwipeCards