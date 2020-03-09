import React from 'react';
import Cards from '../Cards/Cards';

const CardList = ({jobs}) => {

    const cardArr = jobs.map((user,i) => {
        return <Cards id={jobs[i].id} companyImage={jobs[i].urlToImage} companyUrl={jobs[i].url} name={jobs[i].companyName} role={jobs[i].role} location={jobs[i].location}/>
    });
        
    return(
        <div>
            {cardArr}
        </div>
    );
}

export default CardList;