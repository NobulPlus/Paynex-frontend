/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import styles from './screenStyle_3-8.css';


const Screen3 = () => {
  return(
    <div className="{styles.content}">
      <h2 class="contentHeading">Verify your account</h2>
      <p>Enter the 6 digits security code sent to gr*****2@gmail.com</p>
      <form className='form1' action="" method="POST">
        <div class="digitFill">
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
        </div>
        <p id="validation">Code expires in <b>5:00</b></p>

        <a class="reSend">Resend Code</a>
        <footer>
            <input type="submit" class="contButton" value="Continue"/>
        </footer>
    </form>
  </div>
  );
};

export default Screen3;