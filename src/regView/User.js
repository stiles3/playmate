import React, { Component } from 'react'
import EditProfile from '../regView/EditProfile'
import Profile from './Profile'
//import MainPage from '../chatBox/MainPage';
//import Layout from './Layout';
//import Factories from '../chatBox/Factories'

export default class User extends Component {
  constructor(props){
    super(props)
    this.state={
      step:1,
      slideValue:0,
      userName:'',
      firstName:'',
      lastName:'',
      description:'',
      aGe:'18',
      ethniCity:'American Indian or Alaska Native',
      heiGht:'160',
      gender:'male',
      bodyType:'slim',
      diet:false,
      drink:false,
      drugs:false,
      smoke:false,
      genDER:'female',
      philosophy:false, 
      photography:false,            
      soccer:false,
      pop:false,          
      rock_n_Roll:false,
      afroBeats:false,
      indoorgames:false,    
      hookup:false,
      dating:false,
      escort:false,                    
      swimming:false,
      gymnastics:false,
      dogs:false,  
      cats:false,
      birds:false,
      rabbits:false,                       
      movies:false,
      sightSeeing:false,              
      athletics:false,
      health:false,                       
      technology:false,
    }
  }
  nextStep = () => {
    const {step} = this.state
    this.setState({step : step + 1});

  }

  handleChanged = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

    handledChange = input => e => {
    console.log(e.target.value)
    this.setState({ [input]: e.target.value});
  };
  
  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleSelect = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSlide = (event, slideValue) => {
    this.setState({ slideValue });
  };
  
  render() {
    const AGE = [
      { value:'18',
        label:'18'
      },
      { value:'19',
      label:'19'
      },
      { value:'20',
      label:'20'
      },
      { value:'21',
      label:'21'
      },
      { value:'22',
      label:'22'
      },
      { value:'23',
      label:'23'
      },
      { value:'24',
      label:'24'
      },
      { value:'25',
      label:'25'
      },
      { value:'26',
      label:'26'
      },
      { value:'27',
      label:'27'
      },
      { value:'28',
      label:'28'
      },
      { value:'29',
      label:'29'
      },
      { value:'30',
      label:'30'
      },
      { value:'31',
        label:'31'
      },
      { value:'32',
        label:'32'
      },
      { value:'33',
        label:'33'
      },
      { value:'34',
      label:'34'
      },
      { value:'35',
        label:'35'
      },
      { value:'36',
        label:'36'
      },
      { value:'37',
        label:'37'
      },
      { value:'38',
        label:'38'
      },
      { value:'39',
        label:'39'
      },
      { value:'40',
        label:'40'
      },
      { value:'41',
        label:'41'
      },
      { value:'42',
        label:'42'
      },
      { value:'43',
        label:'43'
      },
      { value:'44',
        label:'44'
      },
      { value:'45',
        label:'45'
      },
      { value:'46',
        label:'46'
      },
      { value:'47',
        label:'47'
      },
      { value:'48',
        label:'48'
      },
      { value:'49',
        label:'49'
      },
      { value:'50',
        label:'50'
      },
 
 ]
    const ETHNICITY=[
      {
           value:"American Indian or Alaska Native", label:"American Indian or Alaska Native"
      },
      {
        value:"Asian",label:"Asian"
      },
      {
       value:"Black or African American",label:"Black or African American"
      },
      {
       value:"Hispanic or Latino",label:"Hispanic or Latino"
      },
     
      {
       value:"Native Hawaiian or Other Pacific Islanders",label:"Native Hawaiian or Other Pacific Islanders"
      },
      {
       value:"White",label:"White"
      }
   ]
   const HEIGHT=[
    {
      value:"160",
      label:"160"
    },
    {
      value:"161",
      label:"161"
    },
    {
      value:"162",
      label:"162"
    },
    {
      value:"163",
      label:"163"
    },
    {
      value:"164",
      label:"164"
    },
    {
      value:"165",
      label:"165"
    },
    {
      value:"166",
      label:"166"
    },
    {
      value:"167",
      label:"167"
    },
    {
      value:"168",
      label:"168"
    },
    {
      value:"169",
      label:"169"
    },
    {
      value:"170",
      label:"170"
    },
    {
      value:"171",
      label:"171"
    },
    {
      value:"172",
      label:"172"
    },
    {
      value:"173",
      label:"173"
    },
    {
      value:"174",
      label:"174"
    },
    {
      value:"175",
      label:"175"
    },
    {
      value:"176",
      label:"176"
    },
    {
      value:"177",
      label:"177"
    },
    {
      value:"178",
      label:"178"
    },
    {
      value:"179",
      label:"179"
    },
    {
      value:"180",
      label:"180"
    },
    {
      value:"181",
      label:"181"
    },
    {
      value:"182",
      label:"182"
    },
    {
      value:"183",
      label:"183"
    },
    {
      value:"184",
      label:"184"
    },
    {
      value:"185",
      label:"185"
    },
    {
      value:"186",
      label:"186"
    },
    {
      value:"187",
      label:"187"
    },
  ]

  const GENDER= [
    {
      value:"male",
      label:"Male"
    },
    {
     value:"female",
     label:"Female"
   },
 ]
 const BODYTYPE=[
   {
   value:"slim",
   label:"Slim"
   },
   {
     value:"normal",
     label:"Normal"
   },
   {
     value:"muscular",
     label:"Muscular"
   },
   {
     value:"slim",
     label:"Slim"
   },
 ]
 const GendeR= [
   {
     value:"male",
     label:"Male"
   },
   {
    value:"female",
    label:"Female"
  },
  {
   value:"male & female",
   label:"Male & Female"
 },
  
 ]

    const {step} = this.state;
    const {id,userName,firstName,lastName,description,aGe,ethniCity,heiGht,gender,bodyType,diet,drugs,drink,smoke,slideValue,genDER,philosophy,photography,pop,sightSeeing,
    soccer,swimming,cats,dating,dogs,rabbits,rock_n_Roll,gymnastics,movies,health,hookup,technology,escort,indoorgames,afroBeats,athletics,birds} = this.state;
    const values = {id,userName,firstName,lastName,description,aGe,ethniCity,heiGht,gender,bodyType,diet,drugs,drink,smoke,slideValue,genDER,philosophy,photography,pop,sightSeeing,
      soccer,swimming,cats,dating,dogs,rabbits,rock_n_Roll,gymnastics,movies,health,hookup,technology,escort,indoorgames,afroBeats,athletics,birds};
  const select = {ETHNICITY,AGE,GendeR,BODYTYPE,HEIGHT,GENDER}
 switch(step){ 
    case 1:
      return(
        <EditProfile
          values={values}
          select={select}
          handledChange={this.handledChange}
          nextStep={this.nextStep}
          handleCheck={this.handleCheck}
          handleSelect={this.handleSelect}
          handleSlide={this.handleSlide}
          handleChanged={this.handleChanged}
        />
       )
    case 2:
      return(
        <Profile
        values={values}
        nextStep={this.nextStep}
        />
      )
   /* case 3:
     return(
       <Layout
       values={values}
       />
     ) */

  }

  }  
 }

