"use client"
import React, { useRef ,useState} from 'react';
import { signUpWithCredentials } from '@/actions/authActions';
import Button from '../Profile/Button';
import UpdataForm from '../Profile/UpdataForm';
import "../../app/style/SignUp.css" // Import the CSS file

const SignUp = () => {
  const [state, setState] = useState('a');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ph1l7w6', 'template_y4wgai7', form.current, 'MCXYN1narHDCj_5dp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


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
      // sendEmail()
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
      <h2>Welcome To ZAGEL</h2>
      {message && <p>{message}</p>} {/* Display the message */}
      <UpdataForm action={handlesignUpCredentials} className="form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="phone" name="phone" placeholder="Phone Number" required />
        <input type="businessName" name="businessName" placeholder="Business Name" required />
        <input type="page" name="page" placeholder="Website / Facebook Page" required />
        <input type="product" name="product" placeholder="What Is/Are Product You Deliverd" required />
        <input type="orderNumber" name="orderNumber" placeholder="Order Number" required />
        <select name="state" value={state} onChange={handleStateChange}>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
        {message && <p>{message}</p>}
        <Button value="Submit" />
      </UpdataForm>
    </div>
  );
};

export default SignUp;
