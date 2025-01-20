package com.kln.FuelBackend.service.notificationService;

public interface NotificationServiceRepository {

    public void sendNotificationAvailableCapacityForOwner(String mobile,Double fuelingNowLiters,Double availableCapacity);
}
