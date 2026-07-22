package br.com.guilherme.portfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.guilherme.portfolio.entity.ContatoMessage;
import br.com.guilherme.portfolio.repository.ContatoMessageRepository;

@RestController
@RequestMapping("/api/contato")
public class ContactController {

    private final ContatoMessageRepository contactRepository;

    public ContactController(ContatoMessageRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @PostMapping
    public ResponseEntity<Void> registerMessage(
            @RequestBody ContatoMessage message) {

        if (isBlank(message.getName())
                || isBlank(message.getEmail())
                || isBlank(message.getMessage())
                || message.getName().length() > 100
                || message.getEmail().length() > 254
                || message.getMessage().length() > 5000
                || isTooLong(message.getSubject(), 150)) {

            return ResponseEntity.badRequest().build();
        }

        message.setId(null);

        contactRepository.save(message);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .build();
    }

    private boolean isBlank(String value) {
        return value == null || value.isBlank();
    }

    private boolean isTooLong(String value, int maxLength) {
        return value != null && value.length() > maxLength;
    }
}