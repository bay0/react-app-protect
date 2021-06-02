import React from 'react'
import PropTypes from 'prop-types'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import CryptoJS from 'crypto-js'
import html2canvas from 'html2canvas'
import aes from 'crypto-js/aes'
import usePersistedState from './utils/usePersistedState'
import cssStyles from './styles.module.css'

const Protect = ({
  sha512,
  blur,
  boxTitle,
  inputPlaceholder,
  buttonLabel,
  styles,
  children
}) => {
  const chkHash = sha512.toLowerCase()
  const [fp, setFP] = React.useState(null)
  const [decryptedHash, setDecryptedHash] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [cipher, setCipher] = usePersistedState('cipher', '')
  const context = React.useMemo(() => ({ cipher, setCipher }), [
    cipher,
    setCipher
  ])

  const refBlur = React.useRef(null)
  const [renderChild, setRenderChild] = React.useState(true)

  const handleSubmit = () => {
    const hash = CryptoJS.SHA512(pass).toString()

    if (hash === chkHash) {
      setCipher(aes.encrypt(JSON.stringify({ pass }), fp.visitorId).toString())
      setDecryptedHash(hash)
    } else {
      setCipher('')
      setPass('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  React.useEffect(() => {
    ;(async function getFingerprint() {
      const fpi = await FingerprintJS.load()
      const result = await fpi.get()
      let d
      try {
        d = aes.decrypt(cipher, result.visitorId).toString(CryptoJS.enc.Utf8)
      } catch (e) {
        d = ''
      }

      if (d) {
        const hash = CryptoJS.SHA512(JSON.parse(d).pass).toString()
        setDecryptedHash(hash)
      }

      setFP(result)
    })()
  }, [])

  React.useEffect(() => {
    if (blur && refBlur.current && renderChild) {
      html2canvas(refBlur.current, { useCORS: true }).then((canvas) => {
        refBlur.current.appendChild(canvas)
        setRenderChild(false)
      })
    }
  })

  if (fp !== null && decryptedHash === chkHash) {
    return children
  }

  return (
    <div>
      {fp === null && (
        <div className={cssStyles.skChase}>
          <div className={cssStyles.skChaseDot}></div>
          <div className={cssStyles.skChaseDot}></div>
          <div className={cssStyles.skChaseDot}></div>
          <div className={cssStyles.skChaseDot}></div>
          <div className={cssStyles.skChaseDot}></div>
        </div>
      )}
      {fp !== null && decryptedHash !== chkHash && (
        <div>
          <div style={styles.wrapper} className={cssStyles.box}>
            <div style={styles.header} className={cssStyles.boxTitle}>
              {boxTitle}
            </div>
            <div>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type='password'
                onKeyDown={handleKeyDown}
                placeholder={inputPlaceholder}
                style={styles.input}
              />
            </div>
            <div className={cssStyles.boxButton}>
              <button style={styles.button} onClick={handleSubmit}>
                {buttonLabel}
              </button>
            </div>
          </div>
          <div
            ref={refBlur}
            className={blur && cssStyles.blurClass}
            style={{ filter: `${blur && 'blur(10px)'}`, overflow: 'hidden' }}
          >
            {blur && renderChild && children}
          </div>
        </div>
      )}
    </div>
  )
}

Protect.defaultProps = {
  blur: false,
  boxTitle: 'This page is password protected.',
  inputPlaceholder: 'Password',
  buttonLabel: 'Submit',
  styles: {
    input: {},
    button: {},
    header: {},
    wrapper: {}
  }
}

Protect.propTypes = {
  sha512: PropTypes.string.isRequired,
  blur: PropTypes.bool,
  title: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  buttonLabel: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.element.isRequired
}

export default Protect
