package com.api.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;
    @ManyToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
