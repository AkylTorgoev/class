// import React, { useState } from 'react';
// import { Button, FormControl, InputGroup } from 'react-bootstrap';

// const AddLogin = () => {
//     const [login, setLogin] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [proverka, setProverka] = useState('')

//     const handleInp = (e) =>{
//       let obj={
//         ...login,
//         [e.target.name]: e.target.value,
//       }
//       setLogin(obj)
//     }
//     console.log(login);

//     const prov = (e) => {
//       e.prevDefault()
//       if(password === confirmPassword){
//         setProverka(false)
//       }
//     }



    
    
    
//     return (
//         <div>
//     <InputGroup className="mb-3">
//     <FormControl
//     placeholder='Email'
//     onChange={handleInp}

//     />
//   </InputGroup>

//   <InputGroup className="mb-3">
//     <FormControl
//     placeholder='Password'
//     type='password'
//     onChange={handleInp}
  
//     />
//   </InputGroup>

//   <InputGroup className="mb-3">
//     <FormControl
//     placeholder='Confirm password'
//     type='password'
//     onChange={handleInp}
//     />
//   </InputGroup>

//   <Button onClick={() => {
   
//     setLogin() 
//   }}
//     type="submit">Login</Button>

//   <Button type="submit">Logout</Button>{' '}

//         </div>
//     );
// };

// export default AddLogin;