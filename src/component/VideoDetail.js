import React from 'react'

const VideoDetail = ({video}) => {
    
 if(!video){return <div>search anything</div>}
 const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}`

 return(
    <>
        <div>
            <iframe src={videoSrc} title='video player' frameborder='0'
            width="560" height="315"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
               gyroscope; picture-in-picture; web-share" allowfullscreen 
             ></iframe>

             {/* <div>
             <iframe width="560" height="315"
              src="https://www.youtube.com/embed/lS1KScfdr70"
               title="YouTube video player" frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
               gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div> */}
        </div>

        <div className='border p-2'>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </>
 )
}

export default VideoDetail