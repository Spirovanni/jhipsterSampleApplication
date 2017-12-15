/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { ResourceMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix-detail.component';
import { ResourceMySuffixService } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix.service';
import { ResourceMySuffix } from '../../../../../../main/webapp/app/entities/resource-my-suffix/resource-my-suffix.model';

describe('Component Tests', () => {

    describe('ResourceMySuffix Management Detail Component', () => {
        let comp: ResourceMySuffixDetailComponent;
        let fixture: ComponentFixture<ResourceMySuffixDetailComponent>;
        let service: ResourceMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [ResourceMySuffixDetailComponent],
                providers: [
                    ResourceMySuffixService
                ]
            })
            .overrideTemplate(ResourceMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ResourceMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ResourceMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new ResourceMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.resource).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
