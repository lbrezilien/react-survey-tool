'use strict'
import React from 'react';
import Survey from './surveys.jsx';
import NewSurvey from './newSurvey.jsx';

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
      points : 0
    }
  }


   render(){
     return(<div>
           <NewSurvey app={this} />
           <Survey surveys={this.state.mySurveys}/>
           </div>)

   }
}
