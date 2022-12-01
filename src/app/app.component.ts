import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  public authenticate: boolean = false

  constructor( private router: Router) { }

  ngOnInit() {
    localStorage.setItem('auth', JSON.stringify({"isLogged":"teste"}))
    var novo = localStorage.getItem('auth')?.toString()

  }

}
