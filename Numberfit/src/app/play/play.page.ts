import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage }  from '@ionic-native/native-storage/ngx';
import { Router }         from '@angular/router';
import { HTTP }           from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-play',
  templateUrl : 'play.page.html',
  styleUrls   : ['play.page.scss'],
})
export class HomePage implements OnInit {

  server : string;
  cookie : string;
  @Output() messageFromChild = new EventEmitter();

  constructor(
    private router        : Router,
    private http          : HTTP,
    private nativeStorage : NativeStorage,
  ) {
    // Get server from config file
    this.server = require('../config.json').server;
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // this.messageFromChild.emit('Message from child');

  }

  ngOnInit(){

    // Navigate to subject-select page and pass gamemode information base on which div pressed
    var divSingle = document.getElementById("play-single");
    var divMulti = document.getElementById("play-multi");
    divSingle.addEventListener('click', () => this.router.navigate(['/subject-select', 0]));
    divMulti.addEventListener('click', () => this.router.navigate(['/subject-select', 1]));

    // this.cookie = this.route.snapshot.paramMap.get('cookie');
    // console.log(this.cookie);

  }

  testRequests(){
    const reqs = []
    this.http.get(this.server+"/test",{},{})
    .then(data => {
      this.nativeStorage.setItem('cookie', {cookie: "-"})
      .then(() => {
        console.log("Cookie removed!")
        this.router.navigate(['/sign-in'])
      }, error => console.error('Error storing item', error));

    })
    .catch(error => {
      console.log("status", error.status);
      console.log("error", error.error);

    });
  }
}
