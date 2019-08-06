import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';


class Music extends Component
{
    constructor(props)
    {
        super(props);
    }
    handleRemoveMusicClick = (e) =>
    {
        var id = this.props.id;
        this.props.removeMusic(id);
        //console.log(id);
    }
    render()
    {
        return(
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{this.props.song}</h5>
                      
                      <small onClick={this.handleRemoveMusicClick}><i className="fas fa-trash-alt" ></i></small>
                    </div>
                    
                    <small className="text-muted">{this.props.Artist}</small>
                  </a>
        );
    }
}

export default Music;