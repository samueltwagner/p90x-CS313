import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { p90xComponent } from './p90x/p90x.component';
import { p90xListComponent } from './p90x/p90x-list/p90x-list.component';
import { p90xDetailComponent } from './p90x/p90x-detail/p90x-detail.component';
import { p90xItemComponent } from './p90x/p90x-item/p90x-item.component';
import { DropdownDirective } from './dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { p90xEditComponent } from './p90x/p90x-edit/p90x-edit.component';
import { DndModule } from 'ng2-dnd';
import { workoutFilterPipe } from './p90x/workouts-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    p90xComponent,
    p90xListComponent,
    p90xDetailComponent,
    p90xItemComponent,
    DropdownDirective,
    p90xEditComponent,
    workoutFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DndModule.forRoot()
  ],
  //providers: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
