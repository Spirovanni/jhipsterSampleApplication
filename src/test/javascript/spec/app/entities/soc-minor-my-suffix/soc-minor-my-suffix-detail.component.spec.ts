/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocMinorMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix-detail.component';
import { SocMinorMySuffixService } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix.service';
import { SocMinorMySuffix } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix.model';

describe('Component Tests', () => {

    describe('SocMinorMySuffix Management Detail Component', () => {
        let comp: SocMinorMySuffixDetailComponent;
        let fixture: ComponentFixture<SocMinorMySuffixDetailComponent>;
        let service: SocMinorMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocMinorMySuffixDetailComponent],
                providers: [
                    SocMinorMySuffixService
                ]
            })
            .overrideTemplate(SocMinorMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocMinorMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocMinorMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new SocMinorMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.socMinor).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
