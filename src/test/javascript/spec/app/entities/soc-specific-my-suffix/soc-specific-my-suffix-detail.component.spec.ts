/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocSpecificMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix-detail.component';
import { SocSpecificMySuffixService } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix.service';
import { SocSpecificMySuffix } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix.model';

describe('Component Tests', () => {

    describe('SocSpecificMySuffix Management Detail Component', () => {
        let comp: SocSpecificMySuffixDetailComponent;
        let fixture: ComponentFixture<SocSpecificMySuffixDetailComponent>;
        let service: SocSpecificMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocSpecificMySuffixDetailComponent],
                providers: [
                    SocSpecificMySuffixService
                ]
            })
            .overrideTemplate(SocSpecificMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocSpecificMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocSpecificMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new SocSpecificMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.socSpecific).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
