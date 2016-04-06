import React from 'react'

export default class Suvery extends React.Component{
    constructor(props){
      super(props)
    }

   render(){
         let survey = this.props.survey;
         return (<div>
                     <h1>Title: {survey.title}</h1>
                     <h2>Point Value: {survey.pointValue}</h2>
                     <h3>Description: {survey.description}</h3>
                     <h3>Questions:</h3>
                     {survey.questions.map((q)=><li key={survey.questions.indexOf(q)}>{q.title}</li>)}
                </div>)
       }
    }
