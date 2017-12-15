package io.github.jhipster.application.web.rest;

import io.github.jhipster.application.JhipsterSampleApplicationApp;

import io.github.jhipster.application.domain.SocBroad;
import io.github.jhipster.application.repository.SocBroadRepository;
import io.github.jhipster.application.service.SocBroadService;
import io.github.jhipster.application.service.dto.SocBroadDTO;
import io.github.jhipster.application.service.mapper.SocBroadMapper;
import io.github.jhipster.application.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Base64Utils;

import javax.persistence.EntityManager;
import java.util.List;

import static io.github.jhipster.application.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the SocBroadResource REST controller.
 *
 * @see SocBroadResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JhipsterSampleApplicationApp.class)
public class SocBroadResourceIntTest {

    private static final String DEFAULT_SOC_BROAD_NAME = "AAAAAAAAAA";
    private static final String UPDATED_SOC_BROAD_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_SOC_BROAD_CODE = "AAAAAAAAAA";
    private static final String UPDATED_SOC_BROAD_CODE = "BBBBBBBBBB";

    private static final byte[] DEFAULT_SOC_BROAD_AVATOR = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_SOC_BROAD_AVATOR = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_SOC_BROAD_AVATOR_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_SOC_BROAD_AVATOR_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_SOC_BROAD_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_SOC_BROAD_DESCRIPTION = "BBBBBBBBBB";

    private static final String DEFAULT_SOC_BROAD_URL = "AAAAAAAAAA";
    private static final String UPDATED_SOC_BROAD_URL = "BBBBBBBBBB";

    private static final String DEFAULT_SOC_BROAD_PREVIEW_IMAGE = "AAAAAAAAAA";
    private static final String UPDATED_SOC_BROAD_PREVIEW_IMAGE = "BBBBBBBBBB";

    @Autowired
    private SocBroadRepository socBroadRepository;

    @Autowired
    private SocBroadMapper socBroadMapper;

    @Autowired
    private SocBroadService socBroadService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restSocBroadMockMvc;

    private SocBroad socBroad;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final SocBroadResource socBroadResource = new SocBroadResource(socBroadService);
        this.restSocBroadMockMvc = MockMvcBuilders.standaloneSetup(socBroadResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static SocBroad createEntity(EntityManager em) {
        SocBroad socBroad = new SocBroad()
            .socBroadName(DEFAULT_SOC_BROAD_NAME)
            .socBroadCode(DEFAULT_SOC_BROAD_CODE)
            .socBroadAvator(DEFAULT_SOC_BROAD_AVATOR)
            .socBroadAvatorContentType(DEFAULT_SOC_BROAD_AVATOR_CONTENT_TYPE)
            .socBroadDescription(DEFAULT_SOC_BROAD_DESCRIPTION)
            .socBroadURL(DEFAULT_SOC_BROAD_URL)
            .socBroadPreviewImage(DEFAULT_SOC_BROAD_PREVIEW_IMAGE);
        return socBroad;
    }

    @Before
    public void initTest() {
        socBroad = createEntity(em);
    }

    @Test
    @Transactional
    public void createSocBroad() throws Exception {
        int databaseSizeBeforeCreate = socBroadRepository.findAll().size();

        // Create the SocBroad
        SocBroadDTO socBroadDTO = socBroadMapper.toDto(socBroad);
        restSocBroadMockMvc.perform(post("/api/soc-broads")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(socBroadDTO)))
            .andExpect(status().isCreated());

        // Validate the SocBroad in the database
        List<SocBroad> socBroadList = socBroadRepository.findAll();
        assertThat(socBroadList).hasSize(databaseSizeBeforeCreate + 1);
        SocBroad testSocBroad = socBroadList.get(socBroadList.size() - 1);
        assertThat(testSocBroad.getSocBroadName()).isEqualTo(DEFAULT_SOC_BROAD_NAME);
        assertThat(testSocBroad.getSocBroadCode()).isEqualTo(DEFAULT_SOC_BROAD_CODE);
        assertThat(testSocBroad.getSocBroadAvator()).isEqualTo(DEFAULT_SOC_BROAD_AVATOR);
        assertThat(testSocBroad.getSocBroadAvatorContentType()).isEqualTo(DEFAULT_SOC_BROAD_AVATOR_CONTENT_TYPE);
        assertThat(testSocBroad.getSocBroadDescription()).isEqualTo(DEFAULT_SOC_BROAD_DESCRIPTION);
        assertThat(testSocBroad.getSocBroadURL()).isEqualTo(DEFAULT_SOC_BROAD_URL);
        assertThat(testSocBroad.getSocBroadPreviewImage()).isEqualTo(DEFAULT_SOC_BROAD_PREVIEW_IMAGE);
    }

