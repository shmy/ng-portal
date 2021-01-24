import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LogService} from "../../services/log.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {LoadStatus, withStatus} from "../../operators/with-status";
import {of} from "rxjs";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private log: LogService,
    private router: Router,
    private userService: UserService
  ) {
    this.formGroup = fb.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  formGroup!: FormGroup;
  loading = LoadStatus.getInstance();
  ngOnInit(): void {
  }

  handleSubmit(): void {
    if (this.formGroup.valid) {
      const {username, password} = this.formGroup.value;
      of({username, password})
        .pipe(
          withStatus(this.loading, (params) => this.userService.userLoginService(params))
        )
        .subscribe(data => {
        window.localStorage.setItem("token", data.token);
        this.router.navigateByUrl("/dashboard", {replaceUrl: true});
      });
    }
  }
  get isDisabled(): boolean {
    return this.formGroup.invalid || this.loading.isLoading;
  }
  get submitLabel(): string {
    return this.loading.isLoading ? "登录中" : "登录";
  }
}
