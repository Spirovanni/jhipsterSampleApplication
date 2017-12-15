import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { SkillsMySuffix } from './skills-my-suffix.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class SkillsMySuffixService {

    private resourceUrl = SERVER_API_URL + 'api/skills';

    constructor(private http: Http) { }

    create(skills: SkillsMySuffix): Observable<SkillsMySuffix> {
        const copy = this.convert(skills);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(skills: SkillsMySuffix): Observable<SkillsMySuffix> {
        const copy = this.convert(skills);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<SkillsMySuffix> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to SkillsMySuffix.
     */
    private convertItemFromServer(json: any): SkillsMySuffix {
        const entity: SkillsMySuffix = Object.assign(new SkillsMySuffix(), json);
        return entity;
    }

    /**
     * Convert a SkillsMySuffix to a JSON which can be sent to the server.
     */
    private convert(skills: SkillsMySuffix): SkillsMySuffix {
        const copy: SkillsMySuffix = Object.assign({}, skills);
        return copy;
    }
}
