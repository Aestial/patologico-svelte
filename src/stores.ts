import './math.extensions';
import { derived, writable } from 'svelte/store';
import options from '$lib/json/colors.json';

export const tool = writable('brush');

export const bgOpt = createOption(options.background);
export const patternOpt = createOption(options.tie);
export const shirtOpt = createOption(options.shirt);
export const tieOpt = createOption(options.tie);

function createOption(options: string[]) {
	const length = options.length;
	const store = writable(Math.randomInt(length));
	const { set, subscribe, update } = store;

	return {
		subscribe,
		increment: () =>
			update((n) => {
				if (n >= length - 1) return 0;
				else return n + 1;
			}),
		decrement: () =>
			update((n) => {
				if (n <= 0) return length - 1;
				else return n - 1;
			}),
		reset: () => set(Math.randomInt(length)),
		get color() {
			return derived(store, ($store) => options[$store]);
		}
	};
}
