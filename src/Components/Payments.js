import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Payments() {
    
    var [payments, setPayments] = useState([]);


    useEffect(() => {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
            const result = JSON.parse(helper.responseText);
            setPayments(result);
        }
        };
        helper.open("GET", "http://localhost:8080/payments");
        helper.send();
    }, []);

    return (
        <div>
            <br></br>
            <center>
                <h1>Payment List</h1>
            </center>
                <Link to="/makepayment">Pay for Membership</Link>
            <br></br>
            <br></br>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">PaymentId</th>
                    <th scope="col">Description</th>
                    <th scope="col">GymMemberId</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                    <tr key={payment.paymentId}>
                        <td>{payment.paymentId}</td>
                        <td>{payment.description}</td>
                        <td>{payment.member.memberId}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default Payments