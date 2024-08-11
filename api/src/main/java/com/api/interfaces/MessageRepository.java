package com.api.interfaces;

import com.api.entities.Message;
import com.api.entities.Topic;
import com.api.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    @Override
    Optional<Message> findById(Long id);
}
