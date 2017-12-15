package io.github.jhipster.application.service;

import io.github.jhipster.application.service.dto.SocMinorDTO;
import java.util.List;

/**
 * Service Interface for managing SocMinor.
 */
public interface SocMinorService {

    /**
     * Save a socMinor.
     *
     * @param socMinorDTO the entity to save
     * @return the persisted entity
     */
    SocMinorDTO save(SocMinorDTO socMinorDTO);

    /**
     * Get all the socMinors.
     *
     * @return the list of entities
     */
    List<SocMinorDTO> findAll();

    /**
     * Get the "id" socMinor.
     *
     * @param id the id of the entity
     * @return the entity
     */
    SocMinorDTO findOne(Long id);

    /**
     * Delete the "id" socMinor.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
