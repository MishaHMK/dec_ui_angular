import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.css']
})
export class AddEditCardComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() card:any;
  PaymentDetailId:string = "";
  CardOwnerId:string = "";
  CardNumber:string = "";
  ExpirationDate:string = "";
  SecurityCode:string = "";

  ngOnInit(): void {
    this.PaymentDetailId = this.card.PaymentDetailId;
    this.CardOwnerId = this.card.CardOwnerId;
    this.CardNumber = this.card.CardNumber;
    this.ExpirationDate = this.card.ExpirationDate;
    this.SecurityCode = this.card.SecurityCode;
  }

  addCard(){
    var val = {PaymentDetailId: this.PaymentDetailId,
                CardOwnerId: this.CardOwnerId,
                CardNumber: this.CardNumber,
                ExpirationDate: this.ExpirationDate,   
                SecurityCode: this.SecurityCode
               };
    this.service.addCard(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCard(){
    var val = {PaymentDetailId: this.PaymentDetailId,
                CardOwnerId: this.CardOwnerId,
                CardNumber: this.CardNumber,
                ExpirationDate: this.ExpirationDate,   
                SecurityCode: this.SecurityCode
     };
    this.service.updCard(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
