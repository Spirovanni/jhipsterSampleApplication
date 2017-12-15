package io.github.jhipster.application.service.mapper;

import io.github.jhipster.application.domain.*;
import io.github.jhipster.application.service.dto.SocMajorDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity SocMajor and its DTO SocMajorDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface SocMajorMapper extends EntityMapper<SocMajorDTO, SocMajor> {

    

    @Mapping(target = "socminors", ignore = true)
    SocMajor toEntity(SocMajorDTO socMajorDTO);

    default SocMajor fromId(Long id) {
        if (id == null) {
            return null;
        }
        SocMajor socMajor = new SocMajor();
        socMajor.setId(id);
        return socMajor;
    }
}
