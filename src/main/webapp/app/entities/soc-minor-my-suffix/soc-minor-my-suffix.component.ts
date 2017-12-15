import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { SocMinorMySuffix } from './soc-minor-my-suffix.model';
import { SocMinorMySuffixService } from './soc-minor-my-suffix.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-soc-minor-my-suffix',
    templateUrl: './soc-minor-my-suffix.component.html'
})
export class SocMinorMySuffixComponent implements OnInit, OnDestroy {
socMinors: SocMinorMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private socMinorService: SocMinorMySuffixService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.socMinorService.query().subscribe(
            (res: ResponseWrapper) => {
                this.socMinors = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSocMinors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: SocMinorMySuffix) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    registerChangeInSocMinors() {
        this.eventSubscriber = this.eventManager.subscribe('socMinorListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
