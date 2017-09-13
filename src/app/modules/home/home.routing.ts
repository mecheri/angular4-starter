import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./components/home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);