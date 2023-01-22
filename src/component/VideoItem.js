import React from 'react'

const VideoItem = ({video,onSelectedVideo}) => {
  return (
    <>onSelectedVideo(video)
        <div className='col-md-12 ' onClick={()=>{onSelectedVideo(video)}}>
            <div className='row  border p-2'  style={{cursor:'pointer'}}>
                <div className='col-md-3'>
                    <img height='70px' 
                        width='90px'
                        alt={video.snippet.title}
                        src={video.snippet.thumbnails.medium.url}
                    />
                </div>
                <div className='col-md-9'>
                    <p>{video.snippet.title}</p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default VideoItem