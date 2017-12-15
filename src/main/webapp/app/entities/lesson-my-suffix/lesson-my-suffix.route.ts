import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { LessonMySuffixComponent } from './lesson-my-suffix.component';
import { LessonMySuffixDetailComponent } from './lesson-my-suffix-detail.component';
import { LessonMySuffixPopupComponent } from './lesson-my-suffix-dialog.component';
import { LessonMySuffixDeletePopupComponent } from './lesson-my-suffix-delete-dialog.component';

export const lessonRoute: Routes = [
    {
        path: 'lesson-my-suffix',
        component: LessonMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'lesson-my-suffix/:id',
        component: LessonMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const lessonPopupRoute: Routes = [
    {
        path: 'lesson-my-suffix-new',
        component: LessonMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'lesson-my-suffix/:id/edit',
        component: LessonMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'lesson-my-suffix/:id/delete',
        component: LessonMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
