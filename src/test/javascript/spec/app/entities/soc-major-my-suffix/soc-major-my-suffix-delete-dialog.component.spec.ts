/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocMajorMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix-delete-dialog.component';
import { SocMajorMySuffixService } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix.service';

describe('Component Tests', () => {

    describe('SocMajorMySuffix Management Delete Component', () => {
        let comp: SocMajorMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<SocMajorMySuffixDeleteDialogComponent>;
        let service: SocMajorMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocMajorMySuffixDeleteDialogComponent],
                providers: [
                    SocMajorMySuffixService
                ]
            })
            .overrideTemplate(SocMajorMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocMajorMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocMajorMySuffixService);
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
