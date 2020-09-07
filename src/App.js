import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import './App.css';

import PrivateRoute from './components/PrivateRoute'
import Nav from './components/nav/Nav'
import Signin from './components/signin/Signin'
import HomePage from './pages/HomePage';
import NewQuestion from './components/new-question/NewQuestion';
import LeaderboardPage from './pages/LeaderboardPage';
import Question from './components/question/Question';
import Result from './components/result/Result';
import { handleInitialData } from './redux/actions/shared';
import NoMatch from './components/NoMatch';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: 'blue' }} />
        <div className="App">
          <Nav />
          {this.props.loading === true
            ? null
            :
            <Switch>
              <PrivateRoute exact path='/'>
                <HomePage />
              </PrivateRoute>
              <PrivateRoute path='/add'>
                <NewQuestion />
              </PrivateRoute>
              <PrivateRoute path='/leaderboard'>
                <LeaderboardPage />
              </PrivateRoute>
              <PrivateRoute path='/question/:id'>
                <Question />
              </PrivateRoute>
              <PrivateRoute path='/result/:id'>
                <Result />
              </PrivateRoute>
              <Route path='/signin' render={() =>
                this.props.authedUser ? (
                  <Redirect to='/' />
                ) : (
                    <Signin />
                  )
              } />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          }
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loading: loadingBar.default === 1,
  }
}

export default connect(mapStateToProps)(App);