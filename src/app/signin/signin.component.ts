import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signin',
  template: `
  <div class="d-flex justify-content-center h-100 registration">
    <div class="shadow p-4 m-auto bg-body rounded mx-30 step-1 box-rounded">
      <p class="h5">Sign In</p>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">Enter Your Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email">
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Enter Your Password:</label>
          <input type="{{showPasswords[0] ? 'password' : 'text'}}" class="form-control inputpassword" id="pwd" placeholder="Enter Password" name="pswd">
          <div class="password-box" (click)="togglePassword(0)"></div>

        </div>
      <button class="btn btn-primary btn-sm mt-2">Sign In</button> 
            <div class="text-center mt-3">
        <p class="tinyfont">Forgot your email or password? <a href="signin" class="text-primary">Enter Here</a></p>
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
export class SigninComponent implements OnInit {
  constructor() { }
showPasswords = [true];
  togglePassword(pid:any){
    this.showPasswords[pid] = !this.showPasswords[pid];
  }


ngOnInit(): void {
  }
}
