<script lang="ts">
    export let options: string[];
    export let value = '#fff';
	
    const length = options.length;

	$: index = Math.randomInt(length);
	$: if (index >= length) index = 0;
	$: if (index < 0) index = length - 1;

	$: value = options[index];
</script>