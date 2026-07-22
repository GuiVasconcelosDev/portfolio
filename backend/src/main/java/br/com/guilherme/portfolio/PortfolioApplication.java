package br.com.guilherme.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortfolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
		System.out.println("Backend do Portfolio iniciado com sucesso na porta 8080");
	}

}

