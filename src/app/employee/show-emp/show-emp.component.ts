import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList : any = [];
  emp:any;
  ModalTitle:string = "";

  ActivateAddEditEmpComp:boolean=false;


  ngOnInit(): void {
    this.refreshEmpList();
  }
  
  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      EmployeeSurname:"",
      DepartmentName:"",
      DateOfJoining:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item : any){
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data;
    });
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.delEmp(item.employeeId).subscribe(data=>{
        alert(data);
        this.refreshEmpList();
      })
    }
  }

}
