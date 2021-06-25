import { NgModule } from '@angular/core';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { BorrarUsuarioComponent } from './components/borrar-usuario/borrar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SharedModule } from '@shared/shared.module';
import { UsuarioService } from './shared/service/usuario.service';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    BorrarUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    UsuarioRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
