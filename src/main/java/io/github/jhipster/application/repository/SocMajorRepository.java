package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.SocMajor;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the SocMajor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SocMajorRepository extends JpaRepository<SocMajor, Long> {

}
