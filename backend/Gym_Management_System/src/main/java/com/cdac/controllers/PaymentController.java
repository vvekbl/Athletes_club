package com.cdac.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.pojos.GymMember;
import com.cdac.pojos.Payment;
import com.cdac.service.GymMemberService;
import com.cdac.service.PaymentService;

@RestController
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private GymMemberService gymMemberService;

    @GetMapping("/payments")
    public ResponseEntity<List<Payment>> findAll() {
        List<Payment> list = paymentService.findAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/payments/make_payment") // Fix URL mapping by adding a "/"
    public ResponseEntity<Payment> make_payment(@RequestBody Payment payment) {
        int memberId = payment.getMember().getMemberId();
        GymMember gm = gymMemberService.findById(memberId);
        gm.setPayment_status(true);
        payment.setMember(gm);
        Payment pmt = paymentService.makePayment(payment);
        return ResponseEntity.ok(pmt);
    }

    @DeleteMapping("/payments/delete/{delete_id}") // Fix URL mapping by adding a "/"
    public ResponseEntity<Void> delete(@PathVariable("delete_id") int id) { // Change return type to ResponseEntity<Void>
        paymentService.deleteById(id);
        return ResponseEntity.noContent().build(); // Return a ResponseEntity with no content
    }
}
