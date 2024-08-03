import { about } from '../../portfolio'
import './About.css'


const About = () => {
  const { name, role, description, resume, social } = about

  const onDownload = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "tahacv.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          // <a href={resume}>
          //   <span type='button' className='btn btn--outline'>
          //     Resume
          //   </span>
          // </a>
          <button className='btn btn--outline' onClick={onDownload}>
             Resume
          </button>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <img src={social.icon} alt='github' />

              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
               <img src={social.linkedinIcon} alt='linkedIn' />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
