/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocMinorMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix-delete-dialog.component';
import { SocMinorMySuffixService } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix.service';

describe('Component Tests', () => {

    describe('SocMinorMySuffix Management Delete Component', () => {
        let comp: SocMinorMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<SocMinorMySuffixDeleteDialogComponent>;
        let service: SocMinorMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocMinorMySuffixDeleteDialogComponent],
                providers: [
                    SocMinorMySuffixService
                ]
            })
            .overrideTemplate(SocMinorMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocMinorMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocMinorMySuffixService);
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
