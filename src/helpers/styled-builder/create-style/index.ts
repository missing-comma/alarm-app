import * as types from './types';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { CreateStyle, CreateStyleGenerator, CreateStyleFn } from './protocol';

export class CreateStyleAdapter implements CreateStyleGenerator {
	private readonly createStyleFn: CreateStyleFn;

	constructor(createStyleFn: CreateStyleFn) {
		this.createStyleFn = createStyleFn;
	}

	generate = (): CreateStyle => {
		const create: types.IStyleBuilderCreate = this.createStyleFn.create();

		const specificCreateStyle: types.ISpecificStyleBuilderCreate = {
			text: this.createStyleFn.create<TextStyle>(),
			view: this.createStyleFn.create<ViewStyle>(),
			image: this.createStyleFn.create<ImageStyle>(),
		};

		return Object.assign(create, specificCreateStyle);
	};
}

export * from './create-style-fn';
