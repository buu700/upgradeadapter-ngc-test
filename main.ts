/// <reference path="./typings/index.d.ts" />

import {AppComponent} from './appcomponent';
import {AppModule} from './appmodule';
import {Ng1Component} from './ng1component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static';


const moduleName		= 'Test';
const controllerName	= 'TestController';

document.body.setAttribute(
	'ng-controller',
	'TestController'
);

angular.
	module(moduleName, []).
	controller(controllerName, []).
	component(
		Ng1Component.title,
		Ng1Component.config
	)
;


(async () => (
	await platformBrowserDynamic().bootstrapModule(AppModule)
).injector.get(UpgradeModule).bootstrap(
	document.body,
	[moduleName]
))();
