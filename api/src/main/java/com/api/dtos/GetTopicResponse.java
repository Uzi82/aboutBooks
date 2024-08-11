package com.api.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetTopicResponse {
    Long id;
    String title;
    String description;
}
