import React,{useEffect,useState} from 'react';
import { Table ,Button} from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Read() {
//   const setData = (data) => {
//    console.log(data);
// }  

const setData = (data) => {
        let { _id, firstName, lastName,emailId, checkbox } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', emailId);
        localStorage.setItem('Checkbox Value', checkbox)
}
const [APIData, setAPIData] = useState([]);
 useEffect(() => {
        axios.get(`http://localhost:8081/api/v1/employees`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
     const getData = () => {
    axios.get(`http://localhost:8081/api/v1/employees`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
  
 
const onDelete = (_id) => {
        axios.delete(`http://localhost:8081/api/v1/employees/${_id}`)
     .then(() => {
        getData();
    })
}
const detail =(_id)=>{
    axios.get(`http://localhost:8081/api/v1/employees/${_id}`)
    .then((detail)=>{setAPIData(detail.data);
    })
}

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {APIData.map((data,key) => {
                         return (
                       <Table.Row key={key}>
                          <Table.Cell>{data.firstName}</Table.Cell>
                         <Table.Cell>{data.lastName}</Table.Cell>
                          <Table.Cell>{data.emailId}</Table.Cell>
                          <Link to='/update'>
                           <Table.Cell>
                           <Button color='olive' onClick={() => setData(data)}>Update</Button>
                           </Table.Cell>
                           
                           </Link>
                           <Button  color ='red' onClick={() => onDelete(data._id)}>Delete</Button>
                           <Button color='blue' onClick={() => detail(data._id)} >View</Button>
                      {/* <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell> */}
                  </Table.Row>
             )})}
                </Table.Body>
            </Table>
        </div>
    )
}
 