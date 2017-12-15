import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from '../../shared';
import {
    SocMinorMySuffixService,
    SocMinorMySuffixPopupService,
    SocMinorMySuffixComponent,
    SocMinorMySuffixDetailComponent,
    SocMinorMySuffixDialogComponent,
    SocMinorMySuffixPopupComponent,
    SocMinorMySuffixDeletePopupComponent,
    SocMinorMySuffixDeleteDialogComponent,
    socMinorRoute,
    socMinorPopupRoute,
} from './';

const ENTITY_STATES = [
    ...socMinorRoute,
    ...socMinorPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        SocMinorMySuffixComponent,
        SocMinorMySuffixDetailComponent,
        SocMinorMySuffixDialogComponent,
        SocMinorMySuffixDeleteDialogComponent,
        SocMinorMySuffixPopupComponent,
        SocMinorMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        SocMinorMySuffixComponent,
        SocMinorMySuffixDialogComponent,
        SocMinorMySuffixPopupComponent,
        SocMinorMySuffixDeleteDialogComponent,
        SocMinorMySuffixDeletePopupComponent,
    ],
    providers: [
        SocMinorMySuffixService,
        SocMinorMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationSocMinorMySuffixModule {}
