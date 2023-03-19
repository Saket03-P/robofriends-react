import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import './App.css';

const App = () => {
    // A state is an object - describing ur application.
    // Props are the data that come out of state.
    // useState() returns an arr of size 2, first one is the state obj; the 2nd is the manipulating func.
    const [robots, setRobots]= useState([]);
    const [searchfield, setSearchfield]= useState('');

    // Gets run every time the App.js is rendered.
    // unwanted re-rendering occurs if we are setting some state inside the useEffect.
    // an empty dep-array to the useEffect implies it to be used as componentDidMount.
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots= robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
        <h1>Loading !!!</h1> :
        (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onSearchChange= { onSearchChange } />
                <Scroll>
                    {/* The CardList component is a child to the Scroll, since Scroll Comp wraps the CardList. */}
                    <CardList robots= { filteredRobots } />
                </Scroll>
                <Footer />
            </div>
        )
}

export default App