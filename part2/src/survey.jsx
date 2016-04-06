import React from 'react'
//Displays a survey
export default class Suvery extends React.Component{
    constructor(props){
      super(props)
    }

   render(){
         let survey = this.props.survey;
         return (<div className="card flow-text">
                    <div className="card-content ">
                     <h4>Title: {survey.title}</h4>
                     <h5>Point Value: {survey.pointValue}</h5>
                     <h5>Description: {survey.description}</h5>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content">
                     <h4>Questions:</h4>
                     {survey.questions.map((q)=><li key={survey.questions.indexOf(q)}>{q.title}</li>)}
                    </div>
                </div>)
       }
    }
