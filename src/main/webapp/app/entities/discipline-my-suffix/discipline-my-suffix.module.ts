import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from '../../shared';
import {
    DisciplineMySuffixService,
    DisciplineMySuffixPopupService,
    DisciplineMySuffixComponent,
    DisciplineMySuffixDetailComponent,
    DisciplineMySuffixDialogComponent,
    DisciplineMySuffixPopupComponent,
    DisciplineMySuffixDeletePopupComponent,
    DisciplineMySuffixDeleteDialogComponent,
    disciplineRoute,
    disciplinePopupRoute,
} from './';

const ENTITY_STATES = [
    ...disciplineRoute,
    ...disciplinePopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DisciplineMySuffixComponent,
        DisciplineMySuffixDetailComponent,
        DisciplineMySuffixDialogComponent,
        DisciplineMySuffixDeleteDialogComponent,
        DisciplineMySuffixPopupComponent,
        DisciplineMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        DisciplineMySuffixComponent,
        DisciplineMySuffixDialogComponent,
        DisciplineMySuffixPopupComponent,
        DisciplineMySuffixDeleteDialogComponent,
        DisciplineMySuffixDeletePopupComponent,
    ],
    providers: [
        DisciplineMySuffixService,
        DisciplineMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationDisciplineMySuffixModule {}
