import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ListChauffeurComponent } from './chauffeur/list-chauffeur/list-chauffeur.component';
import { AddChauffeurComponent } from './chauffeur/add-chauffeur/add-chauffeur.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Accueil1Component } from './accueil1/accueil1.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AddDirectionComponent } from './direction/add-direction/add-direction.component';
import { ListDirectionComponent } from './direction/list-direction/list-direction.component';
import { AddAgenceComponent } from './agence/add-agence/add-agence.component';
import { ListAgenceComponent } from './agence/list-agence/list-agence.component';
import { AddAgentComponent } from './agent/add-agent/add-agent.component';
import { ListAgentComponent } from './agent/list-agent/list-agent.component';
import { ListGradeComponent } from './grade/list-grade/list-grade.component';
import { AddGradeComponent } from './grade/add-grade/add-grade.component';
import { AddTarifComponent } from './tarif/add-tarif/add-tarif.component';
import { ListTarifComponent } from './tarif/list-tarif/list-tarif.component';
import { AddLtarifComponent } from './tarif/add-ltarif/add-ltarif.component';
import { AddDestinationComponent } from './destination/add-destination/add-destination.component';
import { ListDestinationComponent } from './destination/list-destination/list-destination.component';
import { AddTypecourrierComponent } from './typecourrier/add-typecourrier/add-typecourrier.component';
import { ListTypecourrierComponent } from './typecourrier/list-typecourrier/list-typecourrier.component';
import { AddDepotComponent } from './depot/add-depot/add-depot.component';
import { AddLdepotComponent } from './depot/add-ldepot/add-ldepot.component';
import { ListLdepotComponent } from './depot/list-ldepot/list-ldepot.component';
import { ListDepotComponent } from './depot/list-depot/list-depot.component';

const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    AddClientComponent,
    ListClientComponent,
    ListArticleComponent,
    
    ListChauffeurComponent,
    AddChauffeurComponent,
    ListCategorieComponent,
    AddCategorieComponent,
    LoginComponent,
    RegisterComponent,
    ListUserComponent,
    AccueilComponent,
    Accueil1Component,
    Accueil2Component,
    MenuComponent,
    AddDirectionComponent,
    ListDirectionComponent,
    AddAgenceComponent,
    ListAgenceComponent,
    AddAgentComponent,
    ListAgentComponent,
    ListGradeComponent,
    AddGradeComponent,
    AddTarifComponent,
    ListTarifComponent,
    AddLtarifComponent,
    AddDestinationComponent,
    ListDestinationComponent,
    AddTypecourrierComponent,
    ListTypecourrierComponent,
    AddDepotComponent,
    AddLdepotComponent,
    ListLdepotComponent,
    ListDepotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    NgxPaginationModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports : MATERIAL_MODULES,
  providers: [DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
