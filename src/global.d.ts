/// <reference types="@sveltejs/kit" />
/// <reference types="svelte-gestures" />

declare interface Math {
	randomInt: (max: number) => number;
	randomIntInclusive: (min: number, max: number) => number;
}
