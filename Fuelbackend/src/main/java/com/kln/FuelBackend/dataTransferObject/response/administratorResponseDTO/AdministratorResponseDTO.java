package com.kln.FuelBackend.dataTransferObject.response.administratorResponseDTO;



public class AdministratorResponseDTO {

    private Integer administratorId;
    private String administratorUsername;


    private String administratorEmail;

    public AdministratorResponseDTO(Integer administratorId, String administratorUsername, String administratorEmail) {
        this.administratorId = administratorId;
        this.administratorUsername = administratorUsername;
        this.administratorEmail = administratorEmail;
    }

    public Integer getAdministratorId() {
        return administratorId;
    }

    public void setAdministratorId(Integer administratorId) {
        this.administratorId = administratorId;
    }

    public String getAdministratorUsername() {
        return administratorUsername;
    }

    public void setAdministratorUsername(String administratorUsername) {
        this.administratorUsername = administratorUsername;
    }


    public String getAdministratorEmail() {
        return administratorEmail;
    }

    public void setAdministratorEmail(String administratorEmail) {
        this.administratorEmail = administratorEmail;
    }
}
