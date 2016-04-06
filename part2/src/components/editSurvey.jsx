import React from 'react'

export default class EditSuvery extends React.Component{
  constructor(props){
    super(props)
  }

   render(){
     let survey = this.props.survey;
     return (<div className="card flow-text">
                  <div className="card-content ">
                       <h4>Title: <input type="text" ref="title" defaultValue={survey.title}/> </h4>
                       <h5>Point Value: <input type="text" ref="pointValue" defaultValue={survey.pointValue}/></h5>
                       <h5>Description: <input type="text" ref="description" defaultValue={survey.description}/></h5>
                   </div>
                  <div className="divider"></div>
                  <div className="card-content">
                 <h4>Questions:</h4>
                 {survey.questions.map((q)=><li key={survey.questions.indexOf(q)}><input type="text" ref={'question'+survey.questions.indexOf(q)} defaultValue={q.title}/></li>)}
                 </div>
            </div>)
   }
}
