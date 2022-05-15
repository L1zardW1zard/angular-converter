import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() rates = {
    AUD: 0.048892,
    EUR: 0.032581,
    UAH: 1,
    USD: 0.0339,
  };
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {}
}
