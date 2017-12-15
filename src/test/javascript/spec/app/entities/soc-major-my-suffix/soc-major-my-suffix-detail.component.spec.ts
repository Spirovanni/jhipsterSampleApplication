/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocMajorMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix-detail.component';
import { SocMajorMySuffixService } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix.service';
import { SocMajorMySuffix } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix.model';

describe('Component Tests', () => {

    describe('SocMajorMySuffix Management Detail Component', () => {
        let comp: SocMajorMySuffixDetailComponent;
        let fixture: ComponentFixture<SocMajorMySuffixDetailComponent>;
        let service: SocMajorMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocMajorMySuffixDetailComponent],
                providers: [
                    SocMajorMySuffixService
                ]
            })
            .overrideTemplate(SocMajorMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocMajorMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocMajorMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new SocMajorMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.socMajor).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
