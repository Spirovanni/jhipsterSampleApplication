package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.SocMinorService;
import io.github.jhipster.application.domain.SocMinor;
import io.github.jhipster.application.repository.SocMinorRepository;
import io.github.jhipster.application.service.dto.SocMinorDTO;
import io.github.jhipster.application.service.mapper.SocMinorMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing SocMinor.
 */
@Service
@Transactional
public class SocMinorServiceImpl implements SocMinorService{

    private final Logger log = LoggerFactory.getLogger(SocMinorServiceImpl.class);

    private final SocMinorRepository socMinorRepository;

    private final SocMinorMapper socMinorMapper;

    public SocMinorServiceImpl(SocMinorRepository socMinorRepository, SocMinorMapper socMinorMapper) {
        this.socMinorRepository = socMinorRepository;
        this.socMinorMapper = socMinorMapper;
    }

    /**
     * Save a socMinor.
     *
     * @param socMinorDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SocMinorDTO save(SocMinorDTO socMinorDTO) {
        log.debug("Request to save SocMinor : {}", socMinorDTO);
        SocMinor socMinor = socMinorMapper.toEntity(socMinorDTO);
        socMinor = socMinorRepository.save(socMinor);
        return socMinorMapper.toDto(socMinor);
    }

    /**
     * Get all the socMinors.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<SocMinorDTO> findAll() {
        log.debug("Request to get all SocMinors");
        return socMinorRepository.findAll().stream()
            .map(socMinorMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one socMinor by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public SocMinorDTO findOne(Long id) {
        log.debug("Request to get SocMinor : {}", id);
        SocMinor socMinor = socMinorRepository.findOne(id);
        return socMinorMapper.toDto(socMinor);
    }

    /**
     * Delete the socMinor by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete SocMinor : {}", id);
        socMinorRepository.delete(id);
    }
}
