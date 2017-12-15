import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SocMinorMySuffixComponent } from './soc-minor-my-suffix.component';
import { SocMinorMySuffixDetailComponent } from './soc-minor-my-suffix-detail.component';
import { SocMinorMySuffixPopupComponent } from './soc-minor-my-suffix-dialog.component';
import { SocMinorMySuffixDeletePopupComponent } from './soc-minor-my-suffix-delete-dialog.component';

export const socMinorRoute: Routes = [
    {
        path: 'soc-minor-my-suffix',
        component: SocMinorMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMinor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'soc-minor-my-suffix/:id',
        component: SocMinorMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMinor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const socMinorPopupRoute: Routes = [
    {
        path: 'soc-minor-my-suffix-new',
        component: SocMinorMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMinor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'soc-minor-my-suffix/:id/edit',
        component: SocMinorMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMinor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'soc-minor-my-suffix/:id/delete',
        component: SocMinorMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterSampleApplicationApp.socMinor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
