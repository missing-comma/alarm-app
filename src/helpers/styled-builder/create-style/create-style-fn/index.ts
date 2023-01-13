import * as types from '../types';
import { CreateStyleFn } from './protocol';

export class CreateStyleFnAdapter implements CreateStyleFn {
	create = <S extends types.AllStyles = types.AllStyles>(): types.IStyleBuilderCreate<S> => {
		return style => {
			if (typeof style === 'function') {
				return style();
			}
			return style;
		};
	};
}
