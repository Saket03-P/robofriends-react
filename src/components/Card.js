import React from 'react';

const Card = ({ idx, id, name, email}) => {
  return (
    // the below is JSX, and importing React is necessary for using html-like syntax.
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?size=225x225`} alt='robo display pic' />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card