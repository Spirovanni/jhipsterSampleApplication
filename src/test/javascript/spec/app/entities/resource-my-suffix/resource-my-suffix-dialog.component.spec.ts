/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { ResourceMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix-dialog.component';
import { ResourceMySuffixService } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix.service';
import { ResourceMySuffix } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix.model';
import { DisciplineMySuffixService } from '../../../../../../main/webapp/app/entities/discipline-my-suffix';
import { ProgramMySuffixService } from '../../../../../../main/webapp/app/entities/program-my-suffix';
import { CourseMySuffixService } from '../../../../../../main/webapp/app/entities/course-my-suffix';
import { LessonMySuffixService } from '../../../../../../main/webapp/app/entities/lesson-my-suffix';

describe('Component Tests', () => {

    describe('ResourceMySuffix Management Dialog Component', () => {
        let comp: ResourceMySuffixDialogComponent;
        let fixture: ComponentFixture<ResourceMySuffixDialogComponent>;
        let service: ResourceMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [ResourceMySuffixDialogComponent],
                providers: [
                    DisciplineMySuffixService,
                    ProgramMySuffixService,
                    CourseMySuffixService,
                    LessonMySuffixService,
                    ResourceMySuffixService
                ]
            })
            .overrideTemplate(ResourceMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ResourceMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ResourceMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ResourceMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.resource = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'resourceListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ResourceMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.resource = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'resourceListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
