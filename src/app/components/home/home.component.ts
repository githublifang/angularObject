import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nns = "我是一个首页组件"
  constructor() { }
  public user:any = {
    username: "111",
    sex: "2",
    city:"北京",
    likeslist: [{
      title: '吃饭',
      checked: false
    }, {
      title: '喝水',
      checked: false
    }, {
      title: '玩',
      checked: true
    }],
    citylist: ["北京", "上海", "广州"]
  };
  public namess:string="2342"
  public hid:any = true;
  ngOnInit(): void {
  }
  getsubmit(){
    this.hid = !this.hid;
  }
}
