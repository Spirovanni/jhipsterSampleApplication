import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from '../../shared';
import {
    LessonMySuffixService,
    LessonMySuffixPopupService,
    LessonMySuffixComponent,
    LessonMySuffixDetailComponent,
    LessonMySuffixDialogComponent,
    LessonMySuffixPopupComponent,
    LessonMySuffixDeletePopupComponent,
    LessonMySuffixDeleteDialogComponent,
    lessonRoute,
    lessonPopupRoute,
} from './';

const ENTITY_STATES = [
    ...lessonRoute,
    ...lessonPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LessonMySuffixComponent,
        LessonMySuffixDetailComponent,
        LessonMySuffixDialogComponent,
        LessonMySuffixDeleteDialogComponent,
        LessonMySuffixPopupComponent,
        LessonMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        LessonMySuffixComponent,
        LessonMySuffixDialogComponent,
        LessonMySuffixPopupComponent,
        LessonMySuffixDeleteDialogComponent,
        LessonMySuffixDeletePopupComponent,
    ],
    providers: [
        LessonMySuffixService,
        LessonMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationLessonMySuffixModule {}
