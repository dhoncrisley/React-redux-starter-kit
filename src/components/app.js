import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { something } from '../actions/index'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const Index = () => <div><h2>Index</h2><input type='button' value="Botão" onClick={e => this.props.something()} /></div>;
    const About = () => <h2>About</h2>;
    const Users = () => <h2>Users</h2>;
    return (
      <div>

        <Router>
          <div>
            <li><Link to='./index'>Index</Link></li>
            <li><Link to='./about'>Sobre</Link></li>
            <li><Link to='./users'>Usuários</Link></li>
            <Route path='/index' component={Index} />
            <Route path='/users' component={Users} />
            <Route path='/about' component={About} />
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  somethingState: state.something
})
const mapDispatchToProps = dispatch => bindActionCreators({ something }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)