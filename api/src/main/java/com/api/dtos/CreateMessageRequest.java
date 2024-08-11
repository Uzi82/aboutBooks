package com.api.dtos;

import lombok.Data;

@Data
public class CreateMessageRequest {
    private Long topic_id;
    private String text;
}
