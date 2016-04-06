import React from 'react'

export default class NewSurvey extends React.Component{
    constructor(props){
      super(props)
      this.state = {counter: 1}
    }

    submitNewSurvey(e){
      e.preventDefault
      let valid = this.validateInputs(this.refs)
      debugger;
      if(!valid){ alert('Please complete the form correctly before submiting'); return }
      let newSurvey = this.createNewSurveyObject(this.refs)
      let currentSurveys = this.props.app.state.mySurveys
      this.props.app.setState({mySurveys: currentSurveys.concat(newSurvey), pointValue:0})
    }

    addQuestionInput(e){
      e.preventDefault
      this.setState({counter: this.state.counter += 1}) ;
    }

    createNewSurveyObject(inputs){
      let title = inputs.surveyTitle.value
      let pointValue = inputs.pointValue.value
      let description = inputs.description.value
      let questionArray = this.pullQuestions();
      let questions = questionArray.map((question)=> {return {title: question}} )
      return {title, pointValue, description, questions}
    }

    validateInputs(inputs){
          for(let i in inputs){
            if(!inputs[i].checkValidity()){ return false; }
          }
          return true
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
          rows.push( <div key={i}>{i+1}: <input type="text" ref={"question"+i} pattern={".{2,100}"} placeholder="Question" title="Must be between 2 and 500 Characters" required={true}/> </div>)
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
                  Questions: {rows.map((i)=> i)}   <a href="#" onClick={this.addQuestionInput.bind(this)} >+</a>
                </div>
                  <button onClick={ this.submitNewSurvey.bind(this,this.props)}>Submit</button>
                </form>
             </div>)
   }
}
