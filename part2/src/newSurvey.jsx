import React from 'react'

export default class NewSurvey extends React.Component{
    constructor(props){
      super(props)
      this.state = {counter: 1}
    }

    submitNewSurvey(e){
      e.preventDefault
      let title = this.refs.surveyTitle.value
      let pointValue = this.refs.pointValue.value
      let description = this.refs.description.value
      let questionArray = this.pullQuestions();
      let questions = questionArray.map((question)=> {return {title: question}} )
      let newSurvey = {title, pointValue, description, questions}
      let currentSurveys = this.props.app.state.mySurveys
      this.props.app.setState({mySurveys: currentSurveys.concat(newSurvey), pointValue:0})
    }

    addQuestionInput(e){
      e.preventDefault
      this.setState({counter: this.state.counter += 1}) ;
    }

    validateTitle(input){
      if (input.value.length() < validAmount){
        return
      }
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
                 <form>
                  Title: <input type="text" ref="surveyTitle"  placeholder="Title" required={true} pattern={".{2,100}"} title="Must be between 5 and 100 Characters"/>
                <div>
                  Point Value: <input type="number" ref="pointValue" placeholder="Point Value" required={true} min="0"/>
                </div>
                <div>
                  Description: <input type="textarea" ref="description" placeholder="Description" required={true}  pattern={".{2,500}"} title="Must be between 2 and 500 Characters"/>
                </div>
                <div>
                  Questions: {rows.map((i)=> i)}   <a href="#" onClick={this.addQuestionInput.bind(this)}>+</a>
                </div>
                  <button onClick={ this.submitNewSurvey.bind(this,this.props)}>Submit</button>
                </form>
             </div>)
   }
}
