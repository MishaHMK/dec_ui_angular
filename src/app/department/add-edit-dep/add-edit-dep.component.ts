import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId : string = "";
  DepartmentName : string = "";
  DepartmentLocation: string = "";


  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId
    this.DepartmentName = this.dep.DepartmentName
    this.DepartmentLocation = this.dep.DepartmentLocation
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName,
                DepartmentLocation:this.DepartmentLocation};
    this.service.addDep(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {departmentId:this.DepartmentId,
      departmentName:this.DepartmentName,
      departmentLocation:this.DepartmentLocation};
    this.service.updDep(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
