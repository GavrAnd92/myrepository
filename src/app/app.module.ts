import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//add
import { HttpClientModule } from '@angular/common/http';//add

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './products/products.component';
import { EventComponent } from './event/event.component';
import { FormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

import { Routes, RouterModule} from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UsersComponent } from './users/users.component';

const appRoutes = [
  {path: '', component: ShopComponent},
  {path: 'event', component: EventComponent},
  {path: 'mycomponent', component: MyComponentComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', component: NotFoundComponent}//add
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ShopComponent,
    ProductsComponent,
    EventComponent,
    NotFoundComponent,
    CounterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),//add
    HttpClientModule//add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
