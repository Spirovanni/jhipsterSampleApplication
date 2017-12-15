/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SocBroadMySuffixComponent } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix.component';
import { SocBroadMySuffixService } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix.service';
import { SocBroadMySuffix } from '../../../../../../main/webapp/app/entities/soc-broad-my-suffix/soc-broad-my-suffix.model';

describe('Component Tests', () => {

    describe('SocBroadMySuffix Management Component', () => {
        let comp: SocBroadMySuffixComponent;
        let fixture: ComponentFixture<SocBroadMySuffixComponent>;
        let service: SocBroadMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SocBroadMySuffixComponent],
                providers: [
                    SocBroadMySuffixService
                ]
            })
            .overrideTemplate(SocBroadMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocBroadMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocBroadMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new SocBroadMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.socBroads[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
