import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';


class Music extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
           updatedSong:false,
           updatedArtist:false,
           songInput:props.song,
           artistInput:props.Artist,
        }
    }
    handleRemoveMusicClick = (e) =>
    {
        var id = this.props.id;
        this.props.removeMusic(id);
        //console.log(id);
    }
    //for updatedSong true when dobule click to enter update mode
    handelSongUpdateDoubleclick = () =>
    {
        this.setState({updatedSong:true});
    }
    //for updatedArtist true when dobule click to enter update mode
    handelArtistUpdateDoubleclick = () =>
    {
        this.setState({updatedArtist:true});
    }
    //for updatedSong false  to exit update mode
    handleInputSongBlur = () =>
    {
        var id = this.props.id;
        var data ={
            song:this.state.songInput,
        }
        this.props.editMusic(id,data);
        this.setState({updatedSong:false});
    }
    //for updatedArtist false  to exit update mode
    handleInputArtistBlur = () =>
    {
        var id = this.props.id;
        var data ={
            Artist:this.state.artistInput,
        }
        this.props.editMusic(id,data);
        this.setState({updatedArtist:false});
    }
    // for transfer value to songInput
    handleSongInputChange = (e) =>
    {
        this.setState({songInput:e.target.value});
    }
    // for transfer value to songInput
    handleArtistInputChange = (e) =>
    {
        this.setState({artistInput:e.target.value});
    }
    render()
    {
        return(
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1" onDoubleClick={this.handelSongUpdateDoubleclick}>
                      {
                          this.state.updatedSong ? (<input type="text" onBlur={this.handleInputSongBlur} onChange={this.handleSongInputChange}  autoFocus/>):this.props.song }
                        </h5>
                      
                      <small onClick={this.handleRemoveMusicClick}><i className="fas fa-trash-alt" ></i></small>
                    </div>
                    
                    <small className="text-muted" onDoubleClick={this.handelArtistUpdateDoubleclick} >
                        {this.state.updatedArtist ? (<input type="text" onBlur={this.handleInputArtistBlur} onChange={this.handleArtistInputChange} autoFocus/>)  : this.props.Artist}
                    </small>
                  </a>
        );
    }
}

export default Music;