package com.guilherme.portfolio.controller;

import com.guilherme.portfolio.entity.RecruiterProposal;
import com.guilherme.portfolio.repository.RecruiterProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/propostas")
@CrossOrigin
public class ProposalController {

    @Autowired
    private RecruiterProposalRepository proposalRepository;

    @PostMapping
    public ResponseEntity<RecruiterProposal> registerProposal(@RequestBody RecruiterProposal proposal) {
        if (proposal.getCompanyName() == null || proposal.getFullProposalText() == null) {
            return ResponseEntity.badRequest().build();
        }
        RecruiterProposal saved = proposalRepository.save(proposal);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<RecruiterProposal>> getAllProposals() {
        return ResponseEntity.ok(proposalRepository.findAll());
    }
}
