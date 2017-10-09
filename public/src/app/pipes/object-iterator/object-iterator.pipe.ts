import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectIterator'
})
export class ObjectIteratorPipe implements PipeTransform {

	transform(value, args:string[]):any {
		let arr = [];
		for (let key in value) {
			arr.push(value[key]);
		}
		return arr;
	}

}
