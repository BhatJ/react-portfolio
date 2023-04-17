import React, { useState } from 'react';

const styles = {
  inputLabelStyle: {
    color: 'white',
    marginTop: '10px',
    fontSize: '20px',
  },
  errorMessageStyle: {
    color: 'white',
    marginTop: '10px',
    fontSize: '20px',
  },
  inputWidth: {
    width: "500px",
  }
};


function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If successful, we want to clear out the input after registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  const handleBlur = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    const inputName = e.target.name;
    const empty = !e.target.value;

    // Check if the input is empty
    if(empty)
    {
      if(inputName === 'name')
      {
        setErrorMessage('You need to enter your name');
      } else if (inputName === 'email')
      {
        setErrorMessage('You need to enter your email address');
      } else {
        setErrorMessage('You need to include a message');
      }
      return;
    }

    if(inputName === 'email')
    {
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      }
    }

    // Reset the error message
    setErrorMessage('');
  }

  return (
    <div>
      <form className="form">
        <p style={styles.inputLabelStyle}>Name:</p>
        <input style={styles.inputWidth}
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="name"
        />
        <p style={styles.inputLabelStyle}>Email address:</p>
        <input style={styles.inputWidth}
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder="email"
        />
        <p style={styles.inputLabelStyle}>Message:</p>
        <textarea style={styles.inputWidth}
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="message"
          rows="5"
        />
        {errorMessage && (
        <div>
          <p style={styles.errorMessageStyle}>{errorMessage}</p>
        </div>
        )}
        <br></br>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
