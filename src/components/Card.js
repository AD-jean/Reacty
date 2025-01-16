import React from 'react';

const Card = ({country}) => {
  console.log(country);

  return (
    <li className='card'>
      <div className='infos'>
        <h2></h2>
        <img src={country.flags.svg} 
            alt={"drapeau" + country.translations.fra.common} 
        />
        <div className='infos'>
          <h2>{country.translations.fra.common}</h2>
          <h4>{country.capital}</h4>
          <p>{country.population.toLocaleString('fr-FR')}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
