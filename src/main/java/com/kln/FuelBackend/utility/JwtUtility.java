package com.kln.FuelBackend.utility;

import com.kln.FuelBackend.exception.JwtValidationException;
import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtility {
    private final String SECRET_KEY = "adaefaefaefaeaefa79239r2fknasofnaoif";
    private final long EXPIRATION_TIME = 1000 * 60 * 60;

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public String extractUsername(String token) {
        try {
            return Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        } catch (MalformedJwtException e) {
            throw new JwtValidationException("Malformed JWT token");
        } catch (ExpiredJwtException e) {
            throw new JwtValidationException("JWT token has expired");
        } catch (UnsupportedJwtException e) {
            throw new JwtValidationException("Unsupported JWT token");
        } catch (IllegalArgumentException e) {
            throw new JwtValidationException("JWT claims string is empty");
        }
    }

    public boolean validateToken(String token, String username) {
        try {
            return username.equals(extractUsername(token)) && !isTokenExpired(token);
        } catch (JwtValidationException e) {
            throw e;
        }
    }

    private boolean isTokenExpired(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody()
                .getExpiration()
                .before(new Date());
    }
}
