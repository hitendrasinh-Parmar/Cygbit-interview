import React,{ useState , useEffect  } from 'react';

import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Table } from 'react-bootstrap';

import './UserList.css';
import Pagination from './Pagination';
 

const UserList = props => {
    

    const [CurrentUsers, setCurrentUsers] = useState('');
    const [error, seterror] = useState(false);
    const [page,setpage] = useState(1);

    useEffect( () => {
       FetchUser(page);
    },[page]);
    
    const  history = useHistory();
    const FetchUserHandler = (id,page) => {
      
      setpage(page);
      // console.log(id,page);
      history.push({
        pathname:'/UserDetail',
        state: { id: id ,page: page}
      });
    }

    const FetchUser = (page) => {
       
        axios.get(`https://reqres.in/api/users?page=${page}`)
        .then( (res) => {
            let Data = res.data;
        
            setCurrentUsers(Data);
        }).catch(() => {
          console.log('Network Error');
          seterror(true);
        })
    }

    const updatePage = (PageNo) =>{
        setpage(PageNo);
    }

    let TableContent = 
    <tr>
      <td> <h1>...Loading</h1>; </td>
    </tr>
    
    if(CurrentUsers){
      TableContent = CurrentUsers.data.map( user => {
          return <tr key={user.id} onClick={() => FetchUserHandler(user.id,CurrentUsers.page)} >
          <td> {user.id} </td>
          <td> <img  src={user.avatar} alt={user.avatar} />   </td>
          <td>  {user.email} </td>
          <td>  {user.first_name} </td>
          <td>  {user.last_name} </td>
        </tr>
      })
       }

      
    return( 
    <React.Fragment>
      { !error ?

      <div className="TableContainer">
        <Table className="Table"   hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
            { TableContent}
          
        </tbody>
      </Table>
      <Pagination page= {page} clicked={updatePage} totalpages={CurrentUsers.total_pages}/>
      </div>
      :
      <h1> Something went wrong  </h1>
        }
      

    </React.Fragment>
    );

    
}


export default UserList;