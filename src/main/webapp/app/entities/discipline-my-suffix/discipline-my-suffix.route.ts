import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { DisciplineMySuffixComponent } from './discipline-my-suffix.component';
import { DisciplineMySuffixDetailComponent } from './discipline-my-suffix-detail.component';
import { DisciplineMySuffixPopupComponent } from './discipline-my-suffix-dialog.component';
import { DisciplineMySuffixDeletePopupComponent } from './discipline-my-suffix-delete-dialog.component';

export const disciplineRoute: Routes = [
    {
        path: 'discipline-my-suffix',
        component: DisciplineMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'discipline-my-suffix/:id',
        component: DisciplineMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const disciplinePopupRoute: Routes = [
    {
        path: 'discipline-my-suffix-new',
        component: DisciplineMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'discipline-my-suffix/:id/edit',
        component: DisciplineMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'discipline-my-suffix/:id/delete',
        component: DisciplineMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
