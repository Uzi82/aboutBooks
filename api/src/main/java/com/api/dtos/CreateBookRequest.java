package com.api.dtos;

import lombok.Data;

@Data
public class CreateBookRequest {
    private String name;
    private String description;
    private Long author_id;
    private Long genre_id;
}
