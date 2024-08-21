package com.api.interfaces;

import com.api.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {
    @Override
    Optional<Genre> findById(Long id);

    @Override
    List<Genre> findAll();
}
