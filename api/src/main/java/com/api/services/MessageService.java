package com.api.services;

import com.api.dtos.CreateMessageRequest;
import com.api.entities.Message;
import com.api.entities.Topic;
import com.api.interfaces.MessageRepository;
import com.api.interfaces.TopicRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class MessageService {
    private MessageRepository messageRepository;
    private TopicRepository topicRepository;
    private UserService userService;
    public ResponseEntity<?> createMessage(CreateMessageRequest request) {
        Message message = new Message();
        Optional<Topic> topic = topicRepository.findById(request.getTopic_id());
        if(topic.isEmpty()) return new ResponseEntity<>("Topic was not found", HttpStatus.BAD_REQUEST);
        message.setTopic(topic.get());
        message.setText(request.getText());
        message.setUser(userService.getUser());
        messageRepository.save(message);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
