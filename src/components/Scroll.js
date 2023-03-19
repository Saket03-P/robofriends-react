import React from 'react'

const Scroll = ({ children }) => {

    // We can actually render the children of Scroll i.e;
    // the CardList, by using props.children in Scroll.return()
    return (
        <div style={{
            overflowY: 'scroll',
            border: '3px solid black',
            height: '420px',
            marginTop: '4px',
            marginBottom: '40px'
        }}>
            {children}
        </div>
    )
}

export default Scroll