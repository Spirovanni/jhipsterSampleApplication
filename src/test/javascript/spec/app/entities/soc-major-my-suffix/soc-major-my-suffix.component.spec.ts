/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocMajorMySuffixComponent } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix.component';
import { SocMajorMySuffixService } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix.service';
import { SocMajorMySuffix } from '../../../../../../main/webapp/app/entities/soc-major-my-suffix/soc-major-my-suffix.model';

describe('Component Tests', () => {

    describe('SocMajorMySuffix Management Component', () => {
        let comp: SocMajorMySuffixComponent;
        let fixture: ComponentFixture<SocMajorMySuffixComponent>;
        let service: SocMajorMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocMajorMySuffixComponent],
                providers: [
                    SocMajorMySuffixService
                ]
            })
            .overrideTemplate(SocMajorMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocMajorMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocMajorMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new SocMajorMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.socMajors[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
