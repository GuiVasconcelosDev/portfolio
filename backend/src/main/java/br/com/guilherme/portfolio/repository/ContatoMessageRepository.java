package br.com.guilherme.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.guilherme.portfolio.entity.ContatoMessage;

public interface ContatoMessageRepository extends JpaRepository<ContatoMessage, Long>{

}