    @Test
    @Transactional
    public void createSocBroadWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = socBroadRepository.findAll().size();

        // Create the SocBroad with an existing ID
        socBroad.setId(1L);
        SocBroadDTO socBroadDTO = socBroadMapper.toDto(socBroad);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSocBroadMockMvc.perform(post("/api/soc-broads")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(socBroadDTO)))
            .andExpect(status().isBadRequest());

        // Validate the SocBroad in the database
        List<SocBroad> socBroadList = socBroadRepository.findAll();
        assertThat(socBroadList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllSocBroads() throws Exception {
        // Initialize the database
        socBroadRepository.saveAndFlush(socBroad);

        // Get all the socBroadList
        restSocBroadMockMvc.perform(get("/api/soc-broads?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(socBroad.getId().intValue())))
            .andExpect(jsonPath("$.[*].socBroadName").value(hasItem(DEFAULT_SOC_BROAD_NAME.toString())))
            .andExpect(jsonPath("$.[*].socBroadCode").value(hasItem(DEFAULT_SOC_BROAD_CODE.toString())))
            .andExpect(jsonPath("$.[*].socBroadAvatorContentType").value(hasItem(DEFAULT_SOC_BROAD_AVATOR_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].socBroadAvator").value(hasItem(Base64Utils.encodeToString(DEFAULT_SOC_BROAD_AVATOR))))
            .andExpect(jsonPath("$.[*].socBroadDescription").value(hasItem(DEFAULT_SOC_BROAD_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].socBroadURL").value(hasItem(DEFAULT_SOC_BROAD_URL.toString())))
            .andExpect(jsonPath("$.[*].socBroadPreviewImage").value(hasItem(DEFAULT_SOC_BROAD_PREVIEW_IMAGE.toString())));
    }

    @Test
    @Transactional
    public void getSocBroad() throws Exception {
        // Initialize the database
        socBroadRepository.saveAndFlush(socBroad);

        // Get the socBroad
        restSocBroadMockMvc.perform(get("/api/soc-broads/{id}", socBroad.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(socBroad.getId().intValue()))
            .andExpect(jsonPath("$.socBroadName").value(DEFAULT_SOC_BROAD_NAME.toString()))
            .andExpect(jsonPath("$.socBroadCode").value(DEFAULT_SOC_BROAD_CODE.toString()))
            .andExpect(jsonPath("$.socBroadAvatorContentType").value(DEFAULT_SOC_BROAD_AVATOR_CONTENT_TYPE))
            .andExpect(jsonPath("$.socBroadAvator").value(Base64Utils.encodeToString(DEFAULT_SOC_BROAD_AVATOR)))
            .andExpect(jsonPath("$.socBroadDescription").value(DEFAULT_SOC_BROAD_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.socBroadURL").value(DEFAULT_SOC_BROAD_URL.toString()))
            .andExpect(jsonPath("$.socBroadPreviewImage").value(DEFAULT_SOC_BROAD_PREVIEW_IMAGE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingSocBroad() throws Exception {
        // Get the socBroad
        restSocBroadMockMvc.perform(get("/api/soc-broads/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSocBroad() throws Exception {
        // Initialize the database
        socBroadRepository.saveAndFlush(socBroad);
        int databaseSizeBeforeUpdate = socBroadRepository.findAll().size();

        // Update the socBroad
        SocBroad updatedSocBroad = socBroadRepository.findOne(socBroad.getId());
        // Disconnect from session so that the updates on updatedSocBroad are not directly saved in db
        em.detach(updatedSocBroad);
        updatedSocBroad
            .socBroadName(UPDATED_SOC_BROAD_NAME)
            .socBroadCode(UPDATED_SOC_BROAD_CODE)
            .socBroadAvator(UPDATED_SOC_BROAD_AVATOR)
            .socBroadAvatorContentType(UPDATED_SOC_BROAD_AVATOR_CONTENT_TYPE)
            .socBroadDescription(UPDATED_SOC_BROAD_DESCRIPTION)
            .socBroadURL(UPDATED_SOC_BROAD_URL)
            .socBroadPreviewImage(UPDATED_SOC_BROAD_PREVIEW_IMAGE);
        SocBroadDTO socBroadDTO = socBroadMapper.toDto(updatedSocBroad);

        restSocBroadMockMvc.perform(put("/api/soc-broads")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(socBroadDTO)))
            .andExpect(status().isOk());

        // Validate the SocBroad in the database
        List<SocBroad> socBroadList = socBroadRepository.findAll();
        assertThat(socBroadList).hasSize(databaseSizeBeforeUpdate);
        SocBroad testSocBroad = socBroadList.get(socBroadList.size() - 1);
        assertThat(testSocBroad.getSocBroadName()).isEqualTo(UPDATED_SOC_BROAD_NAME);
        assertThat(testSocBroad.getSocBroadCode()).isEqualTo(UPDATED_SOC_BROAD_CODE);
        assertThat(testSocBroad.getSocBroadAvator()).isEqualTo(UPDATED_SOC_BROAD_AVATOR);
        assertThat(testSocBroad.getSocBroadAvatorContentType()).isEqualTo(UPDATED_SOC_BROAD_AVATOR_CONTENT_TYPE);
        assertThat(testSocBroad.getSocBroadDescription()).isEqualTo(UPDATED_SOC_BROAD_DESCRIPTION);
        assertThat(testSocBroad.getSocBroadURL()).isEqualTo(UPDATED_SOC_BROAD_URL);
        assertThat(testSocBroad.getSocBroadPreviewImage()).isEqualTo(UPDATED_SOC_BROAD_PREVIEW_IMAGE);
    }

    @Test
    @Transactional
    public void updateNonExistingSocBroad() throws Exception {
        int databaseSizeBeforeUpdate = socBroadRepository.findAll().size();

        // Create the SocBroad
        SocBroadDTO socBroadDTO = socBroadMapper.toDto(socBroad);

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restSocBroadMockMvc.perform(put("/api/soc-broads")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(socBroadDTO)))
            .andExpect(status().isCreated());

        // Validate the SocBroad in the database
        List<SocBroad> socBroadList = socBroadRepository.findAll();
        assertThat(socBroadList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteSocBroad() throws Exception {
        // Initialize the database
        socBroadRepository.saveAndFlush(socBroad);
        int databaseSizeBeforeDelete = socBroadRepository.findAll().size();

        // Get the socBroad
        restSocBroadMockMvc.perform(delete("/api/soc-broads/{id}", socBroad.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<SocBroad> socBroadList = socBroadRepository.findAll();
        assertThat(socBroadList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(SocBroad.class);
        SocBroad socBroad1 = new SocBroad();
        socBroad1.setId(1L);
        SocBroad socBroad2 = new SocBroad();
        socBroad2.setId(socBroad1.getId());
        assertThat(socBroad1).isEqualTo(socBroad2);
        socBroad2.setId(2L);
        assertThat(socBroad1).isNotEqualTo(socBroad2);
        socBroad1.setId(null);
        assertThat(socBroad1).isNotEqualTo(socBroad2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(SocBroadDTO.class);
        SocBroadDTO socBroadDTO1 = new SocBroadDTO();
        socBroadDTO1.setId(1L);
        SocBroadDTO socBroadDTO2 = new SocBroadDTO();
        assertThat(socBroadDTO1).isNotEqualTo(socBroadDTO2);
        socBroadDTO2.setId(socBroadDTO1.getId());
        assertThat(socBroadDTO1).isEqualTo(socBroadDTO2);
        socBroadDTO2.setId(2L);
        assertThat(socBroadDTO1).isNotEqualTo(socBroadDTO2);
        socBroadDTO1.setId(null);
        assertThat(socBroadDTO1).isNotEqualTo(socBroadDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(socBroadMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(socBroadMapper.fromId(null)).isNull();
    }
}
