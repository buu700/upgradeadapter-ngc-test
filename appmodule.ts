import {AppComponent} from './appcomponent';
import {Ng1Component} from './ng1component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';


@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule
	],
	declarations: [
		AppComponent,
		Ng1Component
	]
})
export class AppModule {
	ngDoBootstrap () {}
}
