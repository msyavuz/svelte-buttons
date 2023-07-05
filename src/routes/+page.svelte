<script lang="ts">
	import Button from '../components/Button.svelte';
</script>

<div class="grid gap-2 pt-8 w-screen h-screen px-12 py-12 pb-4">
	<h1 class="mb-4 text-3xl font-extrabold text-gray-500">Buttons</h1>
	<div class="grid grid-cols-1 gap-8 place-content-center">
		<div class="flex flex-col gap-2">
			<p>
				{'<Button/>'}
			</p>
			<Button>Default</Button>
		</div>
		<div class="flex flex-col gap-2">
			<p>
				{'<Button variant="outline" color="primary"/>'}
			</p>
			<Button variant="outline" color="primary">Default</Button>
		</div>
		<div class="flex flex-col gap-2">
			<p>
				{'<Button variant="text" color="primary"/>'}
			</p>
			<Button variant="text" color="primary">Default</Button>
		</div>
		<div class="flex flex-col gap-2">
			<p>
				{'<Button color="primary" disableShadow/>'}
			</p>
			<Button color="primary" disableShadow>Default</Button>
		</div>
		<div class="grid grid-cols-4 place-content-center gap-16">
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="primary" startIcon="search"/>'}
				</p>
				<Button color="primary" startIcon="search">Default</Button>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="primary" endIcon="home"/>'}
				</p>
				<Button color="primary" endIcon="home">Default</Button>
			</div>
		</div>
		<div class="grid grid-cols-4 place-content-center gap-16">
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="primary" size="sm"/>'}
				</p>
				<Button color="primary" size="sm">Default</Button>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="primary" size="md"/>'}
				</p>
				<Button color="primary" size="md">Default</Button>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="primary" size="lg"/>'}
				</p>
				<Button color="primary" size="lg">Default</Button>
			</div>
		</div>
		<div class="grid grid-cols-4 place-content-center gap-16">
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="default"/>'}
				</p>
				<Button color="default">Default</Button>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="primary"/>'}
				</p>
				<Button color="primary">Default</Button>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="secondary"/>'}
				</p>
				<Button color="secondary">Default</Button>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{'<Button color="danger"/>'}
				</p>
				<Button color="danger">Default</Button>
			</div>
		</div>
		<div>
			<p>You can use any icon name from https://fonts.google.com/icons with lowercase.</p>
			<p>Created by Mehmet Salih Yavuz devChallanges.io</p>
		</div>
	</div>
</div>

<style>
	:global(body) {
		@apply grid place-content-center;
		@apply w-screen h-screen;
	}
</style>
