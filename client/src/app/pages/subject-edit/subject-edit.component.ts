// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { SubjectService } from '../../services/subject.service';
import { ExamService } from '../../services/exam.service';
import { StudentNameService } from '../../services/student-name.service';
// Import Models
import { Subject } from '../../domain/schoolprpject_db/subject';
import { Exam } from '../../domain/schoolprpject_db/exam';
import { StudentName } from '../../domain/schoolprpject_db/student-name';

// START - USED SERVICES
/**
* subjectService.create
*	@description CRUD ACTION create
*
* subjectService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* subjectService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* examService.list
*	@description CRUD ACTION list
*
* studentNameService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Subject
 */
@Component({
    selector: 'app-subject-edit',
    templateUrl: 'subject-edit.component.html',
    styleUrls: ['subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
    item: Subject;
    listExam: Exam[];
    listSubject: StudentName[];
    model: Subject;
    formValid: Boolean;

    constructor(
    private subjectService: SubjectService,
    private examService: ExamService,
    private studentnameService: StudentNameService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Subject();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.subjectService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.examService.list().subscribe(list => this.listExam = list);
            this.studentnameService.list().subscribe(list => this.listSubject = list);
        });
    }


    /**
     * Save Subject
     *
     * @param {boolean} formValid Form validity check
     * @param Subject item Subject to save
     */
    save(formValid: boolean, item: Subject): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.subjectService.update(item).subscribe(data => this.goBack());
            } else {
                this.subjectService.create(item).subscribe(data => this.goBack());
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



