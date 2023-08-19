"use client"
import React, { useRef ,useState} from 'react';
// import emailjs from '@emailjs/browser';
import { signUpWithCredentials } from '@/actions/authActions';
import Button from '../Profile/Button';
import UpdataForm from '../Profile/UpdataForm';
import Image from 'next/image';
import "../../app/style/SignUp.css" // Import the CSS file
import Terms from '../Global/Terms';


const SignUp = () => {
  const [state, setState] = useState('a');
  const [message, setMessage] = useState('');
  const [privecy, setPrivecy] = useState(false);
  const [Submit, setSubmit] = useState('');
  const form = useRef();

  const handlePrivecy = () => {
    console.log("hi")
    if (privecy === true){
      setPrivecy(false);
      setSubmit("")

    } 
    if (privecy === false){
      setPrivecy(true);
      setSubmit("handlesignUpCredentials")
    } 
    console.log(privecy)
  }

  // const  sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_ph1l7w6', 'template_y4wgai7', form.current, 'MCXYN1narHDCj_5dp')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  


  async function handlesignUpCredentials(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const state = formData.get("state");
    const businessName = formData.get("businessName");
    const page = formData.get("page");
    const product = formData.get("product");
    const orderNumber = formData.get("orderNumber");
    try {
    
      const res = await signUpWithCredentials({ name, email, password, phone, state, businessName, page, product, orderNumber });
      setMessage(res.msg); // Set the message
    } catch (error) {
      setMessage('Error signing up'); // Set an error message if there's an error
    }
  }

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="container">
      
      <h1 className='contantTitle'>Welcome To <p className='blue'>ZAGEL</p></h1>
      <UpdataForm action={handlesignUpCredentials} className="form">
      <label className="label">Name</label>
        <input type="text" name="name" placeholder="Name" required />
        <label className="label">Email</label>
        <input type="email" name="email" placeholder="Email" required />
        <label className="label">Password</label>
        <input type="password" name="password" placeholder="Password" required />
        <label className="label">Phone Number</label>
        <input type="phone" name="phone" placeholder="Phone Number" required />
        <label className="label">Business Name</label>
        <input type="businessName" name="businessName" placeholder="Business Name" required />
        <label className="label">Website / Facebook Page</label>
        <input type="page" name="page" placeholder="Website / Facebook Page" required />
        <label className="label">What Is/Are Product You Deliverd</label>
        <input type="product" name="product" placeholder="What Is/Are Product You Deliverd" required />
        <label className="label">Estimated Number Of Orders Per Month?</label>
        <input type="orderNumber" name="orderNumber" placeholder="Estimated Number Of Orders Per Month?" required />
        <label className="label">Choose</label>
        <select name="state" value={state} onChange={handleStateChange}>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
        <div className='privacy'>
          <input type="checkbox" className='checkbox'  required/>
          <div>I Accept The <p className='blue' onClick={() => setPrivecy(true)}>Terms Of Service And Privacy Policy</p></div>
        </div>
        {privecy && <Terms setPrivecy={setPrivecy}/>}
        {message && <p>{message}</p>}
        <Button value="Submit"  />
      </UpdataForm>
    </div>
  );
};

export default SignUp;
