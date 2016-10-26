import {AppComponent} from './appcomponent';
import {Ng1Component} from './ng1component';
import {CommonModule} from '@angular/common';
import {NgModule, forwardRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeAdapter as NgUpgradeAdapter} from '@angular/upgrade';


export const UpgradeAdapter	= new NgUpgradeAdapter(
	forwardRef(() => AppModule)
);


@NgModule({
	imports: [
		BrowserModule,
		CommonModule
	],
	declarations: [
		AppComponent,
		UpgradeAdapter.upgradeNg1Component(
			Ng1Component.title
		)
	]
})
export class AppModule {}
