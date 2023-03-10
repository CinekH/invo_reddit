import React from 'react'
import './NextPage.scss'

const NextPage: React.FC = () => {
  return (
    <div className='next-page'>
        <button className='next-page__button text-regular' aria-label="go to next page">Next</button>
    </div>
  )
}

export default NextPage