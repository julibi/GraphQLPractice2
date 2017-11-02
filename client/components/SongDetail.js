import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    //this.props.data.loading would also work
    //this.props.data.loading makes more sense when fetching multiple records 
    if(!song) { return <div></div>;}

    return(
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}



export default graphql(fetchSong, {
  //graphql intercepting props information from react router 
  //so that we can access a query variable
  //this is different from mutation variables
  //that can be seen in SongCreate.js
  options: (props) => { return { variables: { id : props.params.id } } }
})(SongDetail);
