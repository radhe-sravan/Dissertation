import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}
  
  ngOnInit(): void {
  this.countryService.getCountries().subscribe((countries) => {
     countries.map((country:any) => {
      const flag = country.flags.svg;
      const name = country.name.common;
      const item = {flag, name};
      this.countries.push(item);
  })
  });
  }
}
