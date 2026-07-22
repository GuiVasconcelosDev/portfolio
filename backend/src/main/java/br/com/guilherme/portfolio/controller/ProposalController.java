package br.com.guilherme.portfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.guilherme.portfolio.entity.RecruiterProposal;
import br.com.guilherme.portfolio.repository.RecruiterProposalRepository;

@RestController
@RequestMapping("/api/propostas")
public class ProposalController {

    private final RecruiterProposalRepository proposalRepository;

    public ProposalController(
            RecruiterProposalRepository proposalRepository) {

        this.proposalRepository = proposalRepository;
    }

    @PostMapping
    public ResponseEntity<Void> registerProposal(
            @RequestBody RecruiterProposal proposal) {

        if (isBlank(proposal.getCompanyName())
                || isBlank(proposal.getFullProposalText())
                || proposal.getCompanyName().length() > 150
                || proposal.getFullProposalText().length() > 10000
                || isTooLong(proposal.getRoleType(), 100)
                || isTooLong(proposal.getStackPreference(), 255)
                || isTooLong(proposal.getMinSalaryRange(), 100)) {

            return ResponseEntity.badRequest().build();
        }

        proposal.setId(null);

        proposalRepository.save(proposal);

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