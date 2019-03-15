import React, { Component } from 'react';
import { withScorm } from 'react-scorm-provider';

class SCORMComp extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.sco);
    this.scorm = this.props.sco;
    console.log("suspend data: ");
    console.log(this.scorm.suspendData);
  }

  setSCORMparam = (key, val) => {
    console.log("set para "+ key+ " val: "+val);
  
    console.log("success: ")
    console.log(this.scorm.set);
    var success = this.scorm.set(key, val);
    console.log(success);
  }

  getSCORMparam = (key) => {
    console.log(this.scorm.get(key));
    return this.scorm.get(key);
  }

  setCourseStatus = (status) => {
    const validStatus = ["passed", "completed", "failed", "incomplete", "browsed", "not attempted"];
    if(validStatus.includes(status)){
      this.scorm.setStatus(status);
    }
    this.scorm.save();
  } 

  render() {
    return (
      <div>
        <p>Status: {this.getSCORMparam('cmi.completion_status')} </p>
        <p>Scorm version: {this.props.sco.scormVersion} </p>
        <p>API connected: {this.props.sco.apiConnected} </p>
        <p> score scaled: {this.getSCORMparam('cmi.score.max')}</p>
        <p><button onClick={() => this.setSCORMparam("cmi.completion_status", "completed")}>Set Course Completed</button></p>
        <p><button onClick={() => this.setSCORMparam('cmi.score.max', 100)}>Set SCORM PARA</button></p>
      </div>
    );
  }
};

const SCORM = withScorm()(SCORMComp);

export default SCORM;