/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { DisciplineMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix-detail.component';
import { DisciplineMySuffixService } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.service';
import { DisciplineMySuffix } from '../../../../../../main/webapp/app/entities/discipline-my-suffix/discipline-my-suffix.model';

describe('Component Tests', () => {

    describe('DisciplineMySuffix Management Detail Component', () => {
        let comp: DisciplineMySuffixDetailComponent;
        let fixture: ComponentFixture<DisciplineMySuffixDetailComponent>;
        let service: DisciplineMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [DisciplineMySuffixDetailComponent],
                providers: [
                    DisciplineMySuffixService
                ]
            })
            .overrideTemplate(DisciplineMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DisciplineMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DisciplineMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new DisciplineMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.discipline).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
