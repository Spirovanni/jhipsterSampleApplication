package io.github.jhipster.application.web.rest;

import com.codahale.metrics.annotation.Timed;
import io.github.jhipster.application.service.SkillsService;
import io.github.jhipster.application.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.application.web.rest.util.HeaderUtil;
import io.github.jhipster.application.service.dto.SkillsDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Skills.
 */
@RestController
@RequestMapping("/api")
public class SkillsResource {

    private final Logger log = LoggerFactory.getLogger(SkillsResource.class);

    private static final String ENTITY_NAME = "skills";

    private final SkillsService skillsService;

    public SkillsResource(SkillsService skillsService) {
        this.skillsService = skillsService;
    }

    /**
     * POST  /skills : Create a new skills.
     *
     * @param skillsDTO the skillsDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new skillsDTO, or with status 400 (Bad Request) if the skills has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/skills")
    @Timed
    public ResponseEntity<SkillsDTO> createSkills(@RequestBody SkillsDTO skillsDTO) throws URISyntaxException {
        log.debug("REST request to save Skills : {}", skillsDTO);
        if (skillsDTO.getId() != null) {
            throw new BadRequestAlertException("A new skills cannot already have an ID", ENTITY_NAME, "idexists");
        }
        SkillsDTO result = skillsService.save(skillsDTO);
        return ResponseEntity.created(new URI("/api/skills/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /skills : Updates an existing skills.
     *
     * @param skillsDTO the skillsDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated skillsDTO,
     * or with status 400 (Bad Request) if the skillsDTO is not valid,
     * or with status 500 (Internal Server Error) if the skillsDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/skills")
    @Timed
    public ResponseEntity<SkillsDTO> updateSkills(@RequestBody SkillsDTO skillsDTO) throws URISyntaxException {
        log.debug("REST request to update Skills : {}", skillsDTO);
        if (skillsDTO.getId() == null) {
            return createSkills(skillsDTO);
        }
        SkillsDTO result = skillsService.save(skillsDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, skillsDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /skills : get all the skills.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of skills in body
     */
    @GetMapping("/skills")
    @Timed
    public List<SkillsDTO> getAllSkills() {
        log.debug("REST request to get all Skills");
        return skillsService.findAll();
        }

    /**
     * GET  /skills/:id : get the "id" skills.
     *
     * @param id the id of the skillsDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the skillsDTO, or with status 404 (Not Found)
     */
    @GetMapping("/skills/{id}")
    @Timed
    public ResponseEntity<SkillsDTO> getSkills(@PathVariable Long id) {
        log.debug("REST request to get Skills : {}", id);
        SkillsDTO skillsDTO = skillsService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(skillsDTO));
    }

    /**
     * DELETE  /skills/:id : delete the "id" skills.
     *
     * @param id the id of the skillsDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/skills/{id}")
    @Timed
    public ResponseEntity<Void> deleteSkills(@PathVariable Long id) {
        log.debug("REST request to delete Skills : {}", id);
        skillsService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
