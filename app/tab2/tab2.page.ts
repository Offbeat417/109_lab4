import { Component } from '@angular/core';
import { Post } from '../models/posts';
import { DataService } from '../services/data.service';
import { SharedService } from '../shared.service';
import { Friend } from '../models/Friend';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  model = new Post();
  myFriends : Friend[]=[];

  constructor(private data:DataService, private shared : SharedService) {
      this.data.getAllFriends().subscribe(list =>{
        this.myFriends = []; //clear prev data

        //travel the list, filter only my friends
        for(var i = 0; i < list.length; i++){
          if(list[i].belongsTo == 'William'){
            this.myFriends.push(list[i]);
          }
        }
      });
  }

  sendPost(){

    //validations --> if empty, do not submit, essentially
    if(!this.model.message || !this.model.imageUrl) return;

      this.model.createdOn = new Date(); //set this moment on time
      this.model.from = this.shared.userName;

      console.log("Saving Post", this.model);

      //save the object
      this.data.savePost(this.model);

      //create new model (clear form)
      this.model = new Post();
    }
}

//1 - intall on your phone: Ionic DevApp
//2- open it and register for a new account