import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { MyCustomPage } from "./my-custom.page";
import { MyCustomPageRoutingModule } from "./my-custom-routing.module";
import { MyCustomPageWithId } from "./custom-page-with-id/custom-page-with-id";

@NgModule(
    {
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MyCustomPageRoutingModule
        ],
        declarations: [
            MyCustomPage,
            MyCustomPageWithId
        ]
    }
)
export class MyCustomPageModule {}