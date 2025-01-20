package com.kln.FuelBackend.service.otpService;

public interface OtpServiceRepository {

    public void sendOTP(String mobile);

    public Boolean verifyOTP(String mobile, Integer otp);
}
