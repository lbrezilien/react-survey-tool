import React from 'react'

export default class Survey extends React.Component{
  constructor(props){
    super(props)
  }

   render(){
     return(<div>
           {this.props.surveys.map((survey)=>{
             return (<div key={this.props.surveys.indexOf(survey)}>
             <h1>{survey.title}</h1>
             <h2>Point Value: {survey.pointValue}</h2>
             <h3>Description: {survey.description}</h3>
             <h3>Questions:</h3>
             {survey.questions.map((q)=><li key={survey.questions.indexOf(q)}>{q.title}</li>)}
             </div>)

           })}
           </div>)

   }
}
