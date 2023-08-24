import { useHistory,Link } from "react-router-dom";
import * as Yup from 'yup';
import { useState } from "react";

const schema = Yup.object().shape({
    description: Yup.string().required(),
    member: Yup.object().shape({
      memberId: Yup.number().required(),
    }),
  });
  

function PaymentForm() {
    
    var [payment, setPayment] = useState({
      member : {
        memberId : 0
      }, 
      description : ""
        
    });

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        schema.validate(payment, { abortEarly: false })
        .then(() => {
        console.log('Validation passed');
        const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/payments/make_payment';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log(xhr.response);
              alert("Payment Successful");
              history.push('/payments');
            } else {
              console.log('Request failed. Returned status of ' + xhr.status);
            }
          };
          xhr.send(JSON.stringify(payment));
      })
      .catch((errors) => {
        alert(errors);
      });
      };

      const handleChange = (event) => {
        setPayment({
          ...payment,
          [event.target.name]: event.target.value
        });
      };
      
      const handleMemberChange = (event) => {
        setPayment({
          ...payment, member :{
            ...payment.member,
            [event.target.name]: event.target.value
          }
        });
      };

      


    return (
        <div>
            <center>
                <h1>Payment Form</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Member Id:</label>
                        <input className="form-control" type="number" name="memberId" value={payment.member.memberId} onChange={handleMemberChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Description:</label> 
                        <textarea className="form-control" type="text" name="description" value={payment.description} onChange={handleChange} required />
                    </div>

                    <br></br>
                    <center>
                        <Link id='payment-link'  onClick={handleSubmit}>Submit</Link>
                    </center>

                </form>
            </center>

        </div>
    )

}

export default PaymentForm