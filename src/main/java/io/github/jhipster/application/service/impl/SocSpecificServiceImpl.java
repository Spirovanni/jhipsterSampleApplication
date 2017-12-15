package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.SocSpecificService;
import io.github.jhipster.application.domain.SocSpecific;
import io.github.jhipster.application.repository.SocSpecificRepository;
import io.github.jhipster.application.service.dto.SocSpecificDTO;
import io.github.jhipster.application.service.mapper.SocSpecificMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing SocSpecific.
 */
@Service
@Transactional
public class SocSpecificServiceImpl implements SocSpecificService{

    private final Logger log = LoggerFactory.getLogger(SocSpecificServiceImpl.class);

    private final SocSpecificRepository socSpecificRepository;

    private final SocSpecificMapper socSpecificMapper;

    public SocSpecificServiceImpl(SocSpecificRepository socSpecificRepository, SocSpecificMapper socSpecificMapper) {
        this.socSpecificRepository = socSpecificRepository;
        this.socSpecificMapper = socSpecificMapper;
    }

    /**
     * Save a socSpecific.
     *
     * @param socSpecificDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SocSpecificDTO save(SocSpecificDTO socSpecificDTO) {
        log.debug("Request to save SocSpecific : {}", socSpecificDTO);
        SocSpecific socSpecific = socSpecificMapper.toEntity(socSpecificDTO);
        socSpecific = socSpecificRepository.save(socSpecific);
        return socSpecificMapper.toDto(socSpecific);
    }

    /**
     * Get all the socSpecifics.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<SocSpecificDTO> findAll(Pageable pageable) {
        log.debug("Request to get all SocSpecifics");
        return socSpecificRepository.findAll(pageable)
            .map(socSpecificMapper::toDto);
    }

    /**
     * Get one socSpecific by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public SocSpecificDTO findOne(Long id) {
        log.debug("Request to get SocSpecific : {}", id);
        SocSpecific socSpecific = socSpecificRepository.findOne(id);
        return socSpecificMapper.toDto(socSpecific);
    }

    /**
     * Delete the socSpecific by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete SocSpecific : {}", id);
        socSpecificRepository.delete(id);
    }
}
