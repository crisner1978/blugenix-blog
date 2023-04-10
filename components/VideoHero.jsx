import React from 'react'

import ReactPlayer from 'react-player'

const VideoHero = () => {
  return (
    <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
      <ReactPlayer
        className="absolute top-0 left-0"
        url="https://youtu.be/eufNJ4Tt0z8"
        muted={true}
        controls={true}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
      />
    </section>
  )
}

export default VideoHero
