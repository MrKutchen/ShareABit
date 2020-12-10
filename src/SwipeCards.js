import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './SwipeCards.css';

function SwipeCards() {
    const [people, setPeople] = useState([
        {
            name: "Chris Nobles",
            url: "https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/5281928_1436828872.4392.jpg",
        },
        {
            name: "Dolio Durant",
            url: "https://www.zipcodewilmington.com/hubfs/Dolio.jpg",
        },
    ]);
    //const people = [];
    //people.push('Peter', 'Andrew
    //setPeople([...people, 'Peter', 'Andrew'])

    return (
        <div>
            <h1>Swipe cards</h1>

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
    );
}

export default SwipeCards