import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class NewMusicForm extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            songInput:'',
            artistInput:'',
        }
    }
    handleSongInputChange = (e) =>
    {
        this.setState({songInput:e.target.value});
    }
    handleArtistInputChange = (e) => 
    {
        this.setState({artistInput:e.target.value})
    }
    handleAddMusicClick = (e) =>
    {
        e.preventDefault();
        var data ={
            song:this.state.songInput,
            Artist:this.state.artistInput,
        }
        this.props.addMusic(data);
    }
    render()
    {
        return(
            <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="song" className="sr-only">Song</label>
                <input type="text" className="form-control" id="song" placeholder="Song" onChange={this.handleSongInputChange}/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="artist" className="sr-only">Artist</label>
              <input type="text" className="form-control" id="artist" placeholder="Artist" onChange={this.handleArtistInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary mb-2" onClick={this.handleAddMusicClick}>Add</button>
          </form>
        );
    }
}

export default NewMusicForm;