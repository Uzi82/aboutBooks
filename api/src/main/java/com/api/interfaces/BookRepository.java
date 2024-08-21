package com.api.interfaces;

import com.api.entities.Book;
import com.api.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByName(String name);
    @Override
    Optional<Book> findById(Long id);
    List<Book> findAllByGenre(Genre genre);
}
