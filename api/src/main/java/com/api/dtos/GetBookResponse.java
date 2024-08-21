package com.api.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetBookResponse {
    private Long id;
    private String name;
    private String description;
    private String author_name;
    private Long author_id;
    private String genre_name;
    private Long genre_id;
}
