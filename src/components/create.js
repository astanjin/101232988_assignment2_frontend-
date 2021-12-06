import React ,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Create ()  {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId,setEmailId]=useState('')
    const [checkbox, setCheckbox] = useState(false);
//     const postData = () => {
//         console.log(firstName);
//         console.log(lastName);
//         console.log(checkbox);
//          console.log(emailId);
// }
const postData = () => {
        axios.post('http://localhost:8081/api/v1/employees', {
           
            firstName:firstName,
            lastName :lastName,
            emailId :emailId,
            checkbox 
        }).then(res=>{console.log(res)})
    }
 

return(
<div>
  <Form className="create-form">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' type ='text' onChange={(e) => setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' type ='text' onChange={(e) => setLastName(e.target.value)} />
    </Form.Field>
     <Form.Field>
      <label>Email</label>
      <input placeholder='Email' type ='text' onChange={(e) => setEmailId(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
    </Form.Field>
    <Button color ='green' type='submit' onClick={postData}>Submit</Button>
    <Link to='/read'>
       <Button>Cancel</Button>
    </Link>
  </Form>
</div>
)
}