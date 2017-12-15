/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SkillsMySuffixComponent } from '../../../../../../main/webapp/app/entities/skills-my-suffix/skills-my-suffix.component';
import { SkillsMySuffixService } from '../../../../../../main/webapp/app/entities/skills-my-suffix/skills-my-suffix.service';
import { SkillsMySuffix } from '../../../../../../main/webapp/app/entities/skills-my-suffix/skills-my-suffix.model';

describe('Component Tests', () => {

    describe('SkillsMySuffix Management Component', () => {
        let comp: SkillsMySuffixComponent;
        let fixture: ComponentFixture<SkillsMySuffixComponent>;
        let service: SkillsMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [SkillsMySuffixComponent],
                providers: [
                    SkillsMySuffixService
                ]
            })
            .overrideTemplate(SkillsMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SkillsMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SkillsMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new SkillsMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.skills[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
