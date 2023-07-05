<script lang="ts">
	export let variant: 'default' | 'outline' | 'text' = 'default';
	export let disableShadow: boolean = false;
	export let disabled: boolean = false;
	export let startIcon: string = '';
	export let endIcon: string = '';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let color: 'default' | 'primary' | 'secondary' | 'danger' = 'default';

	const colorClasses = {
		primary: {
			bg: 'bg-primary',
			text: 'text-white',
			border: 'border-primary',
			hover: 'hover:bg-primaryD focus:bg-primaryD',
			outlineText: 'text-primary',
			outlineHover: 'hover:bg-primaryD/10 focus:bg-primaryD/10'
		},
		default: {
			bg: 'bg-default',
			text: 'text-black',
			border: 'border-black',
			hover: 'hover:bg-defaultD focus:bg-defaultD',
			outlineText: 'text-black',
			outlineHover: 'hover:bg-defaultD/10 focus:bg-defaultD/10'
		},
		secondary: {
			bg: 'bg-secondary',
			text: 'text-white',
			border: 'border-secondary',
			hover: 'hover:bg-secondaryD focus:bg-secondaryD',
			outlineText: 'text-secondary',
			outlineHover: 'hover:bg-secondaryD/10 focus:bg-secondaryD/10'
		},
		danger: {
			bg: 'bg-danger',
			text: 'text-white',
			border: 'border-danger',
			hover: 'hover:bg-dangerD focus:bg-dangerD',
			outlineText: 'text-danger',
			outlineHover: 'hover:bg-dangerD/10 focus:bg-dangerD/10'
		}
	};

	const sizes = {
		sm: 'w-20 h-8 text-sm',
		md: 'w-24 h-10 text-md',
		lg: 'w-28 h-12 text-lg'
	};

	const baseClass = `flex font-semibold py-2 px-4 rounded-lg ${
		sizes[size]
	}  items-center justify-center ${colorClasses[color]['hover']} ${
		disableShadow ? 'shadow-none' : 'shadow'
	} ${disabled ? 'opacity-25 cursor-not-allowed' : ''}`;
</script>

{#if variant == 'outline'}
	<button
		{...$$restProps}
		class="bg-transparent border {baseClass} {colorClasses[color]['border']} {colorClasses[color][
			'outlineText'
		]} {colorClasses[color]['outlineHover']}"
		{disabled}
	>
		{#if startIcon != ''}
			<span class="material-icons"> {startIcon} </span>
		{/if}
		<slot />
		{#if endIcon != ''}
			<span class="material-icons"> {endIcon} </span>
		{/if}
	</button>
{:else if variant == 'text'}
	<button
		{...$$restProps}
		class="{baseClass} {colorClasses[color]['outlineText']} {colorClasses[color]['outlineHover']}"
		{disabled}
	>
		{#if startIcon != ''}
			<span class="material-icons"> {startIcon} </span>
		{/if}
		<slot />
		{#if endIcon != ''}
			<span class="material-icons"> {endIcon} </span>
		{/if}
	</button>
{:else}
	<button
		class="{baseClass} {colorClasses[color]['bg']} {colorClasses[color]['text']}"
		{disabled}
		{...$$restProps}
	>
		{#if startIcon != ''}
			<span class="material-icons"> {startIcon} </span>
		{/if}
		<slot />
		{#if endIcon != ''}
			<span class="material-icons"> {endIcon} </span>
		{/if}
	</button>
{/if}
