package io.github.jhipster.application.service.mapper;

import io.github.jhipster.application.domain.*;
import io.github.jhipster.application.service.dto.SocBroadDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity SocBroad and its DTO SocBroadDTO.
 */
@Mapper(componentModel = "spring", uses = {SocMinorMapper.class})
public interface SocBroadMapper extends EntityMapper<SocBroadDTO, SocBroad> {

    @Mapping(source = "socMinor.id", target = "socMinorId")
    SocBroadDTO toDto(SocBroad socBroad); 

    @Mapping(source = "socMinorId", target = "socMinor")
    @Mapping(target = "socspecifics", ignore = true)
    SocBroad toEntity(SocBroadDTO socBroadDTO);

    default SocBroad fromId(Long id) {
        if (id == null) {
            return null;
        }
        SocBroad socBroad = new SocBroad();
        socBroad.setId(id);
        return socBroad;
    }
}
