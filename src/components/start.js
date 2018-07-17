import { h } from 'preact'

export default function Start(props) {
	return (
		<section>
			<h1 class="inverted">Your Mashbook set up is complete!</h1>
			<p class="inverted">Thanks for setting up your new Mashbook. Your e-mail account has been automatically verified and configured for you. Don’t hesitate to contact us for support at noreply@mashbook.com.</p>
			<a class="inverted" href="/mail-1">You have new mail</a>
		</section>
	)
}
