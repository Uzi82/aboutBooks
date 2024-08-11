package com.api.interfaces;

import com.api.entities.Topic;
import com.api.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {
    @Override
    List<Topic> findAll();
    @Override
    Optional<Topic> findById(Long id);
    List<Topic> findAllByUser(User user);
    @Query(value = "SELECT * FROM topics ORDER BY id DESC", nativeQuery = true)
    Page<Topic> findNewest(Pageable pageable);
}