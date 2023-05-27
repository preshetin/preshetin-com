import React, { useState } from 'react'
import Image from 'next/image'

const GifPlayer = ({ gif, still, ...rest }) => {
  const [isAnimated, setIsAnimated] = useState(false)

  const toggle = () => isAnimated ? setIsAnimated(false) : setIsAnimated(true)
  
  return (
    <div
      // className={classNames('gif_player', { 'playing': playing })}
      style={{ cursor: 'pointer', border: "3px solid gray"}}
      onClick={toggle}
    >
      {/* <div className="play_button" /> */}
      <Image width={1900} height={1456} {...rest} src={isAnimated ? (gif || still) : (still || gif)} />
    </div>
  )
}
  
  

  export default GifPlayer;