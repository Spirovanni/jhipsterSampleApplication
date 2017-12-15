import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { SocMajorMySuffix } from './soc-major-my-suffix.model';
import { SocMajorMySuffixService } from './soc-major-my-suffix.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-soc-major-my-suffix',
    templateUrl: './soc-major-my-suffix.component.html'
})
export class SocMajorMySuffixComponent implements OnInit, OnDestroy {
socMajors: SocMajorMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private socMajorService: SocMajorMySuffixService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.socMajorService.query().subscribe(
            (res: ResponseWrapper) => {
                this.socMajors = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSocMajors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: SocMajorMySuffix) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    registerChangeInSocMajors() {
        this.eventSubscriber = this.eventManager.subscribe('socMajorListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
