//告诉angular如何组装应用

//浏览器解析模块儿
import { BrowserModule } from '@angular/platform-browser';
//核心模块
import { NgModule } from '@angular/core';
//必须引入表单相关的模块儿，才可以使用双向数据绑定
import { FormsModule } from '@angular/forms';

//跟组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
//装饰器，告诉angular如何启动和应用
@NgModule({
  declarations: [//配置所需的组件
    AppComponent, NewsComponent, HomeComponent
  ],
  imports: [//配置所需要的模块儿
    BrowserModule
    ,FormsModule
  ],
  providers: [],//配置所需要的服务
  bootstrap: [AppComponent]//启动默认加载的组件，一般为跟组件
})
export class AppModule { }//暴露模块儿，空就行
