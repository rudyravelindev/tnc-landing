import React, { useState } from 'react';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [message, setMessage] = useState('');

  const MAILCHIMP_URL =
    'https://gmail.us7.list-manage.com/subscribe/post-json?u=3305318f139bc52e55ec476c2&id=631c06c913&c=?';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setMessage('');

    const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}`;

    try {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        const callbackName = 'jsonpCallback_' + Date.now();

        window[callbackName] = (data) => {
          if (data.result === 'success') {
            setStatus('success');
            setMessage('Hooray! You’re on our waitlist.');
          } else {
            setStatus('error');
            setMessage(data.msg || 'Something went wrong. Try again.');
          }
          delete window[callbackName];
          document.body.removeChild(script);
          resolve();
        };

        script.src = url.replace('=?', `=${callbackName}`);
        script.onerror = () => {
          setStatus('error');
          setMessage('Network error. Try again.');
          delete window[callbackName];
          document.body.removeChild(script);
          reject();
        };

        document.body.appendChild(script);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form onSubmit={handleSubmit} className="validate" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Add your Email and Join the Waitlist
                <span className="asterisk"></span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div id="mce-responses" className="clear foot">
              {status && (
                <div
                  className={`response ${status}`}
                  style={{ display: 'block' }}
                >
                  {message}
                </div>
              )}
            </div>

            {/* Hidden field for Mailchimp bot protection */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              <input
                type="text"
                name="b_3305318f139bc52e55ec476c2_631c06c913"
                tabIndex="-1"
                value=""
                readOnly
              />
            </div>

            <div className="clear foot">
              <input
                type="submit"
                value="Get Early Access"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpForm;
