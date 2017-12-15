import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterSampleApplicationSocMajorMySuffixModule } from './soc-major-my-suffix/soc-major-my-suffix.module';
import { JhipsterSampleApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterSampleApplicationSocMinorMySuffixModule } from './soc-minor-my-suffix/soc-minor-my-suffix.module';
import { JhipsterSampleApplicationSocBroadMySuffixModule } from './soc-broad-my-suffix/soc-broad-my-suffix.module';
import { JhipsterSampleApplicationSocSpecificMySuffixModule } from './soc-specific-my-suffix/soc-specific-my-suffix.module';
import { JhipsterSampleApplicationSkillsMySuffixModule } from './skills-my-suffix/skills-my-suffix.module';
import { JhipsterSampleApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterSampleApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterSampleApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterSampleApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterSampleApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterSampleApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
import { JhipsterSampleApplicationDisciplineMySuffixModule } from './discipline-my-suffix/discipline-my-suffix.module';
import { JhipsterSampleApplicationProgramMySuffixModule } from './program-my-suffix/program-my-suffix.module';
import { JhipsterSampleApplicationCourseMySuffixModule } from './course-my-suffix/course-my-suffix.module';
import { JhipsterSampleApplicationLessonMySuffixModule } from './lesson-my-suffix/lesson-my-suffix.module';
import { JhipsterSampleApplicationResourceMySuffixModule } from './resource-my-suffix/resource-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleApplicationRegionMySuffixModule,
        JhipsterSampleApplicationSocMajorMySuffixModule,
        JhipsterSampleApplicationCountryMySuffixModule,
        JhipsterSampleApplicationSocMinorMySuffixModule,
        JhipsterSampleApplicationSocBroadMySuffixModule,
        JhipsterSampleApplicationSocSpecificMySuffixModule,
        JhipsterSampleApplicationSkillsMySuffixModule,
        JhipsterSampleApplicationLocationMySuffixModule,
        JhipsterSampleApplicationDepartmentMySuffixModule,
        JhipsterSampleApplicationTaskMySuffixModule,
        JhipsterSampleApplicationEmployeeMySuffixModule,
        JhipsterSampleApplicationJobMySuffixModule,
        JhipsterSampleApplicationJobHistoryMySuffixModule,
        JhipsterSampleApplicationDisciplineMySuffixModule,
        JhipsterSampleApplicationProgramMySuffixModule,
        JhipsterSampleApplicationCourseMySuffixModule,
        JhipsterSampleApplicationLessonMySuffixModule,
        JhipsterSampleApplicationResourceMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
