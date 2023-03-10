import React from 'react'
import './TrendingTodayGlobalComponent.scss';
import { Card } from './Card/Card';

import card1 from '../../assets/images/cardsImages/card1.jpg'
import card2 from '../../assets/images/cardsImages/card2.jpg'
import card3 from '../../assets/images/cardsImages/card3.jpg'
import card4 from '../../assets/images/cardsImages/card4.jpg'
import formula from '../../assets/images/cardsImages/formula.png'
import lola from '../../assets/images/cardsImages/lola.png'
import minecraft from '../../assets/images/cardsImages/minecraft.png'
import nba from '../../assets/images/cardsImages/nba.png'

export const TrendingTodayGlobalComponent: React.FC = () => {
    return (
        <div className='trending-today'>
            <header className='trending-today__header'>
                <h2 className="trending-today__title text-large">Trending today</h2>
            </header>
            <section className="trending-today__cards">
                <Card
                    title="2023 MoneyGram Haas VF-23 Livery"
                    text='Meet the new painting from the formula'
                    subReddit='Formula1'
                    subRedditImage={formula}
                    cardImage={card1}
                />
                <Card
                    title="What would you add to minecraft?"
                    text='If there was one thing you could add to Minecraft what would it be?'
                    subReddit='Minecraft1234'
                    subRedditImage={minecraft}
                    cardImage={card2}
                />
                <Card
                    title="Miley Cyrus looks different"
                    text='Miley looks like a mix of Cher, Dolly Parton, and Kim Kardashian'
                    subReddit='Lola'
                    subRedditImage={lola}
                    cardImage={card3}
                />
                <Card
                    title="LeBron James is less than 100 POINTS"
                    text='Kareem Abdul-Jabbar is the all-time leading scorer in the NBA'
                    subReddit='NBA'
                    subRedditImage={nba}
                    cardImage={card4}
                />
            </section>
        </div>
    )
}