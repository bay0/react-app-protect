import React from 'react'
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'
//HTML5UP
import './assets/css/main.css'
import './assets/css/noscript.css'
import Screen from './assets/images/screen.jpg'
import Pic01 from './assets/images/pic01.jpg'
import Pic02 from './assets/images/pic01.jpg'
import Pic03 from './assets/images/pic01.jpg'

const App = () => {
  return (
    <Protect
      sha512='EE26B0DD4AF7E749AA1A8EE3C10AE9923F618980772E473F8819A5D4940E0DB27AC185F8A0E1D5F84F88BC887FD67B143732C304CC5FA9AD8E6F57F50028A8FF'
      blur={true}
      styles={{
        input: { color: 'blue' },
        header: { fontSize: '20px' }
      }}
    >
      <div>
        <div className='is-preload'>
          <header id='header'>
            <div className='content'>
              <h1>
                <a href='https://github.com/bay0/react-app-protect'>Fractal</a>
              </h1>
              <p>
                Just a simple, single page responsive
                <br />
                template brought to you by{' '}
                <a href='http://html5up.net'>HTML5 UP</a>
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/bay0/react-app-protect'
                    className='button primary icon solid fa-download'
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href='#one'
                    className='button icon solid fa-chevron-down scrolly'
                  >
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
            <div className='image phone'>
              <div className='inner'>
                <img src={Screen} alt='' />
              </div>
            </div>
          </header>
          <section id='one' className='wrapper style2 special'>
            <header className='major'>
              <h2>
                Sed ipsum magna lorem tempus amet
                <br />
                vehicula et gravida elementum
              </h2>
            </header>
            <ul className='icons major'>
              <li>
                <span className='icon solid fa-camera-retro'>
                  <span className='label'>Shoot</span>
                </span>
              </li>
              <li>
                <span className='icon solid fa-sync'>
                  <span className='label'>Process</span>
                </span>
              </li>
              <li>
                <span className='icon solid fa-cloud'>
                  <span className='label'>Upload</span>
                </span>
              </li>
            </ul>
          </section>
          <section id='two' className='wrapper'>
            <div className='inner alt'>
              <section className='spotlight'>
                <div className='image'>
                  <img src={Pic01} alt='' />
                </div>
                <div className='content'>
                  <h3>Magna sed ultrices</h3>
                  <p>
                    Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
                    elementum elit fusce accumsan dui libero, quis vehicula
                    lectus ultricies eu. In convallis amet leo non sapien
                    iaculis efficitur consequat lorem ipsum.
                  </p>
                </div>
              </section>
              <section className='spotlight'>
                <div className='image'>
                  <img src={Pic02} alt='' />
                </div>
                <div className='content'>
                  <h3>Ultrices nullam aliquam</h3>
                  <p>
                    Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
                    elementum elit fusce accumsan dui libero, quis vehicula
                    lectus ultricies eu. In convallis amet leo non sapien
                    iaculis efficitur consequat lorem ipsum.
                  </p>
                </div>
              </section>
              <section className='spotlight'>
                <div className='image'>
                  <img src={Pic03} alt='' />
                </div>
                <div className='content'>
                  <h3>Aliquam sed magna</h3>
                  <p>
                    Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
                    elementum elit fusce accumsan dui libero, quis vehicula
                    lectus ultricies eu. In convallis amet leo non sapien
                    iaculis efficitur consequat lorem ipsum.
                  </p>
                </div>
              </section>
              <section className='special'>
                <ul className='icons labeled'>
                  <li>
                    <span className='icon solid fa-camera-retro'>
                      <span className='label'>Ipsum lorem accumsan</span>
                    </span>
                  </li>
                  <li>
                    <span className='icon solid fa-sync'>
                      <span className='label'>Sed vehicula elementum</span>
                    </span>
                  </li>
                  <li>
                    <span className='icon solid fa-cloud'>
                      <span className='label'>Elit fusce consequat</span>
                    </span>
                  </li>
                  <li>
                    <span className='icon solid fa-code'>
                      <span className='label'>Lorem nullam tempus</span>
                    </span>
                  </li>
                  <li>
                    <span className='icon solid fa-desktop'>
                      <span className='label'>Adipiscing amet sapien</span>
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </section>
          <section id='three' className='wrapper style2 special'>
            <header className='major'>
              <h2>Magna leo sapien gravida</h2>
              <p>
                Gravida at leo elementum elit fusce accumsan dui libero, quis
                vehicula
                <br />
                lectus ultricies eu. In convallis amet leo sapien iaculis
                efficitur.
              </p>
            </header>
            <ul className='actions special'>
              <li>
                <a
                  href='https://github.com/bay0/react-app-protect'
                  className='button primary icon solid fa-download'
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/bay0/react-app-protect'
                  className='button'
                >
                  Learn More
                </a>
              </li>
            </ul>
          </section>
          <footer id='footer'>
            <ul className='icons'>
              <li>
                <a
                  href='https://github.com/bay0/react-app-protect'
                  className='icon brands fa-facebook-f'
                >
                  <span className='label'>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/bay0/react-app-protect'
                  className='icon brands fa-twitter'
                >
                  <span className='label'>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/bay0/react-app-protect'
                  className='icon brands fa-instagram'
                >
                  <span className='label'>Instagram</span>
                </a>
              </li>
            </ul>
            <p className='copyright'>
              &copy; bay0. Credits: <a href='http://html5up.net'>HTML5 UP</a>
            </p>
          </footer>
        </div>
      </div>
    </Protect>
  )
}

export default App
