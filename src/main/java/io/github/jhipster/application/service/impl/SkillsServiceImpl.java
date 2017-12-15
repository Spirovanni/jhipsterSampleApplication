package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.SkillsService;
import io.github.jhipster.application.domain.Skills;
import io.github.jhipster.application.repository.SkillsRepository;
import io.github.jhipster.application.service.dto.SkillsDTO;
import io.github.jhipster.application.service.mapper.SkillsMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing Skills.
 */
@Service
@Transactional
public class SkillsServiceImpl implements SkillsService{

    private final Logger log = LoggerFactory.getLogger(SkillsServiceImpl.class);

    private final SkillsRepository skillsRepository;

    private final SkillsMapper skillsMapper;

    public SkillsServiceImpl(SkillsRepository skillsRepository, SkillsMapper skillsMapper) {
        this.skillsRepository = skillsRepository;
        this.skillsMapper = skillsMapper;
    }

    /**
     * Save a skills.
     *
     * @param skillsDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SkillsDTO save(SkillsDTO skillsDTO) {
        log.debug("Request to save Skills : {}", skillsDTO);
        Skills skills = skillsMapper.toEntity(skillsDTO);
        skills = skillsRepository.save(skills);
        return skillsMapper.toDto(skills);
    }

    /**
     * Get all the skills.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<SkillsDTO> findAll() {
        log.debug("Request to get all Skills");
        return skillsRepository.findAll().stream()
            .map(skillsMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one skills by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public SkillsDTO findOne(Long id) {
        log.debug("Request to get Skills : {}", id);
        Skills skills = skillsRepository.findOne(id);
        return skillsMapper.toDto(skills);
    }

    /**
     * Delete the skills by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Skills : {}", id);
        skillsRepository.delete(id);
    }
}
