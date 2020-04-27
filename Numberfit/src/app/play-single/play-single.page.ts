import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { NativeStorage }          from '@ionic-native/native-storage/ngx';
import { HTTP }                   from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-play-single',
  templateUrl : './play-single.page.html',
  styleUrls   : ['./play-single.page.scss'],
})
export class PlaySinglePage implements OnInit {

  server           : string = require('../config.json').server;
  bucket           : string = require('../config.json').bucket;
  subject          : string = this.activatedRoute.snapshot.paramMap.get("subject");
  cookie           : string;
  user             : any;
  question         : string;
  checkList        : Array<string> = [];
  answer           : Array<Object> = [{answer:"-"},{answer:"-"},{answer:"-"},{answer:"-"}];
  videos           : Array<string> = [];
  correctCounter   : number = 0;
  incorrectCounter : number = 0;
  images           : Array<string> = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];;
  imgState         : number = 0;
  pictureRef       : string;
  questionCardEle  : HTMLElement;
  videoEle         : HTMLElement;



  constructor(
    private activatedRoute : ActivatedRoute,
    private nativeStorage  : NativeStorage,
    private router         : Router,
    private http           : HTTP,

  ) {
    this.pictureRef = this.images[this.imgState];
    // Get cookie
    this.nativeStorage.getItem('cookie')
    .then((data) => {
      this.cookie = data.cookie
      // Get user
      this.nativeStorage.getItem('user')
      .then((data) => {
        this.user = data

        // Get URLs to videos
        this.http.get(this.server + "/getVideo",{},{})
        .then(data => {
          var videos = JSON.parse(data.data).videos;
          videos.forEach((item) => {
            this.videos.push(item.url)
          })
          // Ready to play!!!
          this.play()

        })
        .catch(error => {
          console.log("status", error.status);
          console.log("error", error.error);
          console.log("error here", error);

        });

      });
    });
  }

  ngOnInit(){
    this.questionCardEle = document.querySelector('.question-card');
    this.videoEle = document.querySelector('.video-container');
  }

  play(){
    let qSetNumber =  18; // Number of question sets
    if(this.user.year == 1 && this.subject != "Time"){
      qSetNumber = 6; // For some reason year one have fewer resources on all but Time
    }
    this.answer = [];
    while(this.answer.length<4){
      console.log(this.answer.length)
      let page = 4*Math.floor(Math.random() * qSetNumber);
      let card = page+Math.floor(Math.random() * 6); // 6 questions on each page
      let ques = this.bucket+"/"+this.subject+"/"+this.user.year+"/beg/"+"PDF-"+page+"-"+card+".png"
      let ans  = this.bucket+"/"+this.subject+"/"+this.user.year+"/beg/"+"PDF-"+(page+2)+"-"+(card+2)+".png"
      // console.log("checklist", this.checkList)
      // console.log("question", this.question)
      // console.log("includes", this.checkList.includes(this.question))
      if(!this.checkList.includes(ques)){
        this.question = ques
        this.answer.push({question:this.question, answer:ans})
      }
    }
    this.shuffleAnswerOptions(this.answer)
    console.log("answers", this.answer)
    console.log("ansers", this.question)
  };


  // main operating function for the whole process
  updateProgress(i:number){
    // check if the answer is correct
    if (this.answer[i]["question"]==this.question){
      // play video when needed
      this.checkList.push(this.question)
      this.playAudio(true);
      this.updateProgressBar();
      if(this.checkWin()){
        return;
      }
      this.correctCounter += 1;
      //every 3 questions
      if (this.correctCounter%3==0){
        this.switchVideoQuestions(true);
      }
    }
    else {
      this.playAudio(false);
      this.incorrectCounter += 1;
    }
    this.play()
  }

  displayEnd(){
    let endSection = <HTMLElement>document.querySelector(".end-section");
    let overlaySection = <HTMLElement>document.querySelector(".overlay-section");
    overlaySection.style.opacity = "30%";
    endSection.style.visibility = "visible";
  }

  shuffleAnswerOptions(array:Array<object>) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // sound effect at button click
  playAudio(correctness:boolean){
    let audio = new Audio();
    if (correctness){
      audio.src = "/assets/Sounds/answer_correct.wav";
    } else {
      audio.src = "/assets/Sounds/answer_incorrect.wav";
    }
    audio.load();
    audio.play();
  }

  enableButtons(enable: boolean) {
    let choiceButtons = document.querySelectorAll(".choice-button");
    for(var i=0; i<choiceButtons.length; i++){
      let button = <HTMLInputElement>choiceButtons[i];
      button.disabled = !enable;
    }
  }

  enableVideoOrQuestions(toVideo: boolean) {
    if (toVideo){
      this.questionCardEle.style.visibility = "hidden";
      this.videoEle.style.visibility = "visible";
    } else {
      this.questionCardEle.style.visibility = "visible";
      this.videoEle.style.visibility = "hidden";
    }
  }

  switchVideoQuestions(toVideo: boolean){
    this.enableVideoOrQuestions(toVideo);
    this.enableButtons(!toVideo);
    let backToGameButton = <HTMLElement>document.querySelector("#video-done-button");
    backToGameButton.style.visibility = toVideo? "visible":"hidden";
  }


  // the progress bar move one step forward with correct answer
  updateProgressBar(){
    this.imgState = ++this.imgState; //% this.images.length;
    this.pictureRef = this.images[this.imgState];
  }

  checkWin(): boolean {
    if (this.imgState>=8){

      this.saveGame()

      this.enableButtons(false);
      let ele2 = <HTMLElement>document.querySelector('.board');
      let ele3 = <HTMLElement>document.querySelector('.winning-container');
      let ele4 = <HTMLElement>document.querySelector('.congrats-label');
      let ele5 = <HTMLElement>document.querySelector('#star-animation');

      // star rain appears first
      ele5.style.visibility = "visible";
      this.questionCardEle.style.visibility = "hidden";
      this.videoEle.style.visibility = "hidden";

      this.sleep(2000).then(() => {
        ele2.style.visibility = "hidden";
        ele3.style.visibility = "visible";
        ele4.style.width = "100%";
      })
      // redirect to play page after congrats
      this.sleep(8000).then(() => {
        ele5.style.visibility = "hidden";
        this.displayEnd();
        return true;
      })
    } else{
      return false;
    }
  }

  // Saves game to gameHistories in server and updates points locally
  saveGame(){
    var gamePlayed = {
      username  : this.user.username,
      correct   : this.correctCounter,
      incorrect : this.incorrectCounter,
      topic     : this.subject,
    }
    var savedUser = {
      cookie   : this.cookie,
      username : this.user.username,
      name     : this.user.name,
      school   : this.user.school,
      year     : this.user.year,
      teacher  : this.user.teacher,
      points   : this.user.points + this.correctCounter - this.incorrectCounter,
    }
    console.log("gamePLayed: ", gamePlayed)
    console.log("savedUser: ", savedUser)
    this.http.setDataSerializer('json');
    this.http.post(this.server + "/saveGame", gamePlayed, {})
    .then(data => {
      this.http.post(this.server + "/updateScore", savedUser, {})
      .then(data => {
        delete savedUser["cookie"];
        this.nativeStorage.setItem('user', savedUser)
        .then(() => { }, error => console.error('Error storing cookie', error));
      })
      .catch(error => {
        console.log("update score error: ",error.error)
        // this.presentAlert();
      });
    })
    .catch(error => {
      console.log("save game error:",error.error)
      // this.presentAlert();

    });
  }

}
