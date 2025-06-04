import xGammaLogo from '../assets/xgamma-icon.png';
import style from './Entry.module.css';
const Entry = () => {
  return (
    <div className={style['web-container']}>
      <div className={style['web-content']}>
        <h1 className={style['web-title']}>
          Technological Singularity is coming <span className={style['web-title-asterisk']}>*</span>
        </h1>
        <p className={style['web-subtitle']}>LLMs are here to stay.</p>
        <div className={style['web-content-text']}>
          <p>AI progress isn’t slowing down anytime soon—LLMs are here to stay.</p>
          <p>So what’s xGamma about? Just OSS.</p>
          <p>
            For over 30 years, open source technology has powered the backbone of the internet. Now,
            it's time to push the boundaries even further.
          </p>
          <p>
            xGamma is building standalone web applications using cutting-edge experimental tech,
            with a focus on integrating seamlessly with AI models.
          </p>
          <div className={style['web-footer-container']}>
            <p>— Team xG</p>
            <img src={xGammaLogo} alt="A kitty" className={style['web-logo']} width={'22px'} />
          </div>
        </div>
        <p className={style['web-footer']}>
          <a href="https://github.com/xGamma-ai" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          &nbsp;|&nbsp;
          <a href="https://xgamma.in/about" target="_blank" rel="noopener noreferrer">
            About Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default Entry;
