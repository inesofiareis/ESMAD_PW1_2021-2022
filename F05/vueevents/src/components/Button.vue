<template>
	<div>
		<button @click="showMsgNoParam">No params</button>
		<button @click="showMsg(msg, $event)">With params</button>
		<br />
		<div v-on:click="showMsgNoParam">
			<button v-on:click="showMsgNoParam">CLICA-ME i</button>
		</div>
		<br />
		<div v-on:click="showMsgNoParam">
			<button v-on:click.stop="showMsgNoParam">CLICA-ME ii</button>
		</div>
		<br />
		<div v-on:click="showMsgNoParam">
			<button @click.stop.once="showMsgNoParam">CLICA-ME iii</button>
		</div>
		<br />
		<div v-on:click="showMsgNoParam">
			<button v-on:keyup.tab="showMsgNoParam">CLICA-ME iv</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Programação Web I',
			};
		},
		methods: {
			showMsgNoParam(event) {
				console.log(event.target.localName);
				console.log(event.type);
				alert(this.msg);
			},
			showMsg(param, event) {
				console.log(event.target.localName);
				console.log(event.type);
				alert(param);
			},
		},
	};
</script>

<style></style>
