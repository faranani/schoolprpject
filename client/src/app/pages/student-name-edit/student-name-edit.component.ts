// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentNameService } from '../../services/student-name.service';
import { ExamService } from '../../services/exam.service';
import { SubjectService } from '../../services/subject.service';
// Import Models
import { StudentName } from '../../domain/schoolprpject_db/student-name';
import { Exam } from '../../domain/schoolprpject_db/exam';
import { Subject } from '../../domain/schoolprpject_db/subject';

// START - USED SERVICES
/**
* studentNameService.create
*	@description CRUD ACTION create
*
* studentNameService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* studentNameService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* examService.findBystudent
*	@description CRUD ACTION findBystudent
*	@param Objectid key Id of model to search for
*
* subjectService.findBysubject
*	@description CRUD ACTION findBysubject
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a StudentName
 */
@Component({
    selector: 'app-student-name-edit',
    templateUrl: 'student-name-edit.component.html',
    styleUrls: ['student-name-edit.component.css']
})
export class StudentNameEditComponent implements OnInit {
    item: StudentName;
    externalExam_student: Exam[];
    externalSubject_subject: Subject[];
    model: StudentName;
    formValid: Boolean;

    constructor(
    private studentnameService: StudentNameService,
    private examService: ExamService,
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new StudentName();
        this.externalExam_student = [];
        this.externalSubject_subject = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentnameService.get(id).subscribe(item => this.item = item);
                this.examService.findByStudent(id).subscribe(list => this.externalExam_student = list);
                this.subjectService.findBySubject(id).subscribe(list => this.externalSubject_subject = list);
            }
            // Get relations
        });
    }


    /**
     * Save StudentName
     *
     * @param {boolean} formValid Form validity check
     * @param StudentName item StudentName to save
     */
    save(formValid: boolean, item: StudentName): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentnameService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentnameService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



