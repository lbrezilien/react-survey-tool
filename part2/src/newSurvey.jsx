import React from 'react'

export default class NewSurvey extends React.Component{
    constructor(props){
      super(props)
      this.state = {counter: 1}
    }

    submitNewSurvey(e){
      e.preventDefault
      let valid = this.validateInputs(this.refs)
      if(!valid){ alert('Please complete the form correctly before submiting'); return }
      //this is the part of the code that creates the survey object as per the instructions
      let newSurvey = this.createNewSurveyObject(this.refs)
      let currentSurveys = this.props.app.state.mySurveys
      this.props.app.setState({mySurveys: currentSurveys.concat(newSurvey), pointValue:0})
      this.clearFormInputs(this.refs)
      alert('Your survey has been created! Check it out below');
    }

    addQuestionInput(e){
      e.preventDefault
      this.setState({counter: this.state.counter += 1}) ;
    }

    clearFormInputs(inputs){
      for(var i in inputs){
          console.log(`use to be ${inputs[i]}`)
          inputs[i].value = ""
          console.log(`now ${inputs[i]}`)
      }

    }

    createNewSurveyObject(inputs){
      //This returns the Survey JSON Object
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
          rows.push( <div key={i}> <input type="text" ref={"question"+i} pattern={".{2,100}"} placeholder={`Question ${i+1}`} title="Must be between 2 and 500 Characters" required={true}/> </div>)
        }

       return(<div>
                 <form>
                  Title: <input type="text" ref="surveyTitle"  required={true} pattern={".{2,100}"} title="Must be between 5 and 100 Characters"/>

                  Point Value: <input type="number" ref="pointValue"  required={true} min="0"/>

                  Description: <textarea type="text-area" ref="description"  required={true}  pattern={".{2,500}"} title="Must be between 2 and 500 Characters"/>

                  Questions: {rows.map((i)=> i)}
                  <div className="col s3 ">
                    <a href="#" className="btn-floating btn-large blue" onClick={this.addQuestionInput.bind(this)} >+</a>
                  </div>
                  <div className="col s3 offset-s6">
                      <button className="waves-effect waves-light btn purple" onClick={ this.submitNewSurvey.bind(this,this.props)}>Submit</button>
                  </div>
                </form>
             </div>)
   }
}
