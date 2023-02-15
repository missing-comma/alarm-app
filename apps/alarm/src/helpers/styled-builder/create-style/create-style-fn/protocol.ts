import * as types from '../types';

export interface CreateStyleFn {
	create<S extends types.AllStyles = types.AllStyles>(): types.IStyleBuilderCreate<S>;
}
