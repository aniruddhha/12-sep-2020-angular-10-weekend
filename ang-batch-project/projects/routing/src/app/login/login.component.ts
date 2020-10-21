import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onOkay(mob: string) {
    this.router.navigate(['chats', mob]) // route params
  }

  onFdgdxfxhp() {
    this.router.navigate(['register'], {
      queryParams: {
        ttl: 45,
        isSession: false
      }
    })
  }
}
