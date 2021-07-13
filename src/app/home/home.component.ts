import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';


import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface nav {
  name: string;
  children?: nav[];
}

const TREE_DATA: nav[] = [
  {
    name: 'ملف',
    children: [
      {name: 'اختيار'},
      {name: 'تغيير السنة'},
      {name: ' خروج'},
    ]
  }, {
    name: 'تحرير',
    children: [
      {
        name: '1',
        children: [
          {name: '1'},
          {name: '2 '},
        ]
      }, {
        name: '2',
        children: [
          {name: '1'},
          {name: '2'},
        ]
      },
    ]
  }, {
    name: 'الحركة',
    children: [
      {
        name: '1',
        children: [
          {name: '1'},
          {name: ' 2'},
        ]
      }, {
        name: '2',
        children: [
          {name: '1'},
          {name: '2'},
        ]
      },
    ]
  }, {
    name: 'يوميات',
    children: [
      {
        name: '1',
        children: [
          {name: '1'},
          {name: ' 2'},
        ]
      }, {
        name: '2',
        children: [
          {name: '1'},
          {name: '2'},
        ]
      },
    ]
  }, {
    name: 'ترحيل',
    children: [
      {
        name: '1',
        children: [
          {name: '1'},
          {name: '2'},
        ]
      }, {
        name: '2',
        children: [
          {name: '1'},
          {name: '2'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
    loading = false;
    user: User;
    userFromApi: User;
    treeControl = new NestedTreeControl<nav>(node => node.children);
    dataSource = new MatTreeNestedDataSource<nav>();

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService    ) {
        this.user = this.authenticationService.userValue;
        this.dataSource.data = TREE_DATA;


    }
    hasChild = (_: number, node: nav) => !!node.children && node.children.length > 0;
    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
    title = 'ASE';

    panelOpenState = false;

    showTab = 1;
    tabToggle(index) {
      this.showTab = index;
    }


    logout() {
      this.authenticationService.logout();
    }


}
