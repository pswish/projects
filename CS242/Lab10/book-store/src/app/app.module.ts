import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BirthdayCardFormComponent } from './birthday-card-form/birthday-card-form.component';
import { BooksComponent } from './books/books.component';
import { BookDetailDialogComponent } from './book-detail-dialog/book-detail-dialog.component';
import { BirthdaycardsComponent } from './birthdaycards/birthdaycards.component';
import { BirthdaycardDetailDialogComponent } from './birthdaycard-detail-dialog/birthdaycard-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BirthdayCardFormComponent,
    BooksComponent,
    BookDetailDialogComponent,
    BirthdaycardsComponent,
    BirthdaycardDetailDialogComponent,
  ],

  entryComponents: [
    BookDetailDialogComponent,
    BirthdaycardDetailDialogComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }