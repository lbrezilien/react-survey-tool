'use strict'
import React from 'react';
import Surveys from './surveys.jsx';
import NewSurvey from './newSurvey.jsx';
import Navbar from './navbar.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mySurveys : [
        {
         title: 'what do you like?',
         pointValue: 35,
         description: 'Sample survey to handle gathering basic user info',
         questions: [{
         title: 'What is your favorite color'
         }, {
         title: 'What is your favorite sport?'
         }]
       }
      ],
      points : 0,
      editMode: false
    }
  }

  toggleEditMode(){
    var toggleEdit;
    let currentState = this.state
    if (currentState.editMode == false){
       toggleEdit = true;
    }else{
       toggleEdit = false;
    }
    this.setState({mySurveys: currentState.mySurveys, points: currentState.points, editMode:toggleEdit})
  }


   render(){
     return(<div>
                  <Navbar/>
                  <div className="container">
                    <div className="row">
                      <div className="col s8 offset-s2">
                        <NewSurvey app={this} />
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                      <div className="center-text">
                          <h3> My Surveys </h3>
                          <a className="btn-floating btn-large red" onClick={this.toggleEditMode.bind(this)}>Edit</a>
                      </div>
                          <Surveys app={this}  surveys={this.state.mySurveys}/>
                    </div>
                 </div>
             </div>)

   }
}
