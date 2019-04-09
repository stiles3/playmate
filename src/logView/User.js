import React, { Component } from 'react'
import AvaSelect from '../regView/AvaSelect'
import PersonalProfile from '../regView/PersonalProfile'
import PrefInterest from '../regView/PrefInterest'


export class User extends Component {
  state={
      step: 1,
      regStep:1,
      isShowing:'false'
        
    }

    validatePage=() => {
      const {step}= this.state;
      this.setState({
        step:step+1
      })
    }
     nextRegStep = () => {
       const {regStep} = this.state;
       this.setState({
           regStep: regStep + 1
       }) 
     }
     prevRegStep = () => {
      const {regStep} = this.state;
      this.setState({
          regStep: regStep - 1
      }) 
    }
    //open modalpage
    openModalHandler = () => {
      this.setState({
        isShowing: true
      });
    }
     //close modalpage
    closeModalHandler = () => {
      this.setState({
        isShowing: false
      });
    }
  //Next Page of Registration
  nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step  + 1
        });
    }
  //Previous Page of Registration  
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step  - 1
        });
    }
    handleSelectChange= e => {
      this.setState({selectedView: e.target.value})
    }
 //change handler of input   
    handleChange = input => e => {
        this.setState({[input]: e.target.value}); 
    }
    

    submituserRegistrationForm(e) {
      const {phoneNumber}=this.phoneNumber;
      e.preventDefault();
      if (this.validateForm()) {
          phoneNumber = "";
          this.setState({phoneNumber:phoneNumber});
          alert("Form submitted");
      }
    }
      validateForm() {
        const {phoneNumber}=this.phoneNumber;
        let errors = {};
        let formIsValid = true;
  
        if (!phoneNumber["phoneNumber"]) {
          formIsValid = false;
          errors["phoneNumber"] = "*Please enter your Phone Number.";
        }

    }
    
  render() {
      const {step,regStep} = this.state;
      const {phoneNumber,isShowing}=this.state;
      const values = {phoneNumber,isShowing}
     
      switch(regStep){
        case 1:
          return(
        <AvaSelect
          nextRegStep={this.nextRegStep}
          />
          );
          case 2:
          return(
        <PersonalProfile
          nextRegStep={this.nextRegStep}
          prevRegStep={this.prevRegStep}
          />
          );
          case 3:
          return(
        <PrefInterest
          nextRegStep={this.nextRegStep}
          prevRegStep={this.prevRegStep}
          />
          );
      };
    
     /*  switch (step) {
          case 1:
          return(
              <UserLogin
              nextStep={this.nextStep}
              submituserRegistrationForm={this.submituserRegistrationForm}
              validateForm={this.validateForm}
              handleChange={this.handleChange}
              closeModalHandler={this.closeModalHandler}
              openModalHandler={this.openModalHandler}
              values={values}/>
          );
          case 3:
          return(
            <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}/>
        );  
          case 2:
          return(
          <Validation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}/>
          );
          case 5:
          return(
            <Success
            nextStep={this.nextStep}
           />
        ); 
          case 6:
          return(
            <ProfileFirst
            nextStep={this.nextStep}
            values={values}
           />
        );    
         
      } */
      
  }
}

export default User;
