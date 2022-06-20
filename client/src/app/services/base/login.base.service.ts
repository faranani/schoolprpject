/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE loginBaseService PLEASE EDIT ../login.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Login } from '../../domain/schoolprpject_db/login';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../login.service.ts
 */

/*
 * SCHEMA DB login
 *
	{
		password: {
			type: 'String'
		},
		username: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class LoginBaseService {

    contextUrl: string = environment.endpoint + '/login';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * loginService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Login): Observable<Login> {
        return this.http
            .post<Login>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * loginService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * loginService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Login> {
        return this.http
            .get<Login>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * loginService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Login[]> {
        return this.http
            .get<Login[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * loginService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Login): Observable<Login> {
        return this.http
            .post<Login>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
