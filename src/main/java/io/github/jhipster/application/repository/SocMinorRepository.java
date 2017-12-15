package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.SocMinor;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the SocMinor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SocMinorRepository extends JpaRepository<SocMinor, Long> {

}
