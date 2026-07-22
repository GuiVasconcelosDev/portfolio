package br.com.guilherme.portfolio.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "recruiter_proposals")
public class RecruiterProposal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String roleType;
    private String stackPreference;
    private String minSalaryRange;

    @Column(columnDefinition = "TEXT")
    private String fullProposalText;

    private LocalDateTime createdAt;


    public RecruiterProposal(String companyName, String roleType, String stackPreference, String minSalaryRange, String fullProposalText) {
        this.companyName = companyName;
        this.roleType = roleType;
        this.stackPreference = stackPreference;
        this.minSalaryRange = minSalaryRange;
        this.fullProposalText = fullProposalText;
    }

    public RecruiterProposal() {}

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id; 
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName; 
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName; 
    }

    public String getRoleType() {
        return roleType; 
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType; 
    }

    public String getStackPreference() {
        return stackPreference; 
    }

    public void setStackPreference(String stackPreference) {
        this.stackPreference = stackPreference; 
    }

    public String getMinSalaryRange() {
        return minSalaryRange; 
    }

    public void setMinSalaryRange(String minSalaryRange) {
        this.minSalaryRange = minSalaryRange; 

    }

    public String getFullProposalText() {
        return fullProposalText; 
    }

    public void setFullProposalText(String fullProposalText) {
        this.fullProposalText = fullProposalText; 
    }

    public LocalDateTime getCreatedAt() {
        return createdAt; 
    }
}
