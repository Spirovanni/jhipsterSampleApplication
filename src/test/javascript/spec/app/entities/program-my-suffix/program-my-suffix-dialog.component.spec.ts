/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { ProgramMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix-dialog.component';
import { ProgramMySuffixService } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix.service';
import { ProgramMySuffix } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix.model';
import { CourseMySuffixService } from '../../../../../../main/webapp/app/entities/course-my-suffix';
import { DisciplineMySuffixService } from '../../../../../../main/webapp/app/entities/discipline-my-suffix';

describe('Component Tests', () => {

    describe('ProgramMySuffix Management Dialog Component', () => {
        let comp: ProgramMySuffixDialogComponent;
        let fixture: ComponentFixture<ProgramMySuffixDialogComponent>;
        let service: ProgramMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [ProgramMySuffixDialogComponent],
                providers: [
                    CourseMySuffixService,
                    DisciplineMySuffixService,
                    ProgramMySuffixService
                ]
            })
            .overrideTemplate(ProgramMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProgramMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProgramMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ProgramMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.program = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'programListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ProgramMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.program = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'programListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
