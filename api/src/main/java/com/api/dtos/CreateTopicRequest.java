package com.api.dtos;

import lombok.Data;

@Data
public class CreateTopicRequest {
    private String title;
    private String description;
    private Long book_id;
}
