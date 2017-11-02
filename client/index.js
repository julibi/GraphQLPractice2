import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  //this configuration takes every piece of data that is fetched by 
  //Apollo client from the backend and runs it through this function
  //what is returned from this function is used to identify each piece
  //data inside of the apollo store
  //this means every query and mutation has to explicitly ask for an id
  dataIdFromObject: o => o.id
});

const Root = () => {
  return(
      <ApolloProvider client={client}> 
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SongList} />
            <Route path="songs/new" component={SongCreate} />
             <Route path="songs/:id" component={SongDetail} />
          </Route>
        </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
