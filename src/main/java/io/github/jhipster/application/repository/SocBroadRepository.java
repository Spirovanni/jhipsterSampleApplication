package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.SocBroad;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the SocBroad entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SocBroadRepository extends JpaRepository<SocBroad, Long> {

}
