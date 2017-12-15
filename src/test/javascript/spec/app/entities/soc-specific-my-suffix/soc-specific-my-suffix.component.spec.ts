/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocSpecificMySuffixComponent } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix.component';
import { SocSpecificMySuffixService } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix.service';
import { SocSpecificMySuffix } from '../../../../../../main/webapp/app/entities/soc-specific-my-suffix/soc-specific-my-suffix.model';

describe('Component Tests', () => {

    describe('SocSpecificMySuffix Management Component', () => {
        let comp: SocSpecificMySuffixComponent;
        let fixture: ComponentFixture<SocSpecificMySuffixComponent>;
        let service: SocSpecificMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocSpecificMySuffixComponent],
                providers: [
                    SocSpecificMySuffixService
                ]
            })
            .overrideTemplate(SocSpecificMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocSpecificMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocSpecificMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new SocSpecificMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.socSpecifics[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
