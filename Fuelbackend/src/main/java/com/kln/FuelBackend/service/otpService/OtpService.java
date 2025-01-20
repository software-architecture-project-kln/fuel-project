package com.kln.FuelBackend.service.otpService;

import com.kln.FuelBackend.service.smsService.SmsServiceRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OtpService implements OtpServiceRepository{

    private final SmsServiceRepository smsServiceRepository;


    // Temporary storage (store otp and mobile)
    private final Map<String,Integer> otpStorage = new HashMap<>();
    public OtpService(SmsServiceRepository smsServiceRepository) {
        this.smsServiceRepository = smsServiceRepository;
    }

    @Override
    public void sendOTP(String mobile) {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        otpStorage.put(mobile,otp);
        String message = "OTP is : " + Integer.toString(otp);
        smsServiceRepository.sendMessage(mobile,message);
    }

    @Override
    public Boolean verifyOTP(String mobile, Integer otp) {
        if(otpStorage.containsKey(mobile) && otpStorage.get(mobile).equals(otp)){
            otpStorage.remove(mobile);
            return true;
        }else {
            return false;
        }

    }
}
