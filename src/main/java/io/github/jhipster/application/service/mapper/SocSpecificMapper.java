package io.github.jhipster.application.service.mapper;

import io.github.jhipster.application.domain.*;
import io.github.jhipster.application.service.dto.SocSpecificDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity SocSpecific and its DTO SocSpecificDTO.
 */
@Mapper(componentModel = "spring", uses = {SocBroadMapper.class, SkillsMapper.class})
public interface SocSpecificMapper extends EntityMapper<SocSpecificDTO, SocSpecific> {

    @Mapping(source = "socBroad.id", target = "socBroadId")
    @Mapping(source = "skills.id", target = "skillsId")
    SocSpecificDTO toDto(SocSpecific socSpecific); 

    @Mapping(source = "socBroadId", target = "socBroad")
    @Mapping(source = "skillsId", target = "skills")
    @Mapping(target = "employees", ignore = true)
    SocSpecific toEntity(SocSpecificDTO socSpecificDTO);

    default SocSpecific fromId(Long id) {
        if (id == null) {
            return null;
        }
        SocSpecific socSpecific = new SocSpecific();
        socSpecific.setId(id);
        return socSpecific;
    }
}
