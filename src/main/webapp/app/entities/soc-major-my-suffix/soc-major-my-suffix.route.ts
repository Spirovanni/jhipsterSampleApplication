import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SocMajorMySuffixComponent } from './soc-major-my-suffix.component';
import { SocMajorMySuffixDetailComponent } from './soc-major-my-suffix-detail.component';
import { SocMajorMySuffixPopupComponent } from './soc-major-my-suffix-dialog.component';
import { SocMajorMySuffixDeletePopupComponent } from './soc-major-my-suffix-delete-dialog.component';

export const socMajorRoute: Routes = [
    {
        path: 'soc-major-my-suffix',
        component: SocMajorMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMajor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'soc-major-my-suffix/:id',
        component: SocMajorMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMajor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const socMajorPopupRoute: Routes = [
    {
        path: 'soc-major-my-suffix-new',
        component: SocMajorMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMajor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'soc-major-my-suffix/:id/edit',
        component: SocMajorMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMajor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'soc-major-my-suffix/:id/delete',
        component: SocMajorMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMajor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
