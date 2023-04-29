import React from 'react'

export default function () {
  return (
    <div className="contact">
        <main>
            <h1>Contact US</h1>
            <form >
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Enter Your Name' />
                    
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Enter Your Email' />

                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tells us About your Message' />

                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}
