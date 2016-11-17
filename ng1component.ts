import {UpgradeComponent} from '@angular/upgrade/static';
import {
	Directive,
	DoCheck,
	ElementRef,
	Inject,
	Injector,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges
} from '@angular/core';


@Directive({
	selector: 'test-ng1-component'
})
export class Ng1Component extends UpgradeComponent implements DoCheck, OnChanges, OnInit, OnDestroy {
	public static title: string	= 'testNg1Component';

	public static config		= {
		bindings: {
			message: '<'
		},
		controller: Ng1Component,
		template: `
			<div>Upgraded ng1 component. {{$ctrl.message}}</div>
		`
	};


	@Input() message: string;

	ngDoCheck () { super.ngDoCheck(); }
	ngOnChanges (changes: SimpleChanges) { super.ngOnChanges(changes); }
	ngOnDestroy () { super.ngOnDestroy(); }
	ngOnInit () { super.ngOnInit(); }

	constructor (
		@Inject(ElementRef) elementRef: ElementRef,
		@Inject(Injector) injector: Injector
	) {
		super(Ng1Component.title, elementRef, injector);
	}
}
