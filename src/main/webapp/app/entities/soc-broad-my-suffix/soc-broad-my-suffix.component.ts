import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { SocBroadMySuffix } from './soc-broad-my-suffix.model';
import { SocBroadMySuffixService } from './soc-broad-my-suffix.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-soc-broad-my-suffix',
    templateUrl: './soc-broad-my-suffix.component.html'
})
export class SocBroadMySuffixComponent implements OnInit, OnDestroy {
socBroads: SocBroadMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private socBroadService: SocBroadMySuffixService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.socBroadService.query().subscribe(
            (res: ResponseWrapper) => {
                this.socBroads = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSocBroads();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: SocBroadMySuffix) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    registerChangeInSocBroads() {
        this.eventSubscriber = this.eventManager.subscribe('socBroadListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
