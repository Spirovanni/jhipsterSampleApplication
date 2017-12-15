import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from '../../shared';
import {
    SkillsMySuffixService,
    SkillsMySuffixPopupService,
    SkillsMySuffixComponent,
    SkillsMySuffixDetailComponent,
    SkillsMySuffixDialogComponent,
    SkillsMySuffixPopupComponent,
    SkillsMySuffixDeletePopupComponent,
    SkillsMySuffixDeleteDialogComponent,
    skillsRoute,
    skillsPopupRoute,
} from './';

const ENTITY_STATES = [
    ...skillsRoute,
    ...skillsPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        SkillsMySuffixComponent,
        SkillsMySuffixDetailComponent,
        SkillsMySuffixDialogComponent,
        SkillsMySuffixDeleteDialogComponent,
        SkillsMySuffixPopupComponent,
        SkillsMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        SkillsMySuffixComponent,
        SkillsMySuffixDialogComponent,
        SkillsMySuffixPopupComponent,
        SkillsMySuffixDeleteDialogComponent,
        SkillsMySuffixDeletePopupComponent,
    ],
    providers: [
        SkillsMySuffixService,
        SkillsMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationSkillsMySuffixModule {}
