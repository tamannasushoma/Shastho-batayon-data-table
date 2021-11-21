import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'catagory-table',
  templateUrl: './catagory-table.component.html',
  styleUrls: ['./catagory-table.component.css']
})


export class CatagoryTableComponent implements OnInit {
 brand!: any;
  genName!: any;
  type!: any;
  manu!: any;
  selected!:any;
  
  
  tURL:any = 'http://172.16.212.171:8080/api/master_medicine/join'
  sURL:any = 'http://172.16.212.171:8080/drug_category'
  UPDATE_URL = 'http://172.16.212.171:8080/api/update/category'
  dtOptions: DataTables.Settings = {};
  medicines:any = [];
  categories:any =[];
  closeResult: string = '';

  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private http:HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 20,
      processing: true,
    };

    this.http.get(this.tURL)
    .subscribe( response =>{
      // console.log(response);
      this.medicines = response;

      this.dtTrigger.next();
    },
    (error) => {
      alert('Error Found!');
    });

    this.http.get(this.sURL)
    .subscribe( response =>{
      // console.log(response);
      this.categories = response;

    });
    
  }

  // update 
  onUpdate(med:any, category_id:any ){
    let updatedRow = {
      id: med.id,
      category: category_id
    }
    this.http.post(this.UPDATE_URL, updatedRow )
    .subscribe( response =>{
      console.log(response);
      window.location.reload();
    });
   }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onClick(med:any ){

   this.brand = med.brandName;
    this.genName= med.genericName;
    this.type = med.dosageBrandStrength;
    this.manu = med.manufacturer;

  
  }
  

  selectOption(id:any){
    console.log(id);
    console.log(this.selected);
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
