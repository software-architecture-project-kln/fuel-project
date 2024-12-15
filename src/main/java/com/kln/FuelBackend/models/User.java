package com.kln.FuelBackend.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.regex.Pattern;

@Entity
@Table(
        name = "user",
        indexes = {
                @Index(name = "idx_email", columnList = "email"),
                @Index(name = "idx_mobile", columnList = "mobile")
        }
)
@Data
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long userId;
    @Column(nullable = false)
    private String f_name;
    @Column(nullable = false)
    private String l_name;

    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private String mobile;

    public User(){

    }

    public User (String f_name, String l_name, String password, String email, String mobile) throws Exception {
        this.f_name = f_name;
        this.l_name = l_name;

        if(password.length() >6){
            this.password = password;
        }else{
            throw new  Exception("PWD must be longer 6 chars");
        }

        if (Pattern.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$", email)) {
            this.email = email;
        } else {
            throw new Exception("Invalid email format");
        }

        if(mobile.length() ==12){
            this.mobile = mobile;
        } else{
            throw new RuntimeException("Invalid mobile number");
        }
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", f_name='" + f_name + '\'' +
                ", l_name='" + l_name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                '}';
    }
}
