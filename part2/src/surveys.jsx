import React from 'react'
import Survey from './survey.jsx'
import EditSurvey from './EditSurvey.jsx'

export default class Surveys extends React.Component{
    constructor(props){
      super(props)
    }

  toggleEditMode(){
    var toggleEdit;
    let currentState = this.props.app.state

    if (currentState.editMode == false){
       toggleEdit = true;
    }else{
       toggleEdit = false;
    }
    this.props.app.setState({mySurveys: currentState.mySurveys, points: currentState.points, editMode:toggleEdit})
  }

   render(){
     let editMode = this.props.app.state.editMode;
     return(<div>
            <button onClick={this.toggleEditMode.bind(this)}>EditMode</button>

           {this.props.surveys.map((survey)=>{
             return (<div key={this.props.surveys.indexOf(survey)}>
                        <div className={`hideInfo-${editMode}`}>
                           <Survey survey={survey}/>
                        </div>
                        <div className={`showEdit-${editMode}`}>
                           <EditSurvey survey={survey}/>
                        </div>
                    </div>)
           })}
           </div>)
   }
}
