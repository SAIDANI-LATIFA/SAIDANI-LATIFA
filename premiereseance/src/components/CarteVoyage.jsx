import React, { useState } from "react"
import './CarteVoyage.css';

const CarteVoyage = ({ desc, title, img, max=90 }) => {
  const [showMore, setShowMore] = useState(true)

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
    desc = showMore ? desc.substring(0, max ): desc; if(desc.length == max ) desc +="...";
  return (
    <div className='carte_container'>
      <img src={img} alt="image" className='carte-img' />
      <h4>{title}</h4>
      <p className='carte_p'>{desc}</p>
       <button  onClick={toggleShowMore} className='button'>{showMore ? 'ShowMore' : 'ShowLess'}</button>
      
    </div>
  )
}

export default CarteVoyage