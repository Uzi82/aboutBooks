package com.api.controllers;

import com.api.dtos.UserInfoResponse;
import com.api.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {
    private UserService userService;
    @GetMapping
    public UserInfoResponse getUser() {
        return userService.getUserInfo();
    }
}
