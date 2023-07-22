import React from 'react'

document.body.style.backgroundColor = "#000116"; 
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message, organisation } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      organisation: organisation.value,
      message: message.value,
    }

    console.log(conFom)
  }
  return (
    
    <div className="container mt-5">
      <div className="d-flex justify-content-center mb-4"> </div> {/* Add spacing*/}
      <div className="d-flex justify-content-center mb-4"> </div> {/* Add spacing*/}
      <div className="d-flex justify-content-center mb-4"> </div> {/* Add spacing*/}
      <div className="d-flex justify-content-center mb-4"> </div> {/* Add spacing*/}
      <div className="d-flex justify-content-center mb-4"> </div> {/* Add spacing*/}
      <div className="d-flex justify-content-center"> {/* Center the h1 element */}
      <h1 className="text-info">Interested In Conecting With NCFI?</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="text-info">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="text-info">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="text-info">
          <label className="form-label" htmlFor="organisation">
          Organisation:
          </label>
          <input className="form-control" type="organisation" id="organisation" required />
        </div>
        <div className="text-info">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea className="form-control mb-3" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
        
      </form>
      <div style={{ height: '20px' }} /> {/* Add some space after the button */}
      <div style={{ height: '20px' }} /> {/* Add some space after the button */}
      
    </div>
    
    
  )
}


export default ContactForm

