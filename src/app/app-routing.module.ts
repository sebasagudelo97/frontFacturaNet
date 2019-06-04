import { FacturaComponent } from './factura/factura.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/facturaComponent', pathMatch: 'full'},
    { path: 'appComponent', component: AppComponent},
    { path: 'facturaComponent', component: FacturaComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule { }
