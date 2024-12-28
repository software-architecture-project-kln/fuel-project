package com.kln.FuelBackend.utility;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kln.FuelBackend.dataTransferObject.response.ExceptionResponseDTO;
import com.kln.FuelBackend.exception.ForbiddenException;
import com.kln.FuelBackend.exception.UnauthorizedAccessException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private JwtUtility jwtUtility;

    @Autowired
    public JwtAuthFilter(JwtUtility jwtUtility) {
        this.jwtUtility = jwtUtility;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        try {
            String authenticationHeader = request.getHeader("Authorization");

            if (authenticationHeader != null && authenticationHeader.startsWith("Bearer ")) {
                String token = authenticationHeader.substring(7);
                String username = jwtUtility.extractUsername(token);

                if (jwtUtility.validateToken(token, username)) {
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(username, null, null);
                    authenticationToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request)
                    );
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
//                else {
//                    throw new UnauthorizedAccessException("Unauthorized access");
//                }
            }
//            else {
//                throw new ForbiddenException("Can't access this endpoint without token");
//            }



        } catch (UnauthorizedAccessException unauthorizedAccessException) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.setContentType("application/json");
            response.getWriter().write(
                    new ObjectMapper().writeValueAsString(
                            new ExceptionResponseDTO(false, unauthorizedAccessException.getMessage())
                    )
            );
            response.getWriter().flush();
            return;

        } catch (ForbiddenException forbiddenException) {

            response.setStatus(HttpStatus.FORBIDDEN.value());
            response.setContentType("application/json");
            response.getWriter().write(
                    new ObjectMapper().writeValueAsString(
                            new ExceptionResponseDTO(false, forbiddenException.getMessage())
                    )
            );
            response.getWriter().flush();
            return;

        } catch (Exception exception){
            response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
            response.setContentType("application/json");
            response.getWriter().write(
                    new ObjectMapper().writeValueAsString(
                            new ExceptionResponseDTO(false, exception.getMessage())
                    )
            );
            response.getWriter().flush();
            return;
        }

        filterChain.doFilter(request, response);
    }

}
