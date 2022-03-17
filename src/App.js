import React from "react";
import {useState,useEffect} from "react";
import './App.css';
var moment = require('moment'); 
async function Getdata()
{
  let response=await fetch('https://randomuser.me/api/');
  let data=await response.json();
  //setPerson(data.results[0]);
  console.log(data.results[0]);
  return data.results[0];
}

function App() {
  const [person,setPerson]=useState([]);  
  const [username,setUsername]=useState('');
  const [userimg,setUserimg]=useState('');
  const [usergender,setUsergender]=useState('');
  const [usermail,setUsermail]=useState('');
  const [userphone,setUserphone]=useState('');
  const [userdob,setUserdob]=useState('');
  const [userlat,setUserlat]=useState('');
  const [userlong,setUserlong]=useState('');
  const [useraddress,setUseraddress]=useState('');
  const [useruser,setUseruser]=useState('');
  function setDetails() {
    console.log(person);
    setUsername(person?.name?.title + " " + person?.name?.first+ " "+ person?.name?.last);
    setUserimg(person?.picture?.large);
    setUsergender(person?.gender);
    setUsermail(person?.email);
    setUserphone(person?.phone);
    setUserdob(person?.dob?.date);
    setUserlat(person?.location?.coordinate?.latitude);
    setUserlong(person?.location?.coordinate?.longitude);
    setUseraddress(person?.location?.street?.number+" "+person?.location?.street?.name+" "+person?.location?.city+" "+person?.location?.state+" "+person?.location?.country);
    setUseruser(person?.login?.username);
  }
  useEffect(async function (){
    let temp=await Getdata();
    setPerson(temp);
  },[]);
  useEffect(setDetails,[person]);
  

  return (
    <div className="App" style={{margin : "20px"}}> 
     
     <div id="header">
       <div id="imgsection">
        <img id ="usedimg" src={userimg} alt="image" ></img>
       </div>
       <div id="profile">
         <h2>{username}</h2>
         <p>Update your photo and personal details</p>
       </div>
     </div>
     <br/>
     <br/>
     <table className="details" style={{ width : "100%" }}>
      <tr>
         <td className="sectiontitle">Username</td>
         <td className="sectiondata">{useruser}</td>
         <td><button >Edit</button></td>
       </tr>
       <tr>
         <td className="sectiontitle">Gender</td>
         <td className="sectiondata">{usergender}</td>
         <td><button >Edit</button></td>
       </tr>
       <br/>
       <tr>
        <td className="sectiontitle">Date of Birth</td>
        <td className="sectiondata">{moment(userdob).format('DD MMMM YYYY')}</td>
        <td><button >Edit</button></td>
       </tr>
       <br/>
       <tr>
       <td className="sectiontitle">Phone no.</td>
        <td className="sectiondata">{userphone}</td>
        <td><button >Edit</button></td>
       </tr>
       <br/>
       <tr>
       <td className="sectiontitle">Address</td>
         <td className="sectiondata">{useraddress}
         <br/>
         <br/>
         <br/>
         </td>
         <td><button >Edit</button></td>
       </tr>
       <br/>
       <tr>
       <td className="sectiontitle">e-mail</td>
         <td className="sectiondata">{usermail}</td>
         <td><button >Edit</button></td>
       </tr>
     </table>
    </div>
  );
}

export default App;
