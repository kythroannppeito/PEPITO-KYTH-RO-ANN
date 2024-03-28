import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyCustomPage } from "./my-custom.page";

const routes: Routes = [
    {
        path: '',
        component: MyCustomPage,
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class MyCustomPageRoutingModule {}