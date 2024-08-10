package com.api.dtos;

import lombok.Data;

@Data
public class CreateUserRequest {
    private String username;
    private String password;
}
