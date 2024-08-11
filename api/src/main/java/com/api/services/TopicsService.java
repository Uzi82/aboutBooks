package com.api.services;

import com.api.dtos.CreateTopicRequest;
import com.api.dtos.GetMessageResponse;
import com.api.dtos.GetTopicDetailsResponse;
import com.api.dtos.GetTopicResponse;
import com.api.entities.Topic;
import com.api.interfaces.TopicRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class TopicsService {
    private TopicRepository topicRepository;
    private UserService userService;
    public ResponseEntity<?> getTheNewest(int limit) {
        Page<Topic> topics = topicRepository.findNewest(PageRequest.of(0, limit));
        return new ResponseEntity<>(topics.map(el -> new GetTopicResponse(
                el.getId(),
                el.getTitle(),
                el.getDescription()))
                .stream().toArray(), HttpStatus.OK);
    }
    public ResponseEntity<?> createTopic(CreateTopicRequest createTopicRequest) {
        Topic topic = new Topic();
        topic.setUser(userService.getUser());
        topic.setDescription(createTopicRequest.getDescription());
        topic.setTitle(createTopicRequest.getTitle());
        return new ResponseEntity<>(HttpStatus.OK);
    }
    public ResponseEntity<?> getTopic(Long id) {
        Optional<Topic> topicOptional = topicRepository.findById(id);
        if(topicOptional.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Topic topic = topicOptional.get();
        return new ResponseEntity<>(new GetTopicDetailsResponse(
                topic.getId(),
                topic.getTitle(),
                topic.getDescription(),
                topic.getMessages().stream().map(el -> new GetMessageResponse(
                        el.getId(),
                        el.getText(),
                        el.getUser().getId()
                )).toList()
        ), HttpStatus.OK);
    }
    public ResponseEntity<?> getMyTopics() {
        return new ResponseEntity<>(topicRepository.findAllByUser(userService.getUser()).stream().map(el -> new GetTopicResponse(
                el.getId(),
                el.getTitle(),
                el.getDescription()
        )), HttpStatus.OK);
    }
}