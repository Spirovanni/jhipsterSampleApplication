import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from '../../shared';
import {
    ProgramMySuffixService,
    ProgramMySuffixPopupService,
    ProgramMySuffixComponent,
    ProgramMySuffixDetailComponent,
    ProgramMySuffixDialogComponent,
    ProgramMySuffixPopupComponent,
    ProgramMySuffixDeletePopupComponent,
    ProgramMySuffixDeleteDialogComponent,
    programRoute,
    programPopupRoute,
    ProgramMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...programRoute,
    ...programPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ProgramMySuffixComponent,
        ProgramMySuffixDetailComponent,
        ProgramMySuffixDialogComponent,
        ProgramMySuffixDeleteDialogComponent,
        ProgramMySuffixPopupComponent,
        ProgramMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        ProgramMySuffixComponent,
        ProgramMySuffixDialogComponent,
        ProgramMySuffixPopupComponent,
        ProgramMySuffixDeleteDialogComponent,
        ProgramMySuffixDeletePopupComponent,
    ],
    providers: [
        ProgramMySuffixService,
        ProgramMySuffixPopupService,
        ProgramMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationProgramMySuffixModule {}
