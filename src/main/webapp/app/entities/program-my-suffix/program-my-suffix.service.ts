import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { ProgramMySuffix } from './program-my-suffix.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ProgramMySuffixService {

    private resourceUrl = SERVER_API_URL + 'api/programs';

    constructor(private http: Http) { }

    create(program: ProgramMySuffix): Observable<ProgramMySuffix> {
        const copy = this.convert(program);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(program: ProgramMySuffix): Observable<ProgramMySuffix> {
        const copy = this.convert(program);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<ProgramMySuffix> {
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
     * Convert a returned JSON object to ProgramMySuffix.
     */
    private convertItemFromServer(json: any): ProgramMySuffix {
        const entity: ProgramMySuffix = Object.assign(new ProgramMySuffix(), json);
        return entity;
    }

    /**
     * Convert a ProgramMySuffix to a JSON which can be sent to the server.
     */
    private convert(program: ProgramMySuffix): ProgramMySuffix {
        const copy: ProgramMySuffix = Object.assign({}, program);
        return copy;
    }
}
