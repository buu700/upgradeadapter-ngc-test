export class Ng1Component {
	public static title: string	= 'testNg1Component';

	public static config		= {
		bindings: {
			foo: '<',
			bar: '<'
		},
		controller: Ng1Component,
		template: `
			<div>Foo: $ctrl.foo</div>
			<div>Bar: $ctrl.bar</div>
		`
	};


	public foo: number;
	public bar: boolean;

	constructor () {}
}
