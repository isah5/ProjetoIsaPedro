package com.projetoisapedro.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StreamingController {

    @Autowired
    private StreamingRepo repo;

    @GetMapping("/api/streamings")
    public Iterable<Streaming> consultar() {
        return repo.findAll();
    }

    @PostMapping("/api/streamings")
    public Streaming criar(@RequestBody Streaming novoStreaming) {
        return repo.save(novoStreaming);
    }




}