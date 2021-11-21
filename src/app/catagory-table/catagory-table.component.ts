import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CatagoryTableService } from '../catagory-table.service';



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
  
  
  
  
  
  dtOptions: DataTables.Settings = {};
  medicines:any = [];
  categories:any =[];
  closeResult: string = '';

  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private service:CatagoryTableService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 20,
      processing: true,
    };

    //--------->>> GETTING DATA FROM SERVER----------------->>>>>>
    this.service.getData().subscribe( response =>{
      // console.log(response);
      this.medicines = response;

      this.dtTrigger.next();
    },
    (error) => {
      alert('Error Found!');
    });

    
    //--------->>> GETTING CATEGORIES FROM SERVER------------>>>>>>
    this.service.getCatagories().subscribe( response =>{
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
    
     //--------->>> UPDATING CATEGORIES IN DATA TABLE------------>>>>>>
    this.service.updateCategory(updatedRow).subscribe( response =>{
      console.log(response);
      window.location.reload();
    });
   }
// ------------POPULATING MODAL BY PASSING DATA FROM SERVER----->>>>>>>

  onClick(med:any ){

    this.brand = med.brandName;
    this.genName= med.genericName;
    this.type = med.dosageBrandStrength;
    this.manu = med.manufacturer;
 }

  //  -------->>> METHOD FOR OPEN MODAL----------------------->>>>>>>>>>> 
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  selectOption(id:any){
    console.log(id);
    console.log(this.selected);
  }
  
 

}
