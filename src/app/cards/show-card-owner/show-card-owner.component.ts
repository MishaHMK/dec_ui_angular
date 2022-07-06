import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-card-owner',
  templateUrl: './show-card-owner.component.html',
  styleUrls: ['./show-card-owner.component.css']
})
export class ShowCardOwnerComponent implements OnInit {

  constructor(private service : SharedService) { }
  @Input() card:any;
  PaymentDetailId: string = "";
  CardOwnerId:string = "";
  emp:any;

  found : boolean = false;
  
  ngOnInit(): void {
    this.CardOwnerId = this.card.CardOwnerId;
    this.PaymentDetailId = this.card.PaymentDetailId;
  }


  showOwner(item: any){ 
     this.service.getCardEmp(item.paymentDetailId).subscribe(res=>{
      alert(res.toString());
      this.emp = res;
      this.found = true;
    });
  }


}
