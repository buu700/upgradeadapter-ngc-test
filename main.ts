/// <reference path="./typings/index.d.ts" />

import {AppComponent} from './appcomponent';
import {UpgradeAdapter} from './appmodule';
import {Ng1Component} from './ng1component';


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
	).
	directive(
		'testApp',
		<angular.IDirectiveFactory>
		UpgradeAdapter.downgradeNg2Component(
			AppComponent
		)
	)
;


UpgradeAdapter.bootstrap(document.body, [moduleName]);
