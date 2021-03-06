import React from 'react'

const Results = ({beers}) => {
    return (
        // fragment 
        <div>
            {beers.map(beer => <li key={beer.id}>
                {beer.title} - <img src={beer.pic}/>
            </li>)}
        </div>
    )
}

export default Results