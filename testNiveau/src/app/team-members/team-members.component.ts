import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  list
  myState = "VA"
  myRole1 = "Technical Lead"
  myRole2 = "Software Engineer"

  // order alphabetically (ascendent)
  compareStrings(a, b) {
    //case sensitive
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

  //order by Lastname
  sortByLastName() {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i]['members'].sort((a, b) =>
        this.compareStrings(a.lastName, b.lastName)
      )


    }
  }
  //order by firstname
  sortByFirstName() {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i]['members'].sort((a, b) =>
        this.compareStrings(a.firstName, b.firstName)
      )


    }
  }
  //filter the list depending on team state and member's role
  filtered() {
    this.list = this.list
      .filter((x) => x.state === 'VA')
      .map((x) => { x.members = x.members.filter((l) => l.role === "Software Engineer" || l.role === "Technical Lead"); return x })

  }
  //combine firstname and lastname keys in json into fullname key in the same json
  concatenate() {
    for (let i = 0; i < this.list.length; i++) {
      for (let j = 0; j < this.list[i]['members'].length; j++) {
        this.list[i]['members'][j].firstName = this.list[i]['members'][j].firstName + " " + this.list[i]['members'][j].lastName //combining the two keys under firstname key
        delete this.list[i]['members'][j].lastName //deleting the lastnamekey

      }

    }
    this.list = JSON.parse(JSON.stringify(this.list).split('"firstName":').join('"fullName":')); //renaming the firstname key to fullname 

  }


  constructor(private companyService: CompanyServiceService) {
    companyService.getCompagny().subscribe(
      (data) => {
        this.list = data;
      }
    );

  }

  ngOnInit() {
  }

}
