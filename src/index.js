import React from 'react';
import PropTypes from 'prop-types';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import CryptoJS from 'crypto-js';
import aes from 'crypto-js/aes';
import usePersistedState from './utils/usePersistedState';
import useInput from './utils/useInput';
import styles from './styles.module.css';

const Encrypt = ({ password, obfuscate, blur, boxTitle, inputPlaceholder, buttonLabel, children }) => {
  const [fp, setFP] = React.useState(null);
  const [decrypted, setDecrypted] = React.useState("");
  const [pass, setPass] = React.useState("");
  const refBlur = React.useRef(null);
  const [renderChild, setRenderChild] = React.useState(true);
  const op = { attributes : true, childList: true, attributeFilter: ["style"] };
  const [cipher, setCipher] = usePersistedState('cipher', "");
  const context = React.useMemo(() => ({ cipher, setCipher }), [cipher, setCipher]);

  const handleSubmit = () => {
    if(pass === password) {
      setCipher(aes.encrypt(JSON.stringify({ password }), fp.visitorId).toString());
      setDecrypted(password);
    } else {
      setCipher('');
      setPass('');
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const mutCallback = (mutations) => {
    mutations.map(mutation => {
      if(mutation.attributeName === 'style'){
        console.log("style change");
        setRenderChild(false);
      }
    });    
  }


  React.useEffect(() => {
    (async function getFingerprint() {
      const fpi = await FingerprintJS.load();
      const result = await fpi.get();
      const d = aes.decrypt(cipher, result.visitorId).toString(CryptoJS.enc.Utf8);

      if(d) {
        setDecrypted(JSON.parse(d).password);
      }

      setFP(result);
    })();
  }, []);

  React.useEffect(() => {
    const observer = new MutationObserver(mutCallback);
    if(refBlur.current) {
      observer.observe(refBlur.current, op);
    }
    return () => {
      observer.disconnect();
    }
  }, [mutCallback, op]);

  return (
    <div id="cry">
      {fp === null && (
        <div className={styles.skChase}>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
        </div>
      )}
      {fp !== null && decrypted !== password && (
        <div>
          <div id="chk" className={styles.box}>
            <div className={styles.boxTitle}>
              {boxTitle}
            </div>
            <div>
              <input value={pass} onChange={e => setPass(e.target.value)} type="password" onKeyDown={handleKeyDown} placeholder={inputPlaceholder} />
            </div>
            <div>
              <button onClick={handleSubmit}>
                {buttonLabel}
              </button>
            </div>
          </div>
          <div ref={refBlur} id={`${blur && styles.b}`} style={{filter: `${blur && "blur(2px)"}`}}>
            {blur && (renderChild && children)}
          </div>
        </div>
      )}
      {fp !== null && decrypted === password && children}
    </div>
  )
}

Encrypt.defaultProps = {
  obfuscate: false,
  blur: false,
  boxTitle: 'This page is password protected.',
  inputPlaceholder: 'Password',
  buttonLabel: 'Submit'
}

Encrypt.propTypes = {
  password: PropTypes.string.isRequired,
  obfuscate: PropTypes.bool,
  blur: PropTypes.bool,
  title: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  buttonLabel: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default Encrypt
