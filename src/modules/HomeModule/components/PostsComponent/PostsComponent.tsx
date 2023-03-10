import React from 'react'

import hogwarts from '../../../../assets/images/postsImages/Hogwarts.jpg'
import videoGames from '../../../../assets/images/postsImages/video-games.png'

import alien from '../../../../assets/images/postsImages/alien.png';

import shrek from '../../../../assets/images/postsImages/shrek.jpg'
import movie from '../../../../assets/images/postsImages/movie.png'

import { PostComponent } from './PostComponent/PostComponent'
import NextPage from './NextPage/NextPage';

const post1 = 'What do you think about the new game based on the Harry Potter books and movies?';
const post2 = 'A probe is about to be sent into space. On board will be a disk and a computer with a message from humanity. What are you sending?';
const post3 = `What's your favorite shrek movie?`;

export const PostsComponent: React.FC = () => {
  return (
    <main>
      <PostComponent subReddit='VideoGames' subRedditImage={videoGames} postImage={hogwarts} time='5 minutes ago' likes={10} text={post1} comments={3} />
      <PostComponent subReddit='Green' subRedditImage={alien} time='7 minutes ago' likes={2} text={post2} comments={1} />
      <PostComponent subReddit='Movie' subRedditImage={movie} postImage={shrek} time='25 minutes ago' likes={33} text={post3} comments={15} />
      <NextPage />
    </main>
  )
}