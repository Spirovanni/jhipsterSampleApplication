package io.github.jhipster.application.service;

import io.github.jhipster.application.service.dto.SkillsDTO;
import java.util.List;

/**
 * Service Interface for managing Skills.
 */
public interface SkillsService {

    /**
     * Save a skills.
     *
     * @param skillsDTO the entity to save
     * @return the persisted entity
     */
    SkillsDTO save(SkillsDTO skillsDTO);

    /**
     * Get all the skills.
     *
     * @return the list of entities
     */
    List<SkillsDTO> findAll();

    /**
     * Get the "id" skills.
     *
     * @param id the id of the entity
     * @return the entity
     */
    SkillsDTO findOne(Long id);

    /**
     * Delete the "id" skills.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
