import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            { 
                robots.map((robot, idx) => {
                    // virtualDOM keeps track of what all the cards are, 
                    // so a 'key' prop is needed so that React knows which card is being altered.
                    // hence, a 'key' prop is used for identification while doing any manipulations.
                    return (
                        <Card 
                            key={ idx } 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList