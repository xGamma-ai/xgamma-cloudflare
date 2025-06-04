import styles from './alwint.module.css';
import alwinImage from '../../assets/profiles/alwin.png';
import image_1 from '../../assets/logos/image_1.svg';
import image_2 from '../../assets/logos/image_2.png';
import image_3 from '../../assets/logos/image_3.png';
import image_4 from '../../assets/logos/image_4.png';
import { Github, Linkedin, Twitter } from 'lucide-react';
import type { ISocials } from '../../commons/commonsTypes';
const AlwinT = () => {
  const imageList = [image_1, image_2, image_4, image_3];
  const socials: ISocials[] = [
    {
      icon: <Linkedin color="#ffffff" />,
      name: 'alwin-t',
      url: 'http://linkedin.com/in/alwin-t-808315202/',
    },
    {
      icon: <Twitter color="#ffffff" />,
      name: 'alwin8080',
      url: 'alwin8080',
    },
    {
      icon: <Github color="#ffffff" />,
      name: 'alwinsNest',
      url: 'http://github.com/alwinsNest',
    },
  ];
  return (
    <div className={styles['alwin-entry']}>
      <div className={styles['alwin-header-div']}>
        <img width="200px" height="200px" src={alwinImage} alt="alwin t" />
        <div>
          <h3>Alwin T Varghese</h3>
          <p>Software Engineer @ Myntra</p>
          <div className={styles['profile-socials']}>
            {socials.map((vls, inx) => {
              return (
                <div key={`socials-1-${inx}`}>
                  {vls.icon}
                  <p
                    onClick={() => {
                      window.open(vls.url, '_blank');
                    }}
                  >
                    {vls.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles['alwin-desc']}>
        <p>
          I got my start in open source through the XR Open Source Fellowship in 2023—and I've been
          hooked ever since. Professionally, I’ve had the opportunity to work with three startups in
          both intern and full-time roles, primarily focusing on UI development and front-end magic.
          Beyond code, I’m deeply passionate about fashion tech and love bringing ideas to life
          through 3D design in Blender. I live at the intersection of creativity and code—and I’m
          always exploring what’s next.
        </p>
      </div>

      <div className={styles['alwin-exp']}>
        <p>My work exp:</p>
        <div className={styles['alwin-logo-controls']}>
          {imageList.map((vls, inx) => {
            return (
              <div
                key={`icons-1-${inx}`}
                style={{ width: '250px', height: '70px', marginTop: '30px' }}
              >
                <img src={vls} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlwinT;
