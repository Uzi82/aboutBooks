package com.api.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class GetTopicDetailsResponse {
    Long id;
    String title;
    String description;
    List<GetMessageResponse> messages;
}
