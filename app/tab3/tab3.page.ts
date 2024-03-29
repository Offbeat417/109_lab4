import { Component } from '@angular/core';
import { Friend } from '../models/Friend';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend();
  myFriends : Friend[]=[];

  constructor(private data : DataService) {
    //read all my friends
    this.data.getAllFriends().subscribe(res=>{
      this.myFriends = []; //clear prev data

      //Filter to show only friends that belong to me
      for(var i = 0; i < res.length; i++){
        if(res[i].belongsTo == 'William'){
          this.myFriends.push(res[i]);
        }
      }
    });
   }



  saveFriend() {
    console.log("saving Friend", this.model);

    this.data.saveFriend(this.model);

    //reset form
    this.model = new Friend();
  }


}
