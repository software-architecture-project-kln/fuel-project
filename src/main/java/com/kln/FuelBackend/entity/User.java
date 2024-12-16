package com.kln.FuelBackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(
        name = "user",
        indexes = {
                @Index(name = "idx_email",columnList = "email"),
                @Index(name = "idx_mobile", columnList = "mobile")
        }
)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Integer userId;

    @Getter
    @Setter
    @Column(nullable = false)
    private String f_name;

    @Getter
    @Setter
    @Column(nullable = false)
    private String l_name;

    @Getter
    @Setter
    @Column(nullable = false,unique = true)
    private String email;

    @Getter
    @Setter
    @Column(nullable = false)
    private String password;

    @Getter
    @Setter
    @Column(nullable = false,unique = true)
    private String mobile;

    public User(){

    }

    public User(String f_name, String l_name, String email, String password, String mobile) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
    }
}
