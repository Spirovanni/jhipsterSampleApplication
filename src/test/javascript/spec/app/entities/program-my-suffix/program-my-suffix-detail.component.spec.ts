/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { ProgramMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix-detail.component';
import { ProgramMySuffixService } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix.service';
import { ProgramMySuffix } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix.model';

describe('Component Tests', () => {

    describe('ProgramMySuffix Management Detail Component', () => {
        let comp: ProgramMySuffixDetailComponent;
        let fixture: ComponentFixture<ProgramMySuffixDetailComponent>;
        let service: ProgramMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [ProgramMySuffixDetailComponent],
                providers: [
                    ProgramMySuffixService
                ]
            })
            .overrideTemplate(ProgramMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProgramMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProgramMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new ProgramMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.program).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
