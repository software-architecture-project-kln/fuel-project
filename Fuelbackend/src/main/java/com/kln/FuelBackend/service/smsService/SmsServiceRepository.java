package com.kln.FuelBackend.service.smsService;

public interface SmsServiceRepository {

    public void sendMessage(String mobileNumber, String message);
}
