import React from 'react'
import Survey from './survey.jsx'
import EditSurvey from './EditSurvey.jsx'

export default class Surveys extends React.Component{
    constructor(props){
      super(props)
    }

   render(){
     let editMode = this.props.app.state.editMode;
     return(<div>
            <button>EditMode</button>

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
