package br.com.guilherme.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.guilherme.portfolio.entity.ContatoMessage;
import br.com.guilherme.portfolio.repository.ContatoMessageRepository;

@RestController
@RequestMapping("/api/contatos")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContatoMessageRepository contactRepository;

    @PostMapping
    public ResponseEntity<ContatoMessage> registerMessage(@RequestBody ContatoMessage message) {
        if (message.getName() == null || message.getEmail() == null || message.getMessage() == null) {
            return ResponseEntity.badRequest().build();
        }
        ContatoMessage saved = contactRepository.save(message);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<ContatoMessage>> getAllMessages() {
        return ResponseEntity.ok(contactRepository.findAll());
    }
}