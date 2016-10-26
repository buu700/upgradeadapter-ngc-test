import {AppComponent} from './appcomponent';
import {Ng1Component} from './ng1component';
import {NgModule, forwardRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeAdapter} from '@angular/upgrade';


export const upgradeAdapter	= new UpgradeAdapter(
	forwardRef(() => AppModule)
);


@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		upgradeAdapter.upgradeNg1Component(
			Ng1Component.title
		)
	]
})
export class AppModule {}
