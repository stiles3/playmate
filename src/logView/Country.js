import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText'
//import EditProfile from '../regView/EditProfile'
//import {FormErrors} from './FormErrors'


export class Country extends Component {
  state = {
    country: '',
    code:'+229',
    phone:'',
    open: false,
    open1: false,
    phoneNumber:{code:'',phone:''},
   // formErrors: {phone: ''},
   //   phoneValid: false,
    //  formValid: false
    }
    
  handleChange = name => event => {
    console.log(event.target.value)
    this.setState({
      [name]: event.target.value
    });
  };
  // validateField(fieldName, value) {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let phoneValid = this.state.emailValid;

  //   switch(fieldName) {
  //     case 'phone':
  //       phoneValid =value.length >= 6;
  //       fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState({formErrors: fieldValidationErrors,
  //     phoneValidValid: phoneValid,
  //    }, this.validateForm);
  // }

  // validateForm() {
  //   this.setState({formValid: this.state.phoneValid });
  // }

  // errorClass(error) {
  //   return(error.length === 0 ? '' : 'has-error');
  // }

  // isPhoneValid=(phone,code) => {
  //  if(code == "+234"){
  //   var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  //  }
  // }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleClickOpen1 = () => {
    this.setState({ open1: true });
    this.setState({open: false})
  };
  handleClose1 = () => {
    this.setState({ open1: false });
  };
  render() {
    let {code,phone,phoneNumber} = this.state
  
    
    const COUNTRIES = [
   /*    {
        country:"Afghanistan",
        twoLetter:"af",
         code: "+93"
      },
      {
        country:"Albania",
        twoLetter:"al",
        code: "+355"
      },
      {
        country:"Algeria ",
        twoLetter:"dz",
        code:"+213"
      },
      {
        country: "American Samoa",
        twoLetter: "as",
        code:"+1684"
      },
      {
        country: "Andorra",
        twoLetter: "ad",
        code:"+376"
      },
      {
        country:"Angola",
        twoLetter: "ao",
        code:"+244"
      },
      {
        country:"Anguilla",
        twoLetter:"ai",
        code:"+1264"
      },
      {
        country: "Antigua and Barbuda",
        twoLetter:"ag",
        code: "+1268"
      },
      {
        country: "Argentina",
        twoLetter: "ar",
        code: "+54"
      },
      {
        country:"Armenia",
        twoLetter: "am",
        code:"+374"
      },
      {
        country: "Aruba",
        twoLetter:"aw",
        code:"+297"
      },
      {
        country: "Australia",
        twoLetter: "au",
        code:"+61",
        
      },
      {
        country: "Austria",
        twoLetter:  "at",
        code:"+43"
      },
      {
        country:"Azerbaijan",
        twoLetter: "az",
        code: "+994"
      },
      {
        country: "Bahamas",
        twoLetter: "bs",
        code: "+1242"
      },
      {
        country: "Bahrain",
        twoLetter: "bh",
        code: "+973"
      },
      {
        country: "Bangladesh",
        twoLetter: "bd",
        code: "+880"
      },
      {
        country: "Barbados",
        twoLetter: "bb",
        code:  "+1246"
      },
      {
        country:"Belarus",
        twoLetter: "by",
        code:  "+375"
      },
      {
        country:"Belgium",
        twoLetter: "be",
        code: "+32",
        
      },
      {
        country: "Belize",
        twoLetter: "bz",
        code:  "+501"
      }, */
      {
        country: "Benin",
        twoLetter:  "bj",
        code:  "+229"
      },
     /*  {
        country: "Bermuda",
        twoLetter: "bm",
        code: "+1441"
      },
      {
        country: "Bhutan",
        twoLetter:  "bt",
        code: "+975"
      },
      {
        country: "Bolivia",
        twoLetter: "bo",
        code: "+591"
      },
      {
        country: "Bosnia and Herzegovina",
        twoLetter: "ba",
        code: "+387"
      },
      {
        country: "Botswana",
        twoLetter: "bw",
        code: "+267"
      },
      {
        country: "Brazil",
        twoLetter: "br",
        code:"+55"
      },
      {
        country: "British Indian Ocean Territory",
        twoLetter:  "io",
        code:"+246"
      },
      {
        country:"British Virgin Islands",
        twoLetter: "vg",
        code: "+1284"
      },
      {
        country: "Brunei",
        twoLetter: "bn",
        code: "+673"
      },
      {
        country:"Bulgaria",
        twoLetter:  "bg",
        code: "+359"
      }, */
      {
        country: "Burkina Faso",
        twoLetter: "bf",
        code:"+226"
      },
      /* {
        country: "Burundi",
        twoLetter: "bi",
        code:"+257"
      },
      {
        country: "Cambodia",
        twoLetter:  "kh",
        code:"+855"
      },
      {
        country:"Cameroon",
        twoLetter: "cm",
        code:"+237"
      },
      {
        country: "Canada",
        twoLetter:  "ca",
        code:"+1",
       
      }, */
      {
        country: "Cape Verde",
        twoLetter: "cv",
        code:"+238"
      },
      /* {
        country: "Caribbean Netherlands",
        twoLetter: "bq",
        code:"+599",
        
      },
      {
        country: "Cayman Islands",
        twoLetter:  "ky",
        code: "+1345"
      },
      {
        country: "Central African Republic",
        twoLetter: "cf",
        code: "+236"
      },
      {
        country:"Chad",
        twoLetter: "td",
        code:"+235"
      },
      {
        country:"Chile",
        twoLetter: "cl",
        code:"+56"
      },
      {
        country: "China",
        twoLetter: "cn",
        code: "+86",
        
      },
      {
        country:"Colombia",
        twoLetter: "co",
        code: "+57"
      },
      {
        country:"Comoros",
        twoLetter: "km",
        code:"+269"
      },
      {
        country: "Congo",
        twoLetter: "cd",
        code:"+243"
      },
      {
        country:"Congo",
        twoLetter: "cg",
        code:"+242"
      },
      {
        country:"Cook Islands",
        twoLetter: "ck",
        code: "+682"
      },
      {
        country:"Costa Rica",
        twoLetter: "cr",
        code:"+506",
        
      },*/
      {
        country:"Côte d’Ivoire",
        twoLetter: "ci",
        code: "+225"
      },
      /*
      {
        country: "Croatia",
        twoLetter: "hr",
        code:"+385"
      },
      {
        country: "Cuba",
        twoLetter:"cu",
        code:"+53"
      },
      {
        country: "Curaçao",
        twoLetter: "cw",
        code:"+599",
       
      },
      {
        country: "Cyprus",
        twoLetter:  "cy",
        code: "+357"
      },
      {
        country: "Czech Republic",
        twoLetter:  "cz",
        code: "+420"
      },
      {
        country: "Denmark",
        twoLetter: "dk",
        code:"+45",
        
      },
      {
        country: "Djibouti",
        twoLetter:   "dj",
        code:"+253"
      },
      {
        country: "Dominica",
        twoLetter: "dm",
        code:"+1767"
      },
      {
        country: "Dominican Republic",
        twoLetter: "do",
        code:"+1",
      },
      {
        country: "Ecuador",
        twoLetter: "ec",
        code: "+593"
      },
      {
        country:"Egypt",
        twoLetter: "eg",
        code: "+20"
      },
      {
        country: "El Salvador",
        twoLetter:"sv",
        code: "+503",
      },
      {
        country: "Equatorial Guinea",
        twoLetter:  "gq",
        code:"+240"
      },
      {
        country: "Eritrea",
        twoLetter:   "er",
        code: "+291"
      },
      {
        country: "Estonia",
        twoLetter:  "ee",
        code: "+372"
      },
      {
        country: "Ethiopia",
        twoLetter: "et",
        code: "+251"
      },
      {
        country: "Falkland Islands",
        twoLetter: "fk",
        code: "+500"
      },
      {
        country: "Faroe Islands",
        twoLetter: "fo",
        code:"+298"
      },
      {
        country: "Fiji",
        twoLetter: "fj",
        code:"+679"
      },
      {
        country: "Finland",
        twoLetter: "fi",
        code:"+358",
        
      },
      {
        country: "France",
        twoLetter:  "fr",
        code:"+33",
       
      },
      {
        country:  "French Guiana",
        twoLetter: "gf",
        code: "+594"
      },
      {
        country:  "French Polynesia",
        twoLetter: "pf",
        code: "+689"
      },
      {
        country:  "Gabon",
        twoLetter: "ga",
        code:  "+241"
      }, */
      {
        country:  "Gambia",
        twoLetter: "gm",
        code: "+220"
      },
     /*  {
        country: "Georgia",
        twoLetter: "ge",
        code:  "+995"
      },
      {
        country: "Germany",
        twoLetter:  "de",
        code: "+49",
        
      }, */
      {
        country: "Ghana",
        twoLetter:  "gh",
        code:  "+233"
      },
     /*  {
        country: "Gibraltar",
        twoLetter:  "gi",
        code: "+350"
      },
      {
        country:"Greece",
        twoLetter:"gr",
        code: "+30"
      },
      {
        country: "Greenland",
        twoLetter: "gl",
        code: "+299"
      },
      {
        country: "Grenada",
        twoLetter: "gd",
        code: "+1473"
      },
      {
        country:"Guadeloupe",
        twoLetter:"gp",
        code: "+590",
        
      },
      {
        country: "Guam",
        twoLetter: "gu",
        code: "+1671"
      },
      {
        country: "Guatemala",
        twoLetter:  "gt",
        code: "+502",
       
      }, */
      {
        country:  "Guinea",
        twoLetter:  "gn",
        code:  "+224"
      },
      {
        country: "Guinea-Bissau",
        twoLetter: "gw",
        code:"+245"
      },
      /* {
        country: "Guyana",
        twoLetter:  "gy",
        code: "+592"
      },
      {
        country: "Haiti",
        twoLetter: "ht",
        code: "+509",
       
      },
      {
        country: "Honduras",
        twoLetter:  "hn",
        code: "+504"
      },
      {
        country: "Hong Kong",
        twoLetter:"hk",
        code: "+852",
      
      },
      {
        country:  "Hungary",
        twoLetter: "hu",
        code: "+36"
      },
      {
        country:  "Iceland",
        twoLetter: "is",
        code: "+354",
        
      },
      {
        country:  "India",
        twoLetter:"in",
        code: "+91",
       
      },
      {
        country:  "Indonesia",
        twoLetter:  "id",
        code:  "+62"
      },
      {
        country: "Iran",
        twoLetter: "ir",
        code:  "+98"
      },
      {
        country:"Iraq",
        twoLetter:"iq",
        code:  "+964"
      },
      {
        country:"Ireland",
        twoLetter:  "ie",
        code:  "+353",
       
      },
      {
        country: "Israel",
        twoLetter: "il",
        code:  "+972"
      },
      {
        country:"Italy",
        twoLetter: "it",
        code:  "+39",
      },
      {
        country: "Jamaica",
        twoLetter: "jm",
        code: "+1876"
      },
      {
        country: "Japan",
        twoLetter: "jp",
        code:"+81", 
          
      },
      {
        country: "Jordan",
        twoLetter: "jo",
        code: "+962"
      },
      {
        country: "Kazakhstan",
        twoLetter: "kz",
        code: "+7",
       
        
      },
      {
        country:"Kenya",
        twoLetter: "ke",
        code: "+254"
      },
      {
        country: "Kiribati",
        twoLetter: "ki",
        code:  "+686"
      },
      {
        country: "Kuwait",
        twoLetter:"kw",
        code: "+965"
      },
      {
        country:"Kyrgyzstan",
        twoLetter: "kg",
        code: "+996"
      },
      {
        country: "Laos",
        twoLetter:"la",
        code:  "+856"
      },
      {
        country: "Latvia",
        twoLetter:"lv",
        code:  "+371"
      },
      {
        country: "Lebanon",
        twoLetter: "lb",
        code: "+961"
      },
      { country: "Lesotho",
        twoLetter: "ls",
        code: "+266"
      }, */
      {
        country: "Liberia",
        twoLetter:"lr",
        code:  "+231"
      },
      /* {
        country: "Libya",
        twoLetter:  "ly",
        code: "+218"
      },
      {
        country: "Liechtenstein",
        twoLetter: "li",
        code: "+423"
      },
      {
        country:  "Lithuania",
        twoLetter: "lt",
        code: "+370"
      },
      {
        country:  "Luxembourg",
        twoLetter:"lu",
        code: "+352"
      },
      {
        country: "Macau",
        twoLetter:"mo",
        code: "+853"
      },
      {
        country: "Macedonia",
        twoLetter: "mk",
        code:  "+389"
      },
      {
        country: "Madagascar",
        twoLetter:"mg",
        code:  "+261"
      },
      {
        country: "Malawi",
        twoLetter: "mw",
        code: "+265"
      },
      {
        country:  "Malaysia",
        twoLetter:"my",
        code:  "+60",
       
      },
      {
        country: "Maldives",
        twoLetter: "mv",
        code: "+960"
      }, */
      {
        country: "Mali",
        twoLetter:"ml",
        code:  "+223"
      },
     /*  {
        country:  "Malta",
        twoLetter:"mt",
        code: "+356"
      },
      {
        country: "Marshall Islands",
        twoLetter: "mh",
        code: "+692"
      },
      {
        country: "Martinique",
        twoLetter: "mq",
        code: "+596"
      }, */
      {
        country: "Mauritania",
        twoLetter: "mr",
        code:   "+222"
      },
      /* {
        country: "Mauritius",
        twoLetter:"mu",
        code:   "+230"
      },
      {
        country: "Mexico",
        twoLetter:"mx",
        code:  "+52"
      },
      {
        country: "Micronesia",
        twoLetter:"fm",
        code:  "+691"
      },    
      {
        country: "Moldova",
        twoLetter: "md",
        code: "+373"
      },
      {
        country: "Monaco",
        twoLetter: "mc",
        code:  "+377"
      },
      {
        country: "Mongolia",
        twoLetter:"mn",
        code: "+976"
      },
      {
        country:  "Montenegro",
        twoLetter: "me",
        code:  "+382"
      },
      {
        country: "Montserrat",
        twoLetter: "ms",
        code:  "+1664"
      },
      {
        country: "Morocco",
        twoLetter: "ma",
        code:  "+212"
      },
      {
        country: "Mozambique",
        twoLetter:"mz",
        code:  "+258"
      },
      {
        country: "Myanmar",
        twoLetter: "mm",
        code: "+95"
      },
      {
        country: "Namibia",
        twoLetter: "na",
        code: "+264"
      },
      {
        country: "Nauru",
        twoLetter: "nr",
        code:  "+674"
      },
      {
        country: "Nepal",
        twoLetter:"np",
        code: "+977"
      },
      {
        country: "Netherlands",
        twoLetter: "nl",
        code:  "+31",
      
      },
      {
        country:  "New Caledonia",
        twoLetter:"nc",
        code: "+687"
      },
      {
        country: "New Zealand",
        twoLetter:  "nz",
        code:  "+64",
        
      },
      {
        country:  "Nicaragua",
        twoLetter:  "ni",
        code:  "+505"
      }, */
      {
        country: "Niger",
        twoLetter:"ne",
        code:  "+227"
      },
      {
        country:  "Nigeria",
        twoLetter: "ng",
        code:   "+234"
      },
      /* {
        country: "Niue",
        twoLetter: "nu",
        code:  "+683"
      },
      {
        country: "Norfolk Island",
        twoLetter: "nf",
        code:  "+672"
      },
      {
        country: "North Korea",
        twoLetter: "kp",
        code: "+850"
      },
      {
        country:  "Northern Mariana Islands",
        twoLetter: "mp",
        code:  "+1670"
      },
      {
        country: "Norway",
        twoLetter:"no",
        code:  "+47",
      },
      {
        country: "Oman",
        twoLetter: "om",
        code:  "+968"
      },
      {
        country:  "Pakistan",
        twoLetter: "pk",
        code:  "+92",
        
      },
      {
        country:  "Palau",
        twoLetter: "pw",
        code:  "+680"
      },
      {
        country: "Palestine",
        twoLetter: "ps",
        code:  "+970"
      },
      {
        country: "Panama",
        twoLetter: "pa",
        code:"+507"
      },
      {
        country: "Papua New Guinea",
        twoLetter: "pg",
        code:  "+675"
      },
      {
        country:  "Paraguay",
        twoLetter:   "py",
        code:"+595"
      },
      {
        country:  "Peru",
        twoLetter: "pe",
        code:  "+51"
      },
      {
        country:  "Philippines",
        twoLetter:"ph",
        code:  "+63",
      
      },
      {
        country: "Poland",
        twoLetter: "pl",
        code:  "+48",
       
      },
      {
        country:   "Portugal",
        twoLetter: "pt",
        code:"+351"
      },
      {
        country:"Puerto Rico",
        twoLetter:  "pr",
        code:   "+1",
      }, 
      {
        country:"Qatar",
        twoLetter:  "qa",
        code:"+974"
      },
      {
        country:"Réunion",
        twoLetter: "re",
        code:  "+262"
      },
      {
        country:"Romania",
        twoLetter:"ro",
        code:  "+40"
      },
      {
        country: "Russia",
        twoLetter: "ru",
        code:  "+7",
        
      },
      {
        country: "Rwanda",
        twoLetter:  "rw",
        code:  "+250"
      },
      {
        country:"Saint Barthélemy",
        twoLetter: "bl",
        code:  "+590",
      
      },
      {
        country: "Saint Helena",
        twoLetter:  "sh",
        code:  "+290"
      },
      {
        country: "Saint Kitts and Nevis",
        twoLetter: "kn",
        code: "+1869"
      },
      {
        country: "Saint Lucia",
        twoLetter: "lc",
        code:  "+1758"
      },
      {
        country:"Saint Martin",
        twoLetter: "mf",
        code:  "+590",
       
      },
      {
        country:"Saint Pierre and Miquelon",
        twoLetter:  "pm",
        code:  "+508"
      },
      {
        country: "Saint Vincent and the Grenadines",
        twoLetter:   "vc",
        code:  "+1784"
      },
      {
        country:"Samoa",
        twoLetter: "ws",
        code:  "+685"
      },
      {
        country:"San Marino",
        twoLetter:   "sm",
        code:   "+378"
      },
      {
        country:"São Tomé and Príncipe",
        twoLetter:   "st",
        code: "+239"
      },
      {
        country:"Saudi Arabia",
        twoLetter:  "sa",
        code:  "+966"
      }, */
      {
        country:"Senegal",
        twoLetter:  "sn",
        code:  "+221"
      },
     /*  {
        country: "Serbia",
        twoLetter:   "rs",
        code:  "+381"
      },
      {
        country: "Seychelles",
        twoLetter:   "sc",
        code:   "+248"
      }, */
      {
        country:"Sierra Leone",
        twoLetter:  "sl",
        code: "+232"
      },
    /*   {
        country: "Singapore",
        twoLetter: "sg",
        code:  "+65",
       
      },
      {
        country: "Sint Maarten",
        twoLetter: "sx",
        code:  "+1721"
      },
      {
        country:"Slovakia",
        twoLetter: "sk",
        code: "+421"
      },
      {
        country: "Slovenia",
        twoLetter:"si",
        code:  "+386"
      },
      {
        country:"Solomon Islands",
        twoLetter:  "sb",
        code:  "+677"
      },
      {
        country: "Somalia",
        twoLetter: "so",
        code: "+252"
      },
      {
        country:"South Africa",
        twoLetter:"za",
        code:  "+27"
      },
      {
        country:  "South Korea",
        twoLetter: "kr",
        code: "+82"
      },
      {
        country: "South Sudan",
        twoLetter: "ss",
        code:  "+211"
      },
      {
        country: "Spain",
        twoLetter: "es",
        code:  "+34",
      
      },
      {
        country:  "Sri Lanka",
        twoLetter: "lk",
        code: "+94"
      },
      {
        country:  "Sudan",
        twoLetter: "sd",
        code:  "+249"
      },
      {
        country: "Suriname",
        twoLetter: "sr",
        code:   "+597"
      },
      {
        country: "Swaziland",
        twoLetter:  "sz",
        code:  "+268"
      },
      {
        country:"Sweden",
        twoLetter:  "se",
        code:"+46",
       
      },
      {
        country: "Switzerland",
        twoLetter:  "ch",
        code:  "+41",
        
      },
      {
        country:"Syria",
        twoLetter:"sy",
        code:  "+963"
      },
      {
        country:"Taiwan",
        twoLetter: "tw",
        code:  "+886"
      },
      {
        country: "Tajikistan",
        twoLetter: "tj",
        code:  "+992"
      },
      {
        country:"Tanzania",
        twoLetter: "tz",
        code:  "+255"
      },
      {
        country: "Thailand",
        twoLetter:"th",
        code: "+66"
      },
      {
        country: "Timor-Leste",
        twoLetter: "tl",
        code: "+670"
      }, */
      {
        country: "Togo",
        twoLetter: "tg",
        code: "+228"
      },
     /*  {
        country:"Tokelau",
        twoLetter: "tk",
        code: "+690"
      },
      {
        country:"Tonga",
        twoLetter:  "to",
        code:   "+676"
      },
      {
        country:"Trinidad and Tobago",
        twoLetter:"tt",
        code:  "+1868"
      },
      {
        country: "Tunisia",
        twoLetter: "tn",
        code:"+216"
      },
      {
        country: "Turkey",
        twoLetter: "tr",
        code:"+90",
      
      },
      {
        country:"Turkmenistan",
        twoLetter: "tm",
        code:  "+993"
      },
      {
        country: "Turks and Caicos Islands",
        twoLetter:"tc",
        code:  "+1649"
      },
      {
        country:"Tuvalu",
        twoLetter:"tv",
        code:  "+688"
      },
      {
        country: "U.S. Virgin Islands",
        twoLetter:"vi",
        code:   "+1340"
      },
      {
        country: "Uganda",
        twoLetter: "ug",
        code:  "+256"
      },
      {
        country: "Ukraine",
        twoLetter: "ua",
        code:  "+380"
      },
      {
        country: "United Arab Emirates",
        twoLetter:"ae",
        code:  "+971"
      },
      {
        country: "United Kingdom",
        twoLetter: "gb",
        code:  "+44",
       
      },
      {
        country:"United States",
        twoLetter:  "us",
        code:  "+1",
       
      },
      {
        country:"Uruguay",
        twoLetter:"uy",
        code: "+598"
      },
      {
        country: "Uzbekistan",
        twoLetter:"uz",
        code:  "+998"
      },
      {
        country:"Vanuatu",
        twoLetter: "vu",
        code: "+678"
      },
      {
        country:"Vatican City",
        twoLetter: "va",
        code: "+39",
      },
      {
        country: "Venezuela",
        twoLetter: "ve",
        code:   "+58"
      },
      {
        country:"Vietnam",
        twoLetter: "vn",
        code: "+84"
      },
      {
        country: "Wallis and Futuna",
        twoLetter:  "wf",
        code: "+681"
      },
      {
        country:"Yemen",
        twoLetter: "ye",
        code:  "+967"
      },
      {
        country: "Zambia",
        twoLetter: "zm",
        code:  "+260"
      },
      {
        country: "Zimbabwe",
        twoLetter: "zw",
       code: "+263"
      } */
    ]
    return (
      <MuiThemeProvider>
          <React.Fragment>
          <AppBar position="static" style={styles.appbar}>
         <Toolbar>
             <Typography variant="Heading" color="inherit" style={styles.typo1}>
            Playmate
             </Typography>
         
              </Toolbar>
         </AppBar>
            <div>
             <Paper style={styles.paper}>
             {/* <form className="Form"> */}
             <TextField
          id="standard-select-countryCode-native"
          select
        //  label="Country Code"
          className={styles.textField}
          value={code}
        
          style={styles.textField1}
          onChange={this.handleChange('code')}
         SelectProps={{
            native: true,
            MenuProps: {
              className: styles.menu,
           },
         }}
        helperText="Please select your country" >
          {COUNTRIES.map(country => (
            <option key={country.twoLetter} value={country.code}>
              {country.country}
            </option>
          ))}
        </TextField>
        <br/>
        {/* <div className={`form-group ${this.errorClass(this.state.formErrors.phone)}`}> */}
        <TextField  
          type="mobileNo"
          label="Phone Number"
          //defaultValue=
          value={phone}
          className="{textField}"
          helperText="Don't start with '0'"
          style={styles.textField2}
          onChange={this.handleChange('phone')}>
        </TextField>
        {/* </div> */}
        <br/>
        <Button style={styles.button}
        //onClick={alert(code+phone)} 
          type= "submit"
          onClick={this.handleClickOpen}
        
        >
          continue
        </Button>
        <TextField
        value ={phoneNumber}
        onChange={this.handleChange('phone')}/>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             Do you want to continue with this number {this.state.code} {this.state.phone}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Back
            </Button>
            <Button onClick={this.handleClickOpen1} color="primary" autoFocus>
              Continue
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.open1}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             Do you want to continue with this number 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose1} color="primary">
              Back
            </Button>
            <Button onClick={this.handleClose1} color="primary" autoFocus>
              Continue
            </Button>
          </DialogActions>
        </Dialog>
       {/* </form> 
            <div className="panel panel-default">
           <FormErrors formErrors={this.state.formErrors} /> 
        </div>  */}
            </Paper>
            </div>
          </React.Fragment>
      </MuiThemeProvider>
          )
        }
      }
      const styles = {
        paper:{
          backgroundColor:"#fafafa",
         // background: "repeating-radial-gradient(circle at 0 0, #eee,#ccc 50px)",
           width:300,
           height:400,
           marginLeft:"auto",
           marginRight:"auto",
           marginTop:100,
           textAlign:"center"
         
         },
         appbar:{
           color:"inherit",
           background:" linear-gradient(0.25turn, #e91e63, #f06292)" ,
           fontWeight: "bold",
           fontSize:30,
           fontStretch:10,
         },
         textField1:{
           marginTop:50,
         },
         textField2: {
         // borderWidth: "1px",
          color:"#DAA520",
          borderStyle:"solid",
          borderTopColor:"transparent",
          borderLeftColor:"transparent",
          borderRightColor:"transparent",
     //   borderBottomColor:"#e91e63",
        },
         menu: {
            border:1,
            width: 20,
            borderWidth: "1px",
            borderStyle:"solid",
            borderTopColor:"#212121",
            borderLeftColor:"#212121",
            borderRightColor:"#212121",
          borderBottomColor:"#DAA520",
          },
        button:{
          marginTop:30,
          background:" linear-gradient(0.25turn, #e91e63, #f69d3c)",
       borderRadius:20,
       color:"inherit",
       width:200,
       height:40,
       fontFamily: 'georgia',
       fontWeight: "bold",
       fontSize:20,
       padding:-10
        }
      }
export default Country
