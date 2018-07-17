import { h, Component } from 'preact'
import Browser from './browser'

export default class BrowserOne extends Component {
	constructor(props) {
		super(props)
	}
	handleForm(event) {
		if (this.password.value !== 'mrfluff123') {
			event.preventDefault();
			this.password.value = '';
			this.password.focus();
			// alert('WRONG PASSWORD BOII')
		}
	}
	render(props) {
		return (
			<Browser title=" ">
				<form action="/browser-2" onsubmit={ this.handleForm.bind(this) }>
					<h1>Geemail</h1>
					<ul>
						<li class="form__user">
							<h2>Welcome back, Darlene</h2>
							<p>darlene.b@geemail.com</p>
						</li>
						<li class="form__field">
							<label>Enter your password</label>
							<input ref={ el => this.password = el } type="password" />
						</li>
						<li>
							<button>Sign in</button>
						</li>
					</ul>
				</form>
			</Browser>
		)
	}
}
