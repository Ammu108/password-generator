"use client";
import React, { useState } from 'react'

const page = () => {

  const [checksc, setChecksc] = useState(false)
  const [checklc, setChecklc] = useState(false)
  const [checkuc, setCheckuc] = useState(false)
  const [checknc, setChecknc] = useState(false)

  const [range, setRange] = useState('')
  const [outputValue, setOutputValue] = useState('')
  const [showNotificationLength, setNotificationsLength] = useState(false)
  const [showNotificationCheckbox, setNotificationsCheckbox] = useState(false)
  const [showNotificationCopied, setNotificationsCopied] = useState(false)


  const sc = '!~@#$%^&*()><?}{';
  const lc = 'abcdefghijklmnopqrstuvwxyz';
  const uc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nc = '1234567890';

  let passwordGenerator = () => {

    if (range < 6) {
      setNotificationsLength(true);
      setTimeout(() => {
        setNotificationsLength(false);
      }, 2000);
      return;
    }
    setNotificationsLength(false);

    let finalOutput = '';

    if (checksc || checklc || checknc || checkuc) {
      let charSet = '';
      if (checksc) {
        charSet += sc;
      }
      if (checklc) {
        charSet += lc;
      }
      if (checknc) {
        charSet += nc;
      }
      if (checkuc) {
        charSet += uc;
      }

      for (let i = 0; i < range; i++) {
        finalOutput += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setOutputValue(finalOutput);

    } else {
      // alert('please select anyone....')
      setNotificationsCheckbox(true);
      setTimeout(() => {
        setNotificationsCheckbox(false);
      }, 2000);

    }
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(outputValue)
    setNotificationsCopied(true);
    setTimeout(() => {
      setNotificationsCopied(false);
    }, 2000);
  }

  return (
    <>
      <div className="container">
        <div className="inbox">
          <div className="inbox-content">
            <h2 className='heading'>Password Creator</h2>

            <div className="top-section">
              <input type='text' readOnly value={outputValue} className='password-input'></input>
              <div className="icon">
                <i className="fa-regular fa-clone" onClick={copyPassword} style={{ cursor: 'pointer' }}></i>
              </div>
            </div>

            <div className="range">
              <h3 className="range-text">Password Length</h3>
              <input type='number' min={1} max={20} value={range} onChange={(e) => setRange(e.target.value)} className='range-number'></input>
            </div>

            <div className="check-boxes">
              <label className="capital-text">Upper Case</label>
              <input type="checkbox" checked={checkuc} onChange={() => setCheckuc(!checkuc)} className='checkbox' />
            </div>

            <div className="check-boxes">
              <label className="capital-text">Lower Case</label>
              <input type="checkbox" checked={checklc} onChange={() => setChecklc(!checklc)} className='checkbox' />
            </div>

            <div className="check-boxes">
              <label className="capital-text">Numbers</label>
              <input type="checkbox" checked={checknc} onChange={() => setChecknc(!checknc)} className='checkbox' />
            </div>

            <div className="check-boxes">
              <label className="capital-text">Symbols</label>
              <input type="checkbox" checked={checksc} onChange={() => setChecksc(!checksc)} className='checkbox' />
            </div>

            <div className='generator'>
              <button className='gen-btn' onClick={passwordGenerator}>Generate Password</button>
            </div>
          </div>
        </div>

        <div className={`notifications-length ${showNotificationLength ? " active-notifications-length " : ''}`}>
          <div className="warning-icon">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div className='notify'>Password Length Should Be Above 6</div>
        </div>

        <div className={`notifications-checkbox ${showNotificationCheckbox ? " active-notifications-checkbox " : ''}`}>
          <div className="warning-icon">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div className='notify'>Please Select Atleast One Of Them</div>
        </div>

        <div className={`notifications-copied ${showNotificationCopied ? " active-notifications-copied " : ''}`}>
          <div className="copied-icon">
            <i className="fa-solid fa-check"></i>
          </div>
          <div className='notify'>Copied</div>
        </div>
      </div>
    </>
  )
}

export default page
