import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from '../models/posts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postsToShow: Post[]=[];

  constructor(private data : DataService) {
    this.data.getAllPosts().subscribe(res => {
      this.postsToShow = []; //clear previous data

      //filter to show messages (to me, from me, to everyone)
      for(var i = 0; i < res.length; i++){
        var msg = res[i];
      if(
        msg.to == 'William' || 
        msg.from =='William' || 
        msg.to == 'Everyone') {
          this.postsToShow.push(msg);
        }
      }
    });
  }
}
