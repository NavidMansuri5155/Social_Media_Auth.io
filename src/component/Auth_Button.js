import React from 'react';
import { facebookProvider, githubProvider, googleProvider } from '../config/Auth_Met';
import socialMediaAuth from "../service/Auth"

function Auth_Button() {

  // handleOnClicke function
  const handleOnClicke = async (provider) => {
    const res = await socialMediaAuth(provider)
    console.log(res);
  }

  return (
    <div>
      <h1>React.js Login App Firebase Social Auth</h1>
      <div class="cards-list">

        {/* facebook card */}
        <div class="card" onClick={() => { handleOnClicke(facebookProvider) }}>
          <div class="card_image">
            <img src="https://www.searchpng.com/wp-content/uploads/2019/03/Facebook-Icon-PNG-715x715.png" />
          </div>
          <div class="card_title">
            <p >LogIn with FaceBook</p>
          </div>
        </div>

        {/* github card */}
        <div class="card" onClick={() => { handleOnClicke(githubProvider) }}>
          <div class="card_image">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
          </div>
          <div class="card_title">
            <p >LogIn with GitHub</p>
          </div>
        </div>

        {/* google card */}
        <div class="card" onClick={() => { handleOnClicke(googleProvider) }}>
          <div class="card_image">
            <img src="https://thumbs.dreamstime.com/b/snapdeal-logo-189257116.jpg" />
          </div>
          <div class="card_title">
            <p >LogIn with Google</p>
          </div>
        </div>
      </div>
      <footer class="bg-light text-center text-lg-start">

        {/* footer */}
        <div className="footer">
          <div class="text-center p-3">
            © 2021 Copyright :_
            <a class="text-dark" href="https://github.com/NavidMansuri5155">NAVID_MANSURI</a>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Auth_Button;
