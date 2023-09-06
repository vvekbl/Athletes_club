package com.cdac.service;

import java.util.List;

import com.cdac.pojos.Payment;


public interface PaymentService {

	List<Payment> findAll();
	Payment makePayment(Payment payment);
	void deleteById(int paymentId);
}
