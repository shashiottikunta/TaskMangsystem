import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-emplpoyee-list',
  templateUrl: './emplpoyee-list.component.html',
  styleUrls: ['./emplpoyee-list.component.css']
})
export class EmplpoyeeListComponent {
  @ViewChild('employeeData') Modal:any;

  addEmployee(value: string) {
    this.openModal();
    console.log(value);
  }

  openModal() {
    this.Modal.open();
  }

  closeModal() {
    this.Modal.close();
  }

}
