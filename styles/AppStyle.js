import { StyleSheet } from 'react-native'

export default StyleSheet.create({  
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    fontFamily: 'arial',
  },
  view :{ 
    flex: 1, 
    alignItems: 'stretch', 
    justifyContent: 'center' 
  },
    text :{

  },
  buttonContainer :{
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#485a96',
    //borderWidth: 1,
    //borderColor: '#fff',
   
    //borderRadius: 5 ,
    margin: 5,    
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
    fontFamily: 'arial',  
  },
  fixtureItemText :{ 
    fontSize: 15,
    color: "#fff",
    padding : 5    
  },
  fixtureDivisionText :{ 
    backgroundColor: 'rgb(39, 77, 78)',
    fontSize: 17,
    fontStyle : 'italic',
    color: "#fff",
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
    margin :5,
    padding : 5,
    fontSize: 22,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.4)", 
    fontFamily: 'arial',  
    textAlign: 'center' 
  },
  bigbutton: {
    height: 400,
    width: 400,
  },
  contacttext : {
    color: 'white',
    fontSize: 20
  }
})