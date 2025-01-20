package com.kln.FuelBackend.service.notificationService;

import com.kln.FuelBackend.service.smsService.SmsServiceRepository;
import org.springframework.stereotype.Service;

@Service
public class NotificationService implements NotificationServiceRepository {

    private final SmsServiceRepository smsServiceRepository;

    public NotificationService(SmsServiceRepository smsServiceRepository) {
        this.smsServiceRepository = smsServiceRepository;
    }

    @Override
    public void sendNotificationAvailableCapacityForOwner(String mobile, Double fuelingNowLiters, Double availableCapacity) {
        String message = "You're Fueling " + fuelingNowLiters.toString() + " liters. Available Capacity is " +
                availableCapacity + " liters. Thank-You";
        smsServiceRepository.sendMessage(mobile,message);
    }
}
