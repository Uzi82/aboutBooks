package com.api.services;

import com.api.dtos.CreateBookRequest;
import com.api.dtos.GetBookResponse;
import com.api.dtos.GetGenreResponse;
import com.api.entities.Author;
import com.api.entities.Book;
import com.api.entities.Genre;
import com.api.interfaces.AuthorRepository;
import com.api.interfaces.BookRepository;
import com.api.interfaces.GenreRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BookService {
    private BookRepository bookRepository;
    private GenreRepository genreRepository;
    private AuthorRepository authorRepository;
    public ResponseEntity<?> getBookByName(String name) {
        Optional<Book> bookOptional = bookRepository.findByName(name);
        if(bookOptional.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Book book = bookOptional.get();
        return new ResponseEntity<>(
                new GetBookResponse(
                        book.getId(),
                        book.getName(),
                        book.getDescription(),
                        book.getAuthor().getName(),
                        book.getAuthor().getId(),
                        book.getGenre().getName(),
                        book.getGenre().getId()
                )
                , HttpStatus.OK);
    }
    public ResponseEntity<?> getBookById(Long id) {
        Optional<Book> bookOptional = bookRepository.findById(id);
        if(bookOptional.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Book book = bookOptional.get();
        return new ResponseEntity<>(
                new GetBookResponse(
                        book.getId(),
                        book.getName(),
                        book.getDescription(),
                        book.getAuthor().getName(),
                        book.getAuthor().getId(),
                        book.getGenre().getName(),
                        book.getGenre().getId()
                )
                , HttpStatus.OK);
    }
    public ResponseEntity<?> getBooksByGenre(Long id) {
        Optional<Genre> genre = genreRepository.findById(id);
        if(genre.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(bookRepository.findAllByGenre(genre.get()).stream().map(
                el -> new GetBookResponse(
                        el.getId(),
                        el.getName(),
                        el.getDescription(),
                        el.getAuthor().getName(),
                        el.getAuthor().getId(),
                        el.getGenre().getName(),
                        el.getGenre().getId()
                )
        ), HttpStatus.OK);
    }
    public ResponseEntity<?> getAllGenres() {
        return new ResponseEntity<>(genreRepository.findAll().stream().map(el ->
                new GetGenreResponse(el.getId(), el.getName()))
                , HttpStatus.OK);
    }
    public ResponseEntity<?> createBook(CreateBookRequest request) {
        Optional<Author> author = authorRepository.findById(request.getAuthor_id());
        Optional<Genre> genre = genreRepository.findById(request.getGenre_id());
        if (author.isEmpty() || genre.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Book book = new Book();
        book.setAuthor(author.get());
        book.setGenre(genre.get());
        book.setName(request.getName());
        book.setDescription(request.getDescription());
        bookRepository.save(book);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
