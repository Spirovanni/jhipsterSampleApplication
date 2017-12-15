package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Skills;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Skills entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SkillsRepository extends JpaRepository<Skills, Long> {

}
