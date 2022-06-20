import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { StudentNameService } from '../../services/student-name.service';
// Import Models
import { StudentName } from '../../domain/schoolprpject_db/student-name';

// START - USED SERVICES
/**
* studentNameService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* studentNameService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of StudentName
 * @class StudentNameListComponent
 */
@Component({
    selector: 'app-student-name-list',
    templateUrl: './student-name-list.component.html',
    styleUrls: ['./student-name-list.component.css']
})
export class StudentNameListComponent implements OnInit {
    list: StudentName[];
    search: any = {};
    idSelected: string;
    constructor(
        private studentnameService: StudentNameService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.studentnameService.list().subscribe(list => this.list = list);
    }

    /**
     * Select StudentName to remove
     *
     * @param {string} id Id of the StudentName to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected StudentName
     */
    deleteItem() {
        this.studentnameService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
