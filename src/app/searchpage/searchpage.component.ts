import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html'
})
export class SearchpageComponent implements OnInit {
  title = 'بحث واضافة مندوبي المبيعات';
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: '234557' },
    { id: 12, name: 'Narco', country: '9875323' },
    { id: 13, name: 'Bombasto', country: '5457940' },
    { id: 14, name: 'Celeritas', country: '2315667' },
    { id: 15, name: 'Magneta', country: '135091' },
    { id: 16, name: 'RubberMan', country: '4444789' },
    { id: 17, name: 'Dynama', country: '1122980' },
    { id: 18, name: 'Dr IQ', country: '2113147' },
    { id: 19, name: 'Magma', country: '1213890 ' },
    { id: 20, name: 'Tornado', country: '2336477 ' },
  ];

  showTab = 9;
  tabToggle(index) {
    this.showTab = index;
  }
  constructor() {}

  ngOnInit() {}
}
