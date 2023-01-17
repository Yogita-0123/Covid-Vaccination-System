import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
    name = "EditCovid-19";

    candidateList:any = [
    {
      name:"Yogita",
      age:20,
      Phone:7218006039,
      adharNo:45678980,

    },
    {
      name:"Mrunali",
      age:24,
      Phone:12323249834,
      adharNo:437678987,

    },
    {
      name:"Rudray",
      age:5,
      Phone:21225457689,
      adharNo:896535546,

    },
    {
      name:"Pranali",
      age:24,
      Phone:43654757767,
      adharNo:5875899,

    },
    {
      name:"Ashay",
      age:26,
      Phone:543547056,
      adharNo:235687879,

    },
    {
      name:"Yugs ",
      age:24,
      Phone:13546575675,
     adharNo:2132432656,

    },
      ];
    v1candidate:any = [];
    v2candidate:any = [];
    Bcandidate:any = [];

    candidateName = "";
    candidatePhone = "";
    candidateAge = "";
    candidateAdhar = "";
    candidateFemale = "";
    candidateMale = "";
    selectedIndex='';

    modalRef?: BsModalRef;
    constructor(private modalService: BsModalService) {}

    V1Done(i:any){
      console.log("candidateList", this.candidateList);
      this.v1candidate.push(this.candidateList[i])
      console.log("You clicked on v1 Done", this.candidateList[i]);
      this.candidateList.splice(i,1);

    }
    V2Done(i:any){
      this.v2candidate.push(this.v1candidate[i])
      console.log("You clicked on v2 Done",)
      this.v1candidate.splice(i,1);

    }
    BDone(i:any){
      this.Bcandidate.push(this.v2candidate[i])
      console.log("You clicked on B Done")
      this. v2candidate.splice(i,1);

    }


    cBack(i:any){
      this.candidateList.push(this.v1candidate[i])
      this.v1candidate.splice(i,1);
    }
    v1Back(i:any){
      this.v1candidate.push(this.v2candidate[i])
      this.v2candidate.splice(i,1);
    }
    v2Back(i:any){
      this.v2candidate.push(this.Bcandidate[i])
      this.Bcandidate.splice(i,1);
    }
    Delete(i:any){
      this.candidateList.splice(i,1);
    }

    openModal(template: TemplateRef<any>,index:any) {
      console.log('index', index)

      if(index != null){
      this.candidateName = this.candidateList[index].name
      this.candidateAge = this.candidateList[index].age
      this.candidatePhone = this.candidateList[index].Phone
      this. candidateAdhar = this.candidateList[index].adharNo
      this.selectedIndex = index;

      }

          this.modalRef = this.modalService.show(template);
        }


    submit(){
      let user = {
      name:this.candidateName,
      age:this.candidateAge,
      phone:this.candidatePhone,
      adhar:this.candidateAdhar,
      }
 this.close()

      console.log('this.candidateList',this.candidateName);
      this.candidateList.push(user);
      this.candidateName="";
      this.candidateAge="";
      this.candidatePhone="";
      this.candidateAdhar="";
      this.modalRef?.hide();

    }

update(){

 // let user = {
//  name:this.candidateName,
// age:this.candidateAge,
//  phone:this.candidatePhone,
//adhar:this.candidateAdhar,
// }
//console.log('this.user',user);
//console.log('this.selectedIndex', this.selectedIndex)

// this.candidateList[this.selectedIndex] = user;

this.candidateList[this.selectedIndex].name = this.candidateName;
this.candidateList[this.selectedIndex].age = this.candidateAge;
this.candidateList[this.selectedIndex].Phone = this.candidatePhone;
this.candidateList[this.selectedIndex].adharNo = this. candidateAdhar;

      this.candidateName="";
      this.candidateAge="";
      this.candidatePhone="";
      this.candidateAdhar="";
// this.close()

}

close(){
  this.candidateName="";
      this.candidateAge="";
      this.candidatePhone="";
      this.candidateAdhar="";

  this.modalRef?.hide();
}

 }
