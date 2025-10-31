package com.njbharanitharan.ptc_backend.repository;

import com.njbharanitharan.ptc_backend.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {
    Plant findByNameIgnoreCase(String name);
}
