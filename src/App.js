import React,{Component} from 'react';
// import logo from './logo.svg';
import music from './music.png';
import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    // this.state = musics [
    //   {
    //     id:1,
    //     song:'This is my kingdom',
    //     Artist:'Imagine Dragons',
    //   },
    //   {
    //     id:2,
    //     song:'Song2',
    //     Artist:'abc',
    //   },
    //   {
    //     id:3,
    //     song:'Beliver',
    //     Artist:'Imagine Dragons',
    //   }
    // ];
  }

  render() 
  {
    return(
      <div className="wrap">
      <div className="container">
          <div className="row">
              <div className="col-md-12 music_div">
                  <img className="music_img" src={music} alt="music" />
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <h1 className="title">New Album</h1>
              </div>
          </div>
          <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">This is my kingdom</h5>
                      
                      <small><i className="fas fa-trash-alt"></i></small>
                    </div>
                    
                    <small className="text-muted">Imagine Dragons</small>
                  </a>
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
                <form className="form-inline">
                  <div className="form-group mx-sm-3 mb-2">
                      <label htmlFor="inputPassword2" className="sr-only">Song</label>
                      <input type="password" className="form-control" id="inputPassword2" placeholder="Song"/>
                  </div>
                  <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">Artist</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Artist"/>
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">Add</button>
                </form>
      </div>
  </div>
    );
  }
}
export default App;
