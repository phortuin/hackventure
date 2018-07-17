import { h } from 'preact'

export default function Browser(props) {
	return (
		<section class="browser">
			<div class="browser__bar">
				<div class="browser__stoplights">
					<span class="red">●</span>
					<span class="yellow">●</span>
					<span class="green">●</span>
				</div>
				<div class="browser__title">
					{ props.title || 'Browser' }
				</div>
			</div>
			<div class="browser__canvas">
				{ props.children }
			</div>
		</section>
	)
}
