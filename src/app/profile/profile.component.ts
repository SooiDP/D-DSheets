import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User, UserService } from '../shared';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  profileForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // create form group using the form builder
    this.profileForm = this.fb.group({
      username: '',
      email: '',
      password: ''
    });
    // Optional: subscribe to changes on the form
    this.profileForm.valueChanges.subscribe(values => this.updateUser(values));
  }

  ngOnInit() {
    // Make a fresh copy of the current user's object to place in editable form fields
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    // Fill the form
    this.profileForm.patchValue(this.user);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateUser(this.profileForm.value);

    this.userService
    .update(this.user)
    .subscribe(
      updatedUser => this.router.navigateByUrl('/profile/' + updatedUser.username),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateUser(values: Object) {
    (<any>Object).assign(this.user, values);
  }

}
