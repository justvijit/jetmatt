import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-registration',
  template: `
  <!-- Sign Up Page -->
  <div *ngIf="stepIndex === -3" class="d-flex justify-content-center h-100 registration">
    <div class="m-auto  mx-30 step-1">
      <div class="shadow p-4 bg-body rounded box-rounded">
      <p class="h5">Create your account</p>
      <p class="sub-head">
       You will have to follow a few steps, before you can complete your sign up.
      </p>
      <button class="btn btn-primary btn-sm mt-2" (click)="changeStepIndex(-2)">Sign Up</button>
      <button class="btn btn-light btn-sm mt-2">
      <img src="assets/google-icon.svg"  style="height:20px;vertical-align:middle"/>&nbsp;
      Sign Up With Google</button>
      <div class="text-center mt-3">
        <p class="tinyfont">Already have an account? <a href="#signin" class="text-primary">Sign In</a></p>
      </div>
    </div>
      <div class="text-center mt-3">
          <p class="tinyfont">By signing up you agree to the <a href="#" class="text-primary" (click)="changeStepIndex(-2)">Terms of Service</a> and <a href="#" class="text-primary" (click)="changeStepIndex(-2)">Privacy Policy</a></p>
      </div>


  </div>

          
  </div>
  <!-- Privacy Policy-->
  <div *ngIf="stepIndex === -2" class="d-flex justify-content-center h-100 privacy-policy m-2">
    <div class="shadow p-4 m-auto bg-body rounded mx-70 step-2 box-rounded">
      <p class="h5">Privacy Policy</p>
      <p class="sub-head">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/>
        <br/>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        <br/>
        <br/>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      <input type="checkbox"/> 
      <label>
        &nbsp;
      I accept all the terms and conditions etc.
    </label>
<br/>
<button class="btn btn-light btn-sm mt-2"  (click)="changeStepIndex(-3)">
      Back</button>
      <button class="btn btn-primary btn-sm mt-2 step2Next" (click)="changeStepIndex(-1)">Next</button>
    </div>
  </div>
  <!-- Sign Up Form -->
  <div *ngIf="stepIndex === -1" class="d-flex justify-content-center h-100 registration">
    <div class="shadow p-4 m-auto bg-body rounded mx-30 step-1 box-rounded">
      <p class="h5">Creating your account</p>
      <p class="sub-head">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
      </p>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">Enter Your Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email">
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Enter Your Password:</label>
          <input type="{{showPasswords[0] ? 'password' : 'text'}}" class="form-control inputpassword" id="pwd" placeholder="Enter Password" name="pswd">
          <div class="password-box" (click)="togglePassword(0)"></div>
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Repeat Your Password:</label>
          <input type="{{showPasswords[1] ? 'password' : 'text'}}" class="form-control inputpassword" id="pwd" placeholder="Repeat Your password" name="pswd">
          <div class="password-box" (click)="togglePassword(1)"></div>
        </div>
      <button class="btn btn-primary btn-sm mt-2" (click)="changeStepIndex(0)">Next Step</button> 
    </div>
  </div>
  <!-- Step 0 -->
  <div *ngIf="stepIndex >= 0" class="d-flex justify-content-center h-100 registration">
  <div class="m-auto rounded mx-30 ">
      <ul class="slider-top">
        <li class="slider-index {{slideIndex[0]}}"></li>
        <li class="slider-index {{slideIndex[1]}}"></li>
        <li class="slider-index {{slideIndex[2]}}"></li>
        <li class="slider-index {{slideIndex[3]}}"></li>
      </ul>
<div class="shadow rounded step-1 box-rounded p-4 bg-body">
    <div id="signupsteps" class="allSlide">
          <div class="active-slide" id="step0">
              <p class="h5">Step: 0</p>
              <p class="sub-head">
              This wizard will walk you through few registration and configuration steps! It won't take long, maybe  as long as a few sips of your favorite tea or coffee.
              </p>
              <div class="text-center mt-5">
                <div class="mx-50 m-auto hello"></div>
              </div>
              <button class="btn btn-primary btn-sm mt-3" (click)="changeStepIndex(1)">Next Step</button>
          </div>
          <div id="step1" class="inactive-slide" style="display:none">
              <p class="h5">Step: 1</p>
              <p class="sub-head">
              This wizard will walk you through few registration and configuration steps! It won't take long, maybe  as long as a few sips of your favorite tea or coffee.
              </p>
                    <div class="mb-3 mt-3">
                      <label for="firstname" class="form-label">Enter Your First Name:</label>
                      <input type="text" class="form-control" name="firstname">
                    </div>
                    <div class="mb-3">
                      <label for="lastname" class="form-label">Enter Your Last Name:</label>
                        <input type="text" class="form-control" id="pwd"  name="lastname">
                    </div>
                  <button class="btn btn-primary btn-sm mt-2" (click)="changeStepIndex(2)">Next Step</button> 
          </div>
          <div id="step2" class="inactive-slide" >
            <p class="h5">Step: 2</p>
              <p class="sub-head">
              Do you want to create a new team or join an existing one?
              </p>
                  <div class="shadow-sm p-4 m-2  bg-body rounded box-rounded team-box" (click)="teamSelection(1)">
                    <div class="team-selection">
                      <img src={{createTeamSrc}} />
                    </div>
                    <img src="assets/user-icon.svg"/> 
                    <span>
                      Create New Team
                    </span>
                    <p class="sub-head-small pt-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                  </div>
                  <div class="shadow-sm p-4 m-2 mt-4 bg-body rounded box-rounded team-box" (click)="teamSelection(2)">
                    <div class="team-selection">
                      <img src={{joinTeamSrc}} />
                    </div>
                  <img src="assets/team-icon.svg"/> 
                    <span>
                      Join A Team
                    </span>
                    <p class="sub-head-small pt-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                  </div>
                  <button class="btn btn-primary btn-sm mt-2" *ngIf="teamOption != 0" (click)="selectTeam()">Next Step</button> 
                </div>
            <div id="step3" class="inactive-slide" >
              <p class="h5">Step: 3</p>
              <p class="h6">Creating new team</p>  
                    <div class="mb-3 mt-3">
                      <label for="teamname" class="form-label">Enter team name</label>
                      <input type="text" class="form-control" name="teamname">
                    </div>
                    <div class="mb-3">
                      <label for="companyname" class="form-label">Enter company name</label>
                      <input type="text" class="form-control" name="companyname">
                    </div>
                     <div class="mb-3">
                      <label for="grouppin" class="form-label">Create Pin for your group</label>
                        <input type="{{showPasswords[3] ? 'password' : 'text'}}" class="form-control inputpassword" id="pwd"  name="grouppin">
                        <div class="password-box" (click)="togglePassword(3)"></div>

                      
                    </div>
                    <button class="btn btn-primary btn-sm mt-2" (click)="changeStepIndex(4)">Next Step</button> 
              </div>
              <div id="step4" class="inactive-slide" >
              <p class="h5">Step: 4</p>
                  <div class="text-center pt-3 star-tick">
                  <img src="assets/star-tick.svg">
                  <p class="p-2"><strong>Thankyou !<br/>
                Your registration completed successfully.</strong>
                </p>
                  </div>
                    <button class="btn btn-primary btn-sm mt-2">Continue</button> 
              </div>
              <div id="step5" class="inactive-slide" >
              <p class="h5">Step: 3</p>
              <p class="h6">Join new team</p>  
                    <div class="mb-3 mt-3">
                      <label for="teamname" class="form-label">Enter team name</label>
                      <input type="text" class="form-control" name="teamname">
                    </div>
                     <div class="mb-3">
                      <label for="grouppin" class="form-label">Enter team's pin</label>
                      <div>
                        <input type="number" (keyup)="keytab($event)" class="form-control inputSmall" name="grouppin">
                        <input type="number" (keyup)="keytab($event)" class="form-control inputSmall" name="grouppin">
                        <input type="number" (keyup)="keytab($event)" class="form-control inputSmall" name="grouppin">
                        <input type="number" (keyup)="keytab($event)" class="form-control inputSmall" name="grouppin">
                      </div>
                    </div>
                    <button class="btn btn-primary btn-sm mt-2" (click)="changeStepIndex(4)">Next Step</button> 
              </div>
      </div>
</div>
    </div>
  </div>
  <div class="fixed-bottom lg-bt" >
    <img src="assets/rg-bt-left.svg">
  </div>
  <div class="fixed-bottom rg-bt" >
    <img src="assets/rg-bt-right.svg">
  </div>
  `,
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {
  constructor() { }
  slideIndex = ['slide-index-active','','','',''];
  teamOption = 0;
  teamNormal = "-normal";
  teamSelected = "-selected";
  createTeamSrc = "assets/team-circle-normal.svg";
  joinTeamSrc = "assets/team-circle-normal.svg";
  stepIndex = -3;
  showPasswords = [true,true,true,true,true];

  upto = 0;
  liveSlide=1;
  activeid = "";
  goToStep(slide:any){
    this.liveSlide = slide;
    var activeid= $('.allSlide').find('.active-slide').attr('id');
    $('.allSlide').find('.active-slide').attr('class','animate__animated animate__slideOutLeft');
      setTimeout(() => {
        var t = $('#'+activeid).attr('class');
        t = t + " inactive-slide";
        $('#'+activeid).attr('class',t);       
        if(this.liveSlide != 0){
          $('#step'+this.liveSlide).attr('class','animate__animated animate__slideInRight active-slide');
          $('#step'+this.liveSlide).show();
        }
      }, 300);
  }
  changeStepIndex(index: any){
    this.stepIndex = index;
    if(index >= 0){
      if(index < 2) this.upto = 0;
      else if(index == 5) this.upto = 2;
      else this.upto = index-1;
      for(var j=0;j<5;j++){
        if(j > this.upto){
          this.slideIndex[j]= '';
        }else{
          this.slideIndex[j] = 'slide-index-active';
        }
      }
    }
    this.goToStep(index);
  }
  teamSelection(option: any){
    this.teamOption = option;
      if(option == 1){
          this.createTeamSrc = "assets/team-circle-selected.svg";
          this.joinTeamSrc = "assets/team-circle-normal.svg";
      }else if(option == 2){
          this.createTeamSrc = "assets/team-circle-normal.svg";
          this.joinTeamSrc = "assets/team-circle-selected.svg";
      } else {
          this.createTeamSrc = "assets/team-circle-normal.svg";
          this.joinTeamSrc = "assets/team-circle-normal.svg";
      }
  }

  togglePassword(pid:any){
    this.showPasswords[pid] = !this.showPasswords[pid];
  }

  keytab(event:any){
      let value = event.srcElement.value;
      if(value.length > 1){
        event.srcElement.value = '';
      }else{
        if(value.length == 1){
          let element = event.srcElement.nextElementSibling;
          if(element == null)  
              return;
          else
              element.focus(); 

        }
      }
    }
  selectTeam(){
    if(this.teamOption == 1){
        this.changeStepIndex(3);
    }else if(this.teamOption == 2){
      this.changeStepIndex(5);
    }
  }
  ngOnInit(): void {
  }
}
