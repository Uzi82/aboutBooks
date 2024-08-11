package com.api.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetMessageResponse {
    Long id;
    String text;
}
