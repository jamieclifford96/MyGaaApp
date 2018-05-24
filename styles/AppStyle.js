import { StyleSheet } from 'react-native'

export default StyleSheet.create({  
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Helvetica',
  },
  view :{ 
    flex: 1, 
    alignItems: 'stretch', 
    justifyContent: 'center' 
  },
    text :{

  },
  baseText: {
    
  },
  buttonContainer :{
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#485a96',
    //borderWidth: 1,
    //borderColor: '#fff',
   
    //borderRadius: 5 ,
    margin: 5,  
    fontFamily: 'Helvetica',  
  },
  buttonImage :{
    padding: 10,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode : 'stretch',    
  },
  buttonText :{ 
    fontSize: 22,
    color: "#fff",
    marginBottom : 4,
    marginRight :20,  
    fontFamily: 'Helvetica',
  },
  fixtureItemText :{ 
    fontSize: 15,
    color: "#fff",
    padding : 5,  
    fontFamily: 'Helvetica',
  },
  fixtureDivisionText :{ 
    backgroundColor: 'rgb(39, 77, 78)',
    fontSize: 17,
    fontStyle : 'italic',
    color: "#fff",
    fontFamily: 'Helvetica',
    padding : 5    
  },
  fixtureIcon: {
    padding: 5,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode : 'stretch',    
  },
  fixturesDivisionHeading :{ 
    flexDirection: 'column',
    marginTop :5,
    marginBottom: 5,
    padding : 5,
    fontSize: 22,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.9)", 
    fontFamily: 'Helvetica',  
    textAlign: 'center',
    
  },
  bigbutton: {
    height: 400,
    width: 400,
  },
  contacttext : {
    color: 'white',
    fontSize: 20
  },
  icontext: {
    marginTop: 1,
    color: 'white',
    fontFamily: 'Helvetica',
  },
  iconbutton: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 4,
    paddingTop: 20,
    alignItems: 'center',
    
  },
})