package com.api.dtos;

import lombok.Data;

import java.util.List;

@Data
public class UserInfoResponse {
    Long id;
    String username;
    List<String> roles;
}
