import './App.css';
import Searchbar from './component/Searchbar';
import youtubeapi from './api/youtubeapi';
import VideoList from './component/VideoList';
import VideoDetail from './component/VideoDetail';

import React, { Component } from 'react'

export class App extends Component {
  state = {
    videos:[],
    selectedVideo:''
  }
  componentDidMount(){
    this.onTermSubmit('he ram he ram')
  }

  onSelectedVideo = (video)=>{
   this.setState({selectedVideo:video})

  }

  onTermSubmit =  async (term)=>{
    const res = await youtubeapi.get('/search',{
      params:{
        q:term
      }
    })
    this.setState({videos:res.data.items , selectedVideo:res.data.items[2]})

  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='row yt'>
            <h1 className='text-center col-md-12'>  YOUTUBE SEARCH</h1>
          </div>
          <div className='row my-3'>
            <div className="col-md-8">
              <Searchbar onFormSubmit={this.onTermSubmit}/>
              <VideoDetail video={this.state.selectedVideo}/>
              
            </div>
            
            <div className='col-md-4'>
             <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
