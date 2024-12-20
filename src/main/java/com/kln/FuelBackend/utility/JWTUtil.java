package com.kln.FuelBackend.utility;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Serializer;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;

@Component
public class JWTUtil {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private Long expiration;

//    private static final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS512);
//
//    public String createToken(Serializer<Map<String,?>> payload, String identity){
//        return Jwts.builder()
//                .issuedAt(new Date())
//                .expiration(new Date(System.currentTimeMillis() + expiration))
//                .json(payload)
//                .signWith()
//    }


}
