import { h } from 'preact'

export default function Mail(props) {
	return (
		<section class="mail">
			<h1>McDerpface, Derp</h1>
			<dl class="mail__header">
				<dt>From</dt>
				<dd>{props.from}</dd>
				<dt>Sent</dt>
				<dd>{props.sent}</dd>
				<dt>To</dt>
				<dd>{props.to}</dd>
				<dt>Subject</dt>
				<dd>{props.subject}</dd>
			</dl>
			<div class="mail__canvas">
				{ props.children }
			</div>
		</section>
	)
}
