package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.SocBroadService;
import io.github.jhipster.application.domain.SocBroad;
import io.github.jhipster.application.repository.SocBroadRepository;
import io.github.jhipster.application.service.dto.SocBroadDTO;
import io.github.jhipster.application.service.mapper.SocBroadMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing SocBroad.
 */
@Service
@Transactional
public class SocBroadServiceImpl implements SocBroadService{

    private final Logger log = LoggerFactory.getLogger(SocBroadServiceImpl.class);

    private final SocBroadRepository socBroadRepository;

    private final SocBroadMapper socBroadMapper;

    public SocBroadServiceImpl(SocBroadRepository socBroadRepository, SocBroadMapper socBroadMapper) {
        this.socBroadRepository = socBroadRepository;
        this.socBroadMapper = socBroadMapper;
    }

    /**
     * Save a socBroad.
     *
     * @param socBroadDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SocBroadDTO save(SocBroadDTO socBroadDTO) {
        log.debug("Request to save SocBroad : {}", socBroadDTO);
        SocBroad socBroad = socBroadMapper.toEntity(socBroadDTO);
        socBroad = socBroadRepository.save(socBroad);
        return socBroadMapper.toDto(socBroad);
    }

    /**
     * Get all the socBroads.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<SocBroadDTO> findAll() {
        log.debug("Request to get all SocBroads");
        return socBroadRepository.findAll().stream()
            .map(socBroadMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one socBroad by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public SocBroadDTO findOne(Long id) {
        log.debug("Request to get SocBroad : {}", id);
        SocBroad socBroad = socBroadRepository.findOne(id);
        return socBroadMapper.toDto(socBroad);
    }

    /**
     * Delete the socBroad by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete SocBroad : {}", id);
        socBroadRepository.delete(id);
    }
}
