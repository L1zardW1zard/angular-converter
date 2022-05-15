import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() rates!: object;
  @Input() amount!: string;
  @Input() currentCurrency!: string;
  @Input() currencies!: string[];

  @Output() amountChange = new EventEmitter();
  @Output() currencyChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAmountChangeHandler(event: any) {
    console.log('onAmountChangeHandler');
    this.amountChange.emit(this.amount);
  }

  onSelectChangeHandler(event: any) {
    this.currentCurrency = event.target.value;
    this.currencyChange.emit(event.target.value);
  }
}
