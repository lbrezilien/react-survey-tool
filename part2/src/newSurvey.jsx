import React from 'react'

export default class NewSurvey extends React.Component{
    constructor(props){
      super(props)
      this.state = {counter: 1}
    }

    submitNewSurvey(){
      let title = this.refs.surveyTitle.value
      let pointValue = this.refs.pointValue.value
      let description = this.refs.description.value
      let questionArray = this.pullQuestions();
      let questions = questionArray.map((question)=> {return {title: question}} )
      let newSurvey = {title, pointValue, description, questions}
      let currentSurveys = this.props.app.state.mySurveys
      this.props.app.setState({mySurveys: currentSurveys.concat(newSurvey), pointValue:0})
    }

    addQuestionInput(){
      this.setState({counter: this.state.counter += 1}) ;
    }

    pullQuestions(){
        let questions = []
        for (var ref in this.refs) {
            if (ref.indexOf('question') >= 0){
               questions.push(this.refs[ref].value)
            }
        }
        return questions
    }

    render(){
        let rows = []
        for(let i=0; i < this.state.counter; i++){
          rows.push( <div key={i}>{i+1}: <input type="text" ref={"question"+i} placeholder="Question"/> </div>)
        }

       return(<div>
                  Title: <input type="text" ref="surveyTitle" placeholder="Title"/>
                  Point Value: <input type="text" ref="pointValue" placeholder="Point Value"/>
                  Description: <input type="text" ref="description" placeholder="Description"/>
                  Questions: {rows.map((i)=> i)}   <button onClick={this.addQuestionInput.bind(this)}>+</button>
                  <button onClick={this.submitNewSurvey.bind(this,this.props)}>Submit</button>
             </div>)
   }
}
