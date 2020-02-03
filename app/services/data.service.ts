import { Injectable } from '@angular/core';
import { Post } from '../models/posts';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Friend } from '../models/Friend';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts : Observable<Post[]>;
  potsCollection: AngularFirestoreCollection<Post>; // pipeline to Firebase Db

  friends: Observable<Friend[]>;
  friendCollection: AngularFirestoreCollection<Friend>;

  constructor(private fb : AngularFirestore) { 
    this.potsCollection = fb.collection<Post>("posts"); // opening the pipeline
    this.friendCollection = fb.collection<Friend>("friends");

    // read all posts from DB

    this.retrieveFriends();
    this.retrieveMessages();
  }

  private retrieveMessages(){
    this.posts = this.potsCollection.valueChanges();
  }

  private retrieveFriends(){
    this.friends = this.friendCollection.valueChanges();
  }

  public saveFriend(friend){
    var item = Object.assign({}, friend);
    this.friendCollection.add(item);
  }

  public getAllFriends(){
    this.retrieveFriends();
    return this.friends;
  }
  

  public savePost(post){
    var item = Object.assign({}, post);
    this.potsCollection.add(item);
  }

  public getAllPosts(){
    this.retrieveMessages();
    return this.posts; //return the observable array
    
  }
}
