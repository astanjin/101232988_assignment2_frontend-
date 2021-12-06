import React ,{useState,useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Update() {
    const params = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId,setEmailId]=useState('')
    const [checkbox, setCheckbox] = useState(false);
    const [_id, setID] = useState(null);

   
  const updateAPIData = () => {
       
    axios.put(`http://localhost:8081/api/v1/employees/${_id}`, {
        _id :_id,
         firstName:firstName,
         lastName:lastName,
         emailId:emailId,
         checkbox
	})
}

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmailId(localStorage.getItem('Email'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name'  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name'value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                 <Form.Field>
                     <label>Email</label>
                    <input placeholder='Email' type ='text' value={emailId}  onChange={(e) => setEmailId(e.target.value)} />
                 </Form.Field>
                 
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions'  checked={checkbox} 
                    onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button  color='green' type='submit' onClick={updateAPIData}>Update</Button>
                <Link to='/read'>
                <Button>Cancel</Button>
                </Link>
            </Form>
        </div>
    )
}