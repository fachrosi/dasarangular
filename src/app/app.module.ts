import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSatuComponent } from './admin-satu/admin-satu.component';
import { AdminDuaComponent } from './admin-dua/admin-dua.component';
import { DaftarComponent } from './daftar/daftar.component';

const routess : Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'daftar', component: DaftarComponent },
    {   path        : 'admin',
        component   : AdminComponent,
        children    : [
            {path:'satu', component:AdminSatuComponent},
            {path:'dua', component:AdminDuaComponent}
        ]
    },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    AdminSatuComponent,
    AdminDuaComponent,
    DaftarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routess)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
