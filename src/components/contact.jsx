// import React from 'react';
// import ReactDOM from 'react-dom';

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       description: ""
//     };
//   }
//   render() {
//     return (
//       <form>
//       <textarea value={this.state.description} />
//       </form>
//     );
//   }
// }


//     export default Contact;
    

import React from 'react';








export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleChange2 = this.handleChange2.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
	  <br></br><br></br>
    	<h2>E-mail</h2>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Your e-mail"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '20px'}}
      	/>
		  <br></br>
	<h2>Message</h2>
<textarea
        	id="test-mailing2"
        	name="test-mailing2"
        	onChange={this.handleChange2}
        	placeholder="Your message"
        	required
        	value={this.state.name}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />


  	</form>
	)
  }

  handleChange(event) {
	this.setState({feedback: event.target.value})

  }

  handleChange2(event) {
  this.setState({name: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_bRhXggeu';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
	
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
		console.log('Email successfully sent!')
		window.location.href = "/index.html"
	  })
	  
/// remove console log to link or modules!!!!!

  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('mail error:', err))
  }
}
