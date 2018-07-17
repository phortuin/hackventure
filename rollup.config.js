import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'

export default {
	input: 'src/index.js',
	output: {
		file: 'static/bundle.js',
		format: 'iife'
	},
	plugins: [
		resolve(),
		buble({jsx: 'h'}),
	],
	sourcemap: true
}
