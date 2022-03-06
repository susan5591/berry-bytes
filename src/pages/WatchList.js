import React,{useContext} from 'react'
import {AppContext} from '../context'
import '../css/poster.css'

const WatchList = () => {
  const {watch} =  useContext(AppContext)
  console.log(watch)
  return (
    <div className='poster'>
      {
        watch.map((item)=>{
          return <div className='poster-under'>
              <img src={item.poster} alt='watchlist poster' />
            </div>
        })
      }
    </div>
  )
}

export default WatchList