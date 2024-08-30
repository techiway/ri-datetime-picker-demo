import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RIDateTimeModule, RINativeDateTimeModule } from "ri-datetime-picker";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule, 
        RIDateTimeModule, 
        RINativeDateTimeModule, 
        
    ],
    exports: [],
    bootstrap: [AppComponent]
})

export class AppModule {}