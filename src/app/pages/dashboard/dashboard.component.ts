import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  constructor(public router: Router){}

  ngOnInit(): void {
    
  }

  goBack() {
    this.router.navigate(['']);
  }
}

