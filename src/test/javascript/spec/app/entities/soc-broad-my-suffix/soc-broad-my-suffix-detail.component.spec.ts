/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocBroadMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix-detail.component';
import { SocBroadMySuffixService } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix.service';
import { SocBroadMySuffix } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix.model';

describe('Component Tests', () => {

    describe('SocBroadMySuffix Management Detail Component', () => {
        let comp: SocBroadMySuffixDetailComponent;
        let fixture: ComponentFixture<SocBroadMySuffixDetailComponent>;
        let service: SocBroadMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocBroadMySuffixDetailComponent],
                providers: [
                    SocBroadMySuffixService
                ]
            })
            .overrideTemplate(SocBroadMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocBroadMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocBroadMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new SocBroadMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.socBroad).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
