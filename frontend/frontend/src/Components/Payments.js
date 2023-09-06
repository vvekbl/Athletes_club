import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Payments() {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState('');

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/payments");
      if (response.status === 200) {
        setPayments(response.data);
      } else {
        console.error("Error fetching payments:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  const handleDelete = async (paymentId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/payments/delete/${paymentId}`);
      if (response.status === 200) {
        fetchPayments(); // Refresh the payments list after deletion
      } else {
        console.error("Error deleting payment");
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };


  return (
    <div>
      <br />
      <center>
        <h1>Payment List</h1>
      </center>
      <Link to="/makepayment">Pay for Membership</Link>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">PaymentId</th>
              <th scope="col">Description</th>
              <th scope="col">GymMemberId</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.paymentId}>
                <td>{payment.paymentId}</td>
                <td>{payment.description}</td>
                <td>{payment.member.memberId}</td>
                <td>
                  <button
                    onClick={() => handleDelete(payment.paymentId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}

export default Payments;
