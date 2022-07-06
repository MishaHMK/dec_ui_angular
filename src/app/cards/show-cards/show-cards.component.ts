import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css']
})
export class ShowCardsComponent implements OnInit {

  constructor(private service: SharedService) { }

  CardList : any = [];
  ActivateAddEditCardComp:boolean=false;
  ActivateShowOwner:boolean=false;
  ModalTitle:string = "";
  card:any;

  ngOnInit(): void {
    this.refreshCardList();
  }

  refreshCardList(){
    this.service.getCardList().subscribe(data => {
      this.CardList = data;
    });
  }

  addClick(){
    this.card={
      PaymentDetailId:0,
      CardOwnerId:"",
      CardNumber:"",
      ExpirationDate:"",
      SecurityCode:""
    }
    this.ModalTitle="Add Сard";
    this.ActivateAddEditCardComp=true;

  }

  editClick(item : any){
    this.card = item;
    this.ModalTitle = "Edit Сard";
    this.ActivateAddEditCardComp = true;
  }

  showOwner(item : any){
    this.card = item;
    this.ModalTitle = "Show Owner";
    this.ActivateShowOwner = true;
  }

  closeClick(){
    this.ActivateAddEditCardComp=false;
    this.refreshCardList();
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.delCard(item.paymentDetailId).subscribe(data=>{
        alert(data);
        this.refreshCardList();
      })
    }
  }

 

}
