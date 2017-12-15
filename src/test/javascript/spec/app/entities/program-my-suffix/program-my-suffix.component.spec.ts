/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { ProgramMySuffixComponent } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix.component';
import { ProgramMySuffixService } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix.service';
import { ProgramMySuffix } from '../../../../../../main/webapp/app/entities/program-my-suffix/program-my-suffix.model';

describe('Component Tests', () => {

    describe('ProgramMySuffix Management Component', () => {
        let comp: ProgramMySuffixComponent;
        let fixture: ComponentFixture<ProgramMySuffixComponent>;
        let service: ProgramMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [ProgramMySuffixComponent],
                providers: [
                    ProgramMySuffixService
                ]
            })
            .overrideTemplate(ProgramMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProgramMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProgramMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new ProgramMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.programs[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
