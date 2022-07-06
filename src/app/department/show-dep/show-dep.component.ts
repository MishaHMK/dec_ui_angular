import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }


  DepartmentList : any = [];
  dep:any;
  ModalTitle:string = "";

  ActivateAddEditDepComp:boolean=false;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentLocationFilter:string="";
  DepartmentListWithoutFilter:any=[];



  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:"",
      DepartmentLocation:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item : any){
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;

  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
      this.DepartmentListWithoutFilter=data;
    });
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.delDep(item.departmentId).subscribe(data=>{
        alert(data);
        this.refreshDepList();
      })
    }
  }

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;
    var DepartmentLocationFilter = this.DepartmentLocationFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el : any){
        return el.departmentId?.toString().toLowerCase().includes(
          DepartmentIdFilter?.toString().trim().toLowerCase()
        )&&
        el.departmentName?.toString().toLowerCase().includes(
          DepartmentNameFilter?.toString().trim().toLowerCase()
        )&&
        el.departmentLocation?.toString().toLowerCase().includes(
          DepartmentLocationFilter?.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop : any, asc: boolean){
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function(a : any, b: any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
