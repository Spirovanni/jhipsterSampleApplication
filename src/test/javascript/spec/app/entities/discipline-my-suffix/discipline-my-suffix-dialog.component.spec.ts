/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { DisciplineMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix-dialog.component';
import { DisciplineMySuffixService } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.service';
import { DisciplineMySuffix } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.model';
import { ProgramMySuffixService } from '../../../../../../main/webapp/app/entities/program-my-suffix';

describe('Component Tests', () => {

    describe('DisciplineMySuffix Management Dialog Component', () => {
        let comp: DisciplineMySuffixDialogComponent;
        let fixture: ComponentFixture<DisciplineMySuffixDialogComponent>;
        let service: DisciplineMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [DisciplineMySuffixDialogComponent],
                providers: [
                    ProgramMySuffixService,
                    DisciplineMySuffixService
                ]
            })
            .overrideTemplate(DisciplineMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DisciplineMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DisciplineMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new DisciplineMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.discipline = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'disciplineListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new DisciplineMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.discipline = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'disciplineListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
