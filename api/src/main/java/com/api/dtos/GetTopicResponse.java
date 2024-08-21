package com.api.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetTopicResponse {
    private Long id;
    private String title;
    private String description;
    private Long book_id;
    private String book_name;
}
