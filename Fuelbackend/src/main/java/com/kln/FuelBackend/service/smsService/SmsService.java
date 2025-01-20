package com.kln.FuelBackend.service.smsService;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService implements SmsServiceRepository{

    @Value("${twilio.phone.number}")
    private String twilioNumber;

    @Override
    public void sendMessage(String mobileNumber, String message) {
        Message.creator(
                new PhoneNumber(mobileNumber),
                new PhoneNumber(twilioNumber),
                message
        ).create();
    }
}
