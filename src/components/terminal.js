import { h, Component } from 'preact'

export default class Terminal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: []
		}
	}
	handleFormSubmit(event) {
		event.preventDefault()
		const newContent = this.state.content
		const input = this.texty.value
		const word = input.split(' ')[0]
		const arg = input.split(' ')[1]
		let output = ''
		if (input.trim().length !== 0) {
			output = [`-mash: ${word}: command not found`]
		}
		if (input === 'help') {
			output = [
			    'Mash v0.9.9r392',
			    'Some useful mash commands are:',
			    '',
				'  ls          list files',
				'  help        show this help text',
				'  cat [file]  show text file contents'
			]
		}
		if (word === 'ls') {
			output = ['pw.txt     trusted_hosts      dad.jpg']
			if (arg) {
				output = [`-ls: ${arg}: No such file or directory`] // maar wat als je `ls pw.txt` tiept
			}
		}
		if (word === 'cat') {
			if (arg === 'pw.txt') {
				output = ['darlene.b@geemail.com:mrfluff123']
			} else if (arg === 'trusted_hosts') {
				output = ['489.30.253.113 ssh-rsa Gmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp']
			} else if (arg === 'dad.jpg') {
				output = [`-cat: ${arg}: can’t parse binary file`]
			} else {
				output = ['Usage: cat [file name]']
			}
		}
		newContent.push({ input, output: output.join('\n') })
		this.setState({ content: newContent })
		this.texty.value = ''
	}
	handleFormClick(event) {
		this.texty.focus();
	}
	render(props, { content }) {
		return (
			<form class="terminal" onsubmit={ this.handleFormSubmit.bind(this) } onclick={ this.handleFormClick.bind(this) }>
				<p>Last login: Tue Jan 30 21:19 on ttys003</p>
				<p>Type <strong>help</strong> for a list of commands</p>
				<p>&nbsp;</p>
				{ content.map(item => (
					<pre>
						<p class="terminal__path">/Users/derp</p>
						<p class="terminal__command"><span>❯</span> { item.input }</p>
						<p class="terminal__output">{ item.output }</p>
					</pre>
				))}
				<p class="terminal__path">/Users/derp</p>
				<p class="terminal__command"><span>❯</span> <input autofocus type="text" ref={ el => this.texty = el } /></p>
			</form>
		)
	}
}
