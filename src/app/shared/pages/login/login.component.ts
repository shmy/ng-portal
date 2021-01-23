import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LogService} from "../../services/log.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private log: LogService,
    private router: Router
  ) {
    this.formGroup = fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  public formGroup: FormGroup;

  ngOnInit(): void {
  }

  handleSubmit(): void {
    if (this.formGroup.valid) {
      const {username, password} = this.formGroup.value;
      this.handleDoLogin(username, password);
      return;
    }
  }

  handleDoLogin(username: string, password: string): void {
    this.log.info("Do login", username, password);
    this.router.navigateByUrl("/dashboard");
  }
}
