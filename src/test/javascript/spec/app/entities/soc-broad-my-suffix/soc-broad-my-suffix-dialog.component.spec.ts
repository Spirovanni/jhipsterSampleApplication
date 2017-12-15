/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocBroadMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix-dialog.component';
import { SocBroadMySuffixService } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix.service';
import { SocBroadMySuffix } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix.model';
import { SocMinorMySuffixService } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix';

describe('Component Tests', () => {

    describe('SocBroadMySuffix Management Dialog Component', () => {
        let comp: SocBroadMySuffixDialogComponent;
        let fixture: ComponentFixture<SocBroadMySuffixDialogComponent>;
        let service: SocBroadMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocBroadMySuffixDialogComponent],
                providers: [
                    SocMinorMySuffixService,
                    SocBroadMySuffixService
                ]
            })
            .overrideTemplate(SocBroadMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocBroadMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocBroadMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new SocBroadMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.socBroad = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'socBroadListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new SocBroadMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.socBroad = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'socBroadListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
