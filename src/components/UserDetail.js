import React,{ useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './UserDetail.css';
const UserDetail = (props) => {
    const [id,setid] = useState();
    const [FirstName,setFirstName] = useState();
    const [LastName,setLastName] = useState();
    const [email,setEmail] = useState();
    const [avatar,setAvatar]  = useState();
    const [error, seterror] = useState(false);

    const FetchUser = () => {
       
        axios.get(`https://reqres.in/api/users?page=${props.location.state.page}`)
        .then( (res) => {
            let Data = res.data;
            // console.log(Data.data);
           const validUser =  Data.data.filter((user) => {
                return user.id === props.location.state.id; 
                
            })
          
            setid(validUser[0].id);
            setFirstName(validUser[0].first_name);
            setLastName(validUser[0].last_name);
            setEmail(validUser[0].email);
            setAvatar(validUser[0].avatar);
        }).catch(() => {
            console.log('Network Error');
            seterror(true);
          })
    }

     let demo = <h1>Select User</h1>; 
    if(props.location.state != null){
        FetchUser();
        demo =   <Card className="Card">
       
        <div className="imageDiv">
        <img src={avatar} alt={avatar}/> <h3>{FirstName}  {LastName} </h3>
         </div>
       
        <Card.Body className="cardBody">
          <Card.Title>General Information</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">User Id</Card.Subtitle>
          <Card.Text> {id} </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Usser Email</Card.Subtitle>
          <Card.Text> {email} </Card.Text>
       
        </Card.Body>
      </Card>
    }
    return(
        <React.Fragment>
            { !error ?
            <div className="main">
             {demo}
            </div>
            :
            <h1> Something went wrong  </h1>
              }
            
        </React.Fragment>
        
    );
}


export default UserDetail;