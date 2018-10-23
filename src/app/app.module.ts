import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
    AdminUsersComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    NavBarComponent,
    NotFoundComponent,
    MyOrdersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(environment.firebase, 'ng-survey'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpModule,
    RouterModule.forRoot([
       { path: '', component: HomeComponent },
       { path: 'products', component: ProductsComponent },
       { path: 'shopping-cart', component: ShoppingCartComponent },
       { path: 'login', component: LoginComponent },

       { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
       { path: 'order-success', component: OrderSuccessComponent},
       { path: 'my/orders', component: MyOrdersComponent},
       { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
       
       { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
       { path: 'admin/categories', component: AdminCategoriesComponent, canActivate: [AuthGuard, AdminAuthGuard]},
       { path: 'admin/users', component:AdminUsersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
       { path: '**', component: NotFoundComponent }
     ]),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
