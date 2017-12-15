/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SkillsMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/skills-my-suffix/skills-my-suffix-detail.component';
import { SkillsMySuffixService } from '../../../../../../main/webapp/app/entities/skills-my-suffix/skills-my-suffix.service';
import { SkillsMySuffix } from '../../../../../../main/webapp/app/entities/skills-my-suffix/skills-my-suffix.model';

describe('Component Tests', () => {

    describe('SkillsMySuffix Management Detail Component', () => {
        let comp: SkillsMySuffixDetailComponent;
        let fixture: ComponentFixture<SkillsMySuffixDetailComponent>;
        let service: SkillsMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SkillsMySuffixDetailComponent],
                providers: [
                    SkillsMySuffixService
                ]
            })
            .overrideTemplate(SkillsMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SkillsMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SkillsMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new SkillsMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.skills).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
