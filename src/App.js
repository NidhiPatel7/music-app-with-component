import React,{Component} from 'react';
import NewMusicForm from './NewMusicForm.js';
import Music from './Music.js';
// import logo from './logo.svg';
import img from './music.png';
import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      musics: [
        {
          id:1,
          song:'This is my kingdom',
          Artist:'Imagine Dragons',
        },
        {
          id:2,
          song:'Song2',
          Artist:'abc',
        },
        {
          id:3,
          song:'Beliver',
          Artist:'Imagine Dragons',
        }
      ]
    }
  }
  addMusic = (data) => 
  {
      var newMusics = {
        id:Date.now(),
        ...data,
      }
      var newList = [newMusics,...this.state.musics];
      this.setState({musics:newList});
  }
  removeMusic = (id) =>
  {
      var musics = this.state.musics;
     var filtered = musics.filter((music) =>
     {
        return music.id !== id;
     })
     this.setState({musics:filtered});
     //console.log(filtered);
  }
  editMusic = (id,data) => 
  {

  }


  render() 
  {
    return(
      <div className="wrap">
      <div className="container">
          <div className="row">
              <div className="col-md-12 music_div">
                  <img className="music_img" src={img} alt="music" />
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <h1 className="title">New Album</h1>
              </div>
          </div>
          <div className="list-group">
            {
              this.state.musics.map((music) =>{
                var musicProps = {
                  ...music,
                  key:music.id,
                  removeMusic:this.removeMusic,
                };

                return(
                  <Music {...musicProps}/>
                );
              })
            }
                  
                  {/* <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Song2</h5>
                      
                    </div>
                   
                    <small className="text-muted">abc</small>
                  </a> */}
                  {/* <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Beliver</h5>
                      
                    </div>
                    
                    <small className="text-muted">Imagine Dragons</small>
                  </a> */}
                </div>
               {/* add form */}
               <NewMusicForm addMusic={this.addMusic}/>
      </div>
  </div>
    );
  }
}
export default App;
