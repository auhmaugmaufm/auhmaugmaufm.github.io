"use client"

const AboutMe = () => {
  return (
    <div className="flex flex-col" >
      <div className="hero mt-20 scroll-mt-20 w-auto" id="about-me">
        <div className="hero-content flex-col sm:flex-row">
          {/* card */}
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-3xs">
              <span className="text-3xl">S</span>
            </div>
          </div>
          <div>
            <div className="w-auto sm:w-150">
              <h1 className="text-2xl font-bold text-center">Supitcha Kaewkham</h1>
              <p className="text-lg text-info-content text-center">
                Computer Science
              </p>
            </div>

            {/* card */}
            <div className="card w-auto bg-base-100 card-xl shadow-sm sm:w-150">
              <div className="card-body">
                <p className="text-base">
                  Hi, I’m <b>Aum</b>, a Computer Science student passionate about full-stack web and mobile development.
                  I enjoy problem-solving through programming and data analysis, and I’m always eager to improve.
                  Currently, I’m seeking a Fullstack Developer internship.
                  <br></br><u><b><a className="cursor-pointer" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Let’s connect!</a></b></u></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >


  )
}
export default AboutMe