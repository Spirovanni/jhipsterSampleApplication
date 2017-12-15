/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { DisciplineMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix-delete-dialog.component';
import { DisciplineMySuffixService } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.service';

describe('Component Tests', () => {

    describe('DisciplineMySuffix Management Delete Component', () => {
        let comp: DisciplineMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<DisciplineMySuffixDeleteDialogComponent>;
        let service: DisciplineMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [DisciplineMySuffixDeleteDialogComponent],
                providers: [
                    DisciplineMySuffixService
                ]
            })
            .overrideTemplate(DisciplineMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DisciplineMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DisciplineMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
