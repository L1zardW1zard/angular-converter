import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lastUpdate: string;
  rates: { AUD: number; EUR: number; UAH: number; USD: number } = {
    AUD: 0.048892,
    EUR: 0.032581,
    UAH: 1,
    USD: 0.0339,
  };

  currencies = Object.keys(this.rates);
  amount1: any = 1;
  amount2: any = 1;
  currency1 = 'USD';
  currency2 = 'UAH';

  amount1ChangeHadler(amount: number) {
    this.amount2 = Number(
      (
        (amount * this.rates[this.currency2]) /
        this.rates[this.currency1]
      ).toFixed(3)
    );
    this.amount1 = amount;
  }

  currency1ChangeHadler(currency: string) {
    this.amount2 = Number(
      (
        (this.amount1 * this.rates[this.currency2]) /
        this.rates[currency]
      ).toFixed(3)
    );
    this.currency1 = currency;
  }

  amount2ChangeHadler(amount: number) {
    this.amount1 = Number(
      (
        (amount * this.rates[this.currency1]) /
        this.rates[this.currency2]
      ).toFixed(3)
    );
    this.amount2 = amount;
  }

  currency2ChangeHadler(currency: string) {
    this.amount1 = Number(
      (
        (this.amount2 * this.rates[this.currency1]) /
        this.rates[currency]
      ).toFixed(3)
    );
    this.currency2 = currency;
  }

  amount1Change() {
    console.log('amount1Change');
  }

  onSwapClick() {
    const temp = { amount: this.amount1, currency: this.currency1 };
    this.currency1 = this.currency2;
    this.currency2 = temp.currency;
    this.amount1ChangeHadler(this.amount1);
    this.amount2ChangeHadler(this.amount2);
  }

  ngOnInit() {
    this.amount1ChangeHadler(this.amount1);

    fetch(
      'https://api.exchangerate.host/latest?symbols=USD%2CEUR%2CAUD%2CUAH&base=UAH',
      {
        method: 'GET',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.lastUpdate = data.date;
        this.rates = data.rates;
        console.log(this.rates);
      });
  }
}
