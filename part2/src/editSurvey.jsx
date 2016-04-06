import React from 'react'

export default class EditSuvery extends React.Component{
  constructor(props){
    super(props)
  }

   render(){
     let survey = this.props.survey;
     return (<div>
                 <h1>Title: <input type="text" ref="title" defaultValue={survey.title}/> </h1>
                 <h2>Point Value: <input type="text" ref="pointValue" defaultValue={survey.pointValue}/></h2>
                 <h3>Description: <input type="text" ref="description" defaultValue={survey.description}/></h3>
                 <h3>Questions:</h3>
                 {survey.questions.map((q)=><li key={survey.questions.indexOf(q)}><input type="text" ref={'question'+survey.questions.indexOf(q)} defaultValue={q.title}/></li>)}
            </div>)
   }
}
