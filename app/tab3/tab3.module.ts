import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Friend } from '../models/Friend';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {

  // model: Friend = new Friend()
  // myFriends: Friend[] = [];

  //constructor(private data:DataService){
    //read all my friends
    //this.data.getAllFriends().subscribe(res=>{
  //     this.MyFriends = []; //clear prev data
  //   })
  // }

  //Filter to show only friends that belong to me
  // for(var i = 0; i < res.length; i++)
        // if(res[i].belongsTo == 'William'{
        //   this.myFriends.push(res[i]);})


  
}
