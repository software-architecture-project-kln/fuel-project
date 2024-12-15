package com.kln.FuelBackend.entity;

import jakarta.persistence.*;

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
    private Integer userId;

    @Column(nullable = false)
    private String f_name;

    @Column(nullable = false)
    private String l_name;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false,unique = true)
    private String mobile;
}
