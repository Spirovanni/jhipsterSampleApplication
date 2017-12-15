/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { ResourceMySuffixComponent } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix.component';
import { ResourceMySuffixService } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix.service';
import { ResourceMySuffix } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix.model';

describe('Component Tests', () => {

    describe('ResourceMySuffix Management Component', () => {
        let comp: ResourceMySuffixComponent;
        let fixture: ComponentFixture<ResourceMySuffixComponent>;
        let service: ResourceMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [ResourceMySuffixComponent],
                providers: [
                    ResourceMySuffixService
                ]
            })
            .overrideTemplate(ResourceMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ResourceMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ResourceMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new ResourceMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.resources[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
