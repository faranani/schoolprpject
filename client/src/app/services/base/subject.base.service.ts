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
 *  FOR CUSTOMIZE subjectBaseService PLEASE EDIT ../subject.service.ts
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
import { Subject } from '../../domain/schoolprpject_db/subject';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../subject.service.ts
 */

/*
 * SCHEMA DB subject
 *
	{
		subjectname: {
			type: 'String'
		},
		totalSub: {
			type: 'Number'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		exam: {
			type: Schema.ObjectId,
			ref : "subject"
		},
		subject: {
			type: Schema.ObjectId,
			ref : "subject"
		},
	}
 *
 */
@Injectable()
export class SubjectBaseService {

    contextUrl: string = environment.endpoint + '/subject';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * subjectService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Subject): Observable<Subject> {
        return this.http
            .post<Subject>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * subjectService.delete
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
    * subjectService.findBysubject
    *   @description CRUD ACTION findBysubject
    *   @param Objectid key Id of model to search for
    *
    */
    findBySubject(id: string): Observable<Subject[]> {
        return this.http
            .get<Subject[]>(this.contextUrl + '/findBysubject/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * subjectService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Subject> {
        return this.http
            .get<Subject>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * subjectService.getexam
    *   @description CRUD ACTION getexam
    *
    */
    getExam(id: string): Observable<any[]> {
        return this.http
            .get<any[]>(this.contextUrl + '/' + id + 'getExam')
            .pipe(
                map(response => response)
            );
     }

    /**
    * subjectService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Subject[]> {
        return this.http
            .get<Subject[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * subjectService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Subject): Observable<Subject> {
        return this.http
            .post<Subject>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
