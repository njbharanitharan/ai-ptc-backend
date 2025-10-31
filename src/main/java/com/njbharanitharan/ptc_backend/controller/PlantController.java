package com.njbharanitharan.ptc_backend.controller;

import com.njbharanitharan.ptc_backend.model.Plant;
import com.njbharanitharan.ptc_backend.repository.PlantRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/plants")
@CrossOrigin(origins = "*")
public class PlantController {

    private final PlantRepository repo;

    public PlantController(PlantRepository repo) {
        this.repo = repo;
    }

    // GET /api/plants
    @GetMapping
    public List<Plant> getAll() {
        return repo.findAll();
    }

    // GET /api/plants/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Plant> getOne(@PathVariable Long id) {
        Optional<Plant> p = repo.findById(id);
        return p.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // GET /api/plants/name/{name}
    @GetMapping("/name/{name}")
    public ResponseEntity<Plant> getByName(@PathVariable String name) {
        Plant p = repo.findByNameIgnoreCase(name);
        return p == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(p);
    }

    // POST /api/plants
    @PostMapping
    public ResponseEntity<Plant> create(@RequestBody Plant plant) {
        Plant saved = repo.save(plant);
        return ResponseEntity.ok(saved);
    }

    // PUT /api/plants/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Plant> update(@PathVariable Long id, @RequestBody Plant plant) {
        return repo.findById(id).map(existing -> {
            existing.setName(plant.getName());
            existing.setDescription(plant.getDescription());
            existing.setProtocolJson(plant.getProtocolJson());
            repo.save(existing);
            return ResponseEntity.ok(existing);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE /api/plants/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
