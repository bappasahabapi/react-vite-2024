
import games from '@/data/games';
import React from 'react'

export function generateStaticParams(){
  return games.map(game=>({
    gameId:game.id
  }))
}

export default function SingleGame({params}) {
  console.log("Rendering Single Game ...")
    const {gameId}=params;
    const game =games.find((game)=>game.id === gameId);
    const {title, description}=game;
 
  return (
    <div className='p-8'>
        <h1 className="text-2xl text-center">Statically Render Dynamic Route Page for Single Game</h1>
        <h3 className='text-xl '>{title}</h3>
        <p className='mt-4 '>{description}</p>
    </div>
  )
}

