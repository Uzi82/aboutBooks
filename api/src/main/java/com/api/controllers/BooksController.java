package com.api.controllers;

import com.api.dtos.CreateBookRequest;
import com.api.services.BookService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/books")
public class BooksController {
    private BookService bookService;
    @GetMapping("/getByName")
    public ResponseEntity<?> getByName(@RequestParam("name") String name) {
        return bookService.getBookByName(name);
    }
    @GetMapping("/getById")
    public ResponseEntity<?> getById(@RequestParam("id") Long id) {
        return bookService.getBookById(id);
    }
    @GetMapping("/getByGenre")
    public ResponseEntity<?> getByGenre(@RequestParam("id") Long id) {
        return bookService.getBooksByGenre(id);
    }
    @GetMapping("/getAllGenres")
    public ResponseEntity<?> getAllGenres() {
        return bookService.getAllGenres();
    }
    @PostMapping("/createBook")
    public ResponseEntity<?> createBook(@RequestBody CreateBookRequest request) {
        return bookService.createBook(request);
    }
}
