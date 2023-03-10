import React from 'react'

import './PostComponent.scss'

import { ReactComponent as ArrowUp } from '../../../../../assets/icons/arrow_up.svg'
import { ReactComponent as CommentsIcon } from '../../../../../assets/icons/comments.svg'
import { ReactComponent as Save } from '../../../../../assets/icons/save.svg'
import { ReactComponent as Share } from '../../../../../assets/icons/share.svg'
import { ReactComponent as Dots } from '../../../../../assets/icons/3_dots.svg'

interface IPostComponentProps {
  subReddit: string,
  subRedditImage: string,
  time: string,
  likes: number,
  text: string,
  postImage?: string,
  comments: number,
}

export const PostComponent: React.FC<IPostComponentProps> = ({ subReddit, subRedditImage, time, likes, text, comments, postImage = null }) => {
  return (
    <article className="post">
      <div className="post__menu">
        <button><ArrowUp alt="vote up" /></button>
        <p className='text-regular post__likes'>{likes}</p>
        <button><ArrowUp className="arrow-down" alt="vote down" /></button>
      </div>
      <div className="post__content">
        <header className='post__header'>
          <div className='post__image--container'>
            <img src={subRedditImage} className="post__image--subredit" />
          </div>
          <h2 className='post__text post__text--subreddit text-regular'>{subReddit}</h2>
          <p className='text-tiny post__text post__text--time'>{time}</p>
        </header>
        <div className="post__main">
          <p className='post__text text-big'>{text}</p>
          {postImage !== null ? <div className='post__image-container'><img src={postImage} className="post__image--content" /></div> : null}
        </div>
        <div className='post__bottom-menu'>
          <div className='post__block--left'>
            <button className='post__button post__button--comments text-small'>
              <CommentsIcon alt="comment post" /> {comments} Comments
            </button>
            <button className='post__button post__button--share text-small'>
              <Share alt="share post" /> Share
            </button>
            <button className='post__button post__button--save text-small'>
              <Save alt="save post" /> Save
            </button>
          </div>
          <div>
            <button className='post__button'>
              <Dots alt="more" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}