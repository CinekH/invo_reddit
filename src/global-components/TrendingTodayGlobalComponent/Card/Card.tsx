import React from 'react';
import './Card.scss'

interface ICard {
    title: string,
    text: string,
    subReddit: string,
    subRedditImage: string,
    cardImage: string
}

export const Card: React.FC<ICard> = ({title, text, subReddit, subRedditImage, cardImage}) => {
  return (
    <div className='card'>
        <img src={cardImage} className='card__image' alt="card"/>
        <div className="card__overlay"></div>
        <header className='card__header'>
            <img src={subRedditImage} className='card__subreddit-image' />
            <p className="card__subreddit text-small">{subReddit}</p>
        </header>
        <div className='card__content'>
            <h3 className="card__title text-large">{title}</h3>
            <p className="card__text text-regular">{text}</p>
        </div>
    </div>
  )
}