package com.projetoisapedro.demo;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LivroController {
    @Autowired
    private LivroRepo livroRepo;

    public LivroController() {
    }

    @GetMapping("/api/livros")
    public Iterable<Livro> consultarTodosLivros() {
        return livroRepo.findAll();
    }

    @GetMapping("/api/livros/{id}")
    public Optional<Livro> consultarLivro(@PathVariable long id) {
        return livroRepo.findById(id);
    }

    @PostMapping("/api/livros")
    public Livro adicionar(@RequestBody Livro novoLivro) {
        return livroRepo.save(novoLivro);
    }

    @PutMapping("/api/livros/{id}")
    public Livro atualizarLivro(@PathVariable long id, @RequestBody Livro livroAtualizado) {
        return livroRepo.findById(id)
            .map(livro -> {
                livro.setTitulo(livroAtualizado.getTitulo());
                livro.setAutor(livroAtualizado.getAutor());
                livro.setAnoPublicacao(livroAtualizado.getAnoPublicacao());
                return livroRepo.save(livro);
            }).orElseGet(() -> {
                livroAtualizado.setId(id);
                return livroRepo.save(livroAtualizado);
            });
    }

    @DeleteMapping("/api/livros/{id}")
    public void deletarLivro(@PathVariable long id) {
        livroRepo.deleteById(id);
    }
}
