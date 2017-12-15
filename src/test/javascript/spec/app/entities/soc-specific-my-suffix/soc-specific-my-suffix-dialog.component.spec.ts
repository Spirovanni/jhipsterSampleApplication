/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocSpecificMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix-dialog.component';
import { SocSpecificMySuffixService } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix.service';
import { SocSpecificMySuffix } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix.model';
import { SocBroadMySuffixService } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix';
import { SkillsMySuffixService } from '../../../../../../main/webapp/app/entities/skills-my-suffix';

describe('Component Tests', () => {

    describe('SocSpecificMySuffix Management Dialog Component', () => {
        let comp: SocSpecificMySuffixDialogComponent;
        let fixture: ComponentFixture<SocSpecificMySuffixDialogComponent>;
        let service: SocSpecificMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocSpecificMySuffixDialogComponent],
                providers: [
                    SocBroadMySuffixService,
                    SkillsMySuffixService,
                    SocSpecificMySuffixService
                ]
            })
            .overrideTemplate(SocSpecificMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocSpecificMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocSpecificMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new SocSpecificMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.socSpecific = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'socSpecificListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new SocSpecificMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.socSpecific = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'socSpecificListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
