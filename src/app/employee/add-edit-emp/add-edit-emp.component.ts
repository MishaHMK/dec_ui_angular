import { Component, OnInit, Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId : string = "";
  EmployeeName : string = "";
  EmployeeSurname: string = "";
  DepartmentName: string = "";
  DateOfJoining: string = "";
  PhotoFileName: string = "anonymous.png";
  PhotoFilePath:string = "";

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }


  loadDepartmentList(){
    this.service.getAllDepNames().subscribe((data:any)=>{
      this.DepartmentsList=data;
      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.DepartmentName=this.emp.DepartmentName;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFileName=this.service.PhotoUrl+this.PhotoFileName;
    });
  }


  addEmployee(){
    var val = {EmployeeId: this.EmployeeId,
                EmployeeName: this.EmployeeName,
                EmployeeSurname: this.EmployeeSurname,
                DepartmentName: this.DepartmentName,
                DateOfJoining: this.DateOfJoining};
    this.service.addEmp(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {employeeId: this.EmployeeId,
      employeeName: this.EmployeeName,
      employeeSurname: this.EmployeeSurname,
      departmentName: this.DepartmentName,
      dateOfJoining: this.DateOfJoining,
      photoFileName: this.PhotoFileName};
    this.service.updEmp(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event : any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadPhoto(formData).subscribe((data)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }


}
