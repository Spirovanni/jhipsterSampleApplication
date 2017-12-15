/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocMinorMySuffixComponent } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix.component';
import { SocMinorMySuffixService } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix.service';
import { SocMinorMySuffix } from '../../../../../../main/webapp/app/entities/soc-minor-my-suffix/soc-minor-my-suffix.model';

describe('Component Tests', () => {

    describe('SocMinorMySuffix Management Component', () => {
        let comp: SocMinorMySuffixComponent;
        let fixture: ComponentFixture<SocMinorMySuffixComponent>;
        let service: SocMinorMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocMinorMySuffixComponent],
                providers: [
                    SocMinorMySuffixService
                ]
            })
            .overrideTemplate(SocMinorMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocMinorMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocMinorMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new SocMinorMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.socMinors[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
