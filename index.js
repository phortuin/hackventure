const express = require('express')

const app = express()
const port = process.env.PORT || 3025

app.set('etag', false)
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next() })

// Why not html
app.set('view engine', 'html');

// Serve static assets on root path
app.use('/', express.static('static', { etag: false }))

// All routes render index.html because of our SPA
app.get('*', (req, res, next) => res.sendFile(`${__dirname}/src/templates/index.html`))

// Errors
app.use((err, req, res, next) => {
	err.message = err.message || err.error
	res.format({
		html: () => res.status(err.status || 500).send(`${err.message || 'Internal Server Error'}`),
		json: () => res.status(err.status || 500).json({ status: err.status || 500, message: err.message }),
	})
	if (app.get('env') === 'development') {
		console.error(err)
	}
})

// $RUN
app.listen(port, () => {
	if (app.get('env') === 'development') {
		console.log('Development server available on http://localhost:' + port)
	}
})
