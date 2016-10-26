import {Component} from '@angular/core';


@Component({
	selector: 'test-app',
	template: `
		<test-ng1-component foo='4' bar='true'></test-ng1-component>
	`
})
export class AppComponent {
	constructor () {}
}
