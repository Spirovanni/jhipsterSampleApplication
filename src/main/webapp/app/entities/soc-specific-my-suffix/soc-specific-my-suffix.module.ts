import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from '../../shared';
import {
    SocSpecificMySuffixService,
    SocSpecificMySuffixPopupService,
    SocSpecificMySuffixComponent,
    SocSpecificMySuffixDetailComponent,
    SocSpecificMySuffixDialogComponent,
    SocSpecificMySuffixPopupComponent,
    SocSpecificMySuffixDeletePopupComponent,
    SocSpecificMySuffixDeleteDialogComponent,
    socSpecificRoute,
    socSpecificPopupRoute,
    SocSpecificMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...socSpecificRoute,
    ...socSpecificPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        SocSpecificMySuffixComponent,
        SocSpecificMySuffixDetailComponent,
        SocSpecificMySuffixDialogComponent,
        SocSpecificMySuffixDeleteDialogComponent,
        SocSpecificMySuffixPopupComponent,
        SocSpecificMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        SocSpecificMySuffixComponent,
        SocSpecificMySuffixDialogComponent,
        SocSpecificMySuffixPopupComponent,
        SocSpecificMySuffixDeleteDialogComponent,
        SocSpecificMySuffixDeletePopupComponent,
    ],
    providers: [
        SocSpecificMySuffixService,
        SocSpecificMySuffixPopupService,
        SocSpecificMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationSocSpecificMySuffixModule {}
