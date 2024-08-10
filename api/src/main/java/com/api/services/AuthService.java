package com.api.services;

import com.api.dtos.AuthRequest;
import com.api.dtos.CreateUserRequest;
import com.api.entities.User;
import com.api.utils.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.net.http.HttpResponse;
import java.util.List;

@Service
@AllArgsConstructor
public class AuthService {
    AuthenticationManager authenticationManager;
    RoleService roleService;
    UserService userService;
    JwtUtils jwtUtils;
    public ResponseEntity<?> auth(AuthRequest request) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    request.getUsername(),
                    request.getPassword()
            ));
        }
        catch (AuthenticationException ex) {
            return new ResponseEntity<>("Password and/or username are invalide", HttpStatus.UNAUTHORIZED);
        }
        UserDetails userDetails = userService.loadUserByUsername(request.getUsername());
        return new ResponseEntity<>(jwtUtils.generateToken(userDetails), HttpStatus.OK);
    }
    public ResponseEntity<?> createUser(CreateUserRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setRoles(List.of(roleService.getUserRole()));
        userService.createUser(user);
        return auth(new AuthRequest(request.getUsername(), request.getPassword()));
    }
}
