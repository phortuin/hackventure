import { h, Component } from 'preact'

export default class Chat extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chats: this.props.chats || [],
			chatsActive: []
		}
	}
	componentWillMount() {
		const chatsWithTimings = this.calcTimings(this.state.chats)
		let delay = 0
		chatsWithTimings.forEach((chat, index) => {
			if (index > 0) {
				delay = chatsWithTimings[index - 1].duration + delay
			}
			setTimeout(() => {
				const chatsActive = this.state.chatsActive
				chatsActive.push(chat.chat)
				this.setState({ chatsActive })
			}, delay + index * 1000)
		})
	}
	calcTimings(chats) {
		const wordsPerSecond = 3.33 // 200wpm is reading average / 60
		return chats.map((chat, index) => {
			return { chat, duration: Math.max(chat.message.split(' ').length / wordsPerSecond * 1000, 1000) }
		})
	}
	render(props, { chatsActive }) {
		// @todo bundle chats on theirs/mine
		// which makes CSS more readable & possible to show proper bubble
		return (
			<section class="chat">
				<ol class="chat__canvas">
					{ chatsActive.map(chat => (
						<ChatMessage chat={ chat } />
					))}
				</ol>
			</section>
		)
	}
}

function ChatMessage(props) {
	const date = new Date()
	const timeString = `${date.getHours()}:${date.getMinutes()}` // @todo fix minutes < 10 with leading 0
	return (
		<li class={ props.chat.mine ? 'balloon balloon--mine' : 'balloon balloon--theirs' }>
			<span class="balloon__message">{ props.chat.message }</span>
			{ /* <span class="balloon__time">{ timeString }</span> */ }
		</li>
	)
}
