/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { DisciplineMySuffixComponent } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.component';
import { DisciplineMySuffixService } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.service';
import { DisciplineMySuffix } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.model';

describe('Component Tests', () => {

    describe('DisciplineMySuffix Management Component', () => {
        let comp: DisciplineMySuffixComponent;
        let fixture: ComponentFixture<DisciplineMySuffixComponent>;
        let service: DisciplineMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [DisciplineMySuffixComponent],
                providers: [
                    DisciplineMySuffixService
                ]
            })
            .overrideTemplate(DisciplineMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DisciplineMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DisciplineMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new DisciplineMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.disciplines[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
