//引入核心模块二component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//使用这个组建的名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newApp';//属性

  constructor(){//构造函数

  }
}
