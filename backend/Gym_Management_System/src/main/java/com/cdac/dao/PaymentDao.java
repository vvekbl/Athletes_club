package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
