package com.api.controllers;

import com.api.dtos.CreateMessageRequest;
import com.api.dtos.CreateTopicRequest;
import com.api.services.MessageService;
import com.api.services.TopicsService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/topics")
public class TopicsController {
    private TopicsService topicsService;
    private MessageService messageService;
    @GetMapping("/new")
    public ResponseEntity<?> getNew(@RequestParam("limit") int limit) {
        return topicsService.getTheNewest(limit);
    }
    @GetMapping("/mytopics")
    public ResponseEntity<?> getMyTopics() {
        return topicsService.getMyTopics();
    }
    @GetMapping("/gettopic")
    public ResponseEntity<?> getTopic(@RequestParam("id") Long id) {
        return topicsService.getTopic(id);
    }
    @PostMapping("/createmessage")
    public ResponseEntity<?> createMessage(@RequestBody CreateMessageRequest request) {
        return messageService.createMessage(request);
    }
    @PostMapping("/createtopic")
    public ResponseEntity<?> createTopic(@RequestBody CreateTopicRequest request) {
        return topicsService.createTopic(request);
    }
}
