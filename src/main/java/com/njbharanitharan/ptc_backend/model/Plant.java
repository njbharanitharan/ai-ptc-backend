package com.njbharanitharan.ptc_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "plants")
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(columnDefinition = "text")
    private String description;

    @Column(columnDefinition = "text")
    private String protocolJson; // store protocol as JSON string or plain text

    // Constructors
    public Plant() {}

    public Plant(String name, String description, String protocolJson) {
        this.name = name;
        this.description = description;
        this.protocolJson = protocolJson;
    }

    // Getters / setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getProtocolJson() { return protocolJson; }
    public void setProtocolJson(String protocolJson) { this.protocolJson = protocolJson; }
}
