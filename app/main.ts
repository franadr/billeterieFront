
import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./component/AppComponent/app.component";


import {HTTP_PROVIDERS} from "@angular/http";
import { AppRouteProvider } from './routes/app.route';
import "angular2-materialize";


//noinspection TypeScriptValidateTypes
bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    AppRouteProvider,


    ]);