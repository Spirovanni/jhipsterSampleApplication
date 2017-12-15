package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.SocMajorService;
import io.github.jhipster.application.domain.SocMajor;
import io.github.jhipster.application.repository.SocMajorRepository;
import io.github.jhipster.application.service.dto.SocMajorDTO;
import io.github.jhipster.application.service.mapper.SocMajorMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing SocMajor.
 */
@Service
@Transactional
public class SocMajorServiceImpl implements SocMajorService{

    private final Logger log = LoggerFactory.getLogger(SocMajorServiceImpl.class);

    private final SocMajorRepository socMajorRepository;

    private final SocMajorMapper socMajorMapper;

    public SocMajorServiceImpl(SocMajorRepository socMajorRepository, SocMajorMapper socMajorMapper) {
        this.socMajorRepository = socMajorRepository;
        this.socMajorMapper = socMajorMapper;
    }

    /**
     * Save a socMajor.
     *
     * @param socMajorDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SocMajorDTO save(SocMajorDTO socMajorDTO) {
        log.debug("Request to save SocMajor : {}", socMajorDTO);
        SocMajor socMajor = socMajorMapper.toEntity(socMajorDTO);
        socMajor = socMajorRepository.save(socMajor);
        return socMajorMapper.toDto(socMajor);
    }

    /**
     * Get all the socMajors.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<SocMajorDTO> findAll() {
        log.debug("Request to get all SocMajors");
        return socMajorRepository.findAll().stream()
            .map(socMajorMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one socMajor by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public SocMajorDTO findOne(Long id) {
        log.debug("Request to get SocMajor : {}", id);
        SocMajor socMajor = socMajorRepository.findOne(id);
        return socMajorMapper.toDto(socMajor);
    }

    /**
     * Delete the socMajor by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete SocMajor : {}", id);
        socMajorRepository.delete(id);
    }
}
