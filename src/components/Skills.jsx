import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faC, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJs, faHtml5, faJava, faPython, faGolang } from '@fortawesome/free-brands-svg-icons'


const Skills = () => {
  return (
    <div className="me scroll-mt-20" id="skills">
      <div>
        <div className="flex flex-col">
        <div>
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faCode} className="mr-4" size="2x" />
              <h1 className="w-full text-xl font-bold">Skills</h1>
            </div>
            <hr className="my-5 bg-base-100 sm:w-4xl" />
          </div>
          <div>
            {/* skill */}
            <table className="table">
              <tbody>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faGolang} className="mr-3" size="2x" color="rgb(0,213,255)" />
                    <p className="text-xl text-start"> Golang</p>
                  </th>
                  <td className="text-base text-start">Gin, Fiber</td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faJs} className="mr-3" size="2x" color="rgb(255,220,0)" />
                    <p className="text-xl text-start">JavaScript</p>
                  </th>
                  <td className="text-base text-start">React, React Native, NodeJS, Express</td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faPython} className="mr-3" size="2x" color="royalblue" />
                    <p className="text-xl text-start">Python</p>
                  </th>
                  <td className="text-base text-start">FastAPI, Jupyter, Anaconda</td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faJava} className="mr-3" size="2x" color="red" />
                    <p className="text-xl text-start">Java</p>
                  </th>
                  <td className="text-base text-start">Spring Boot</td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faDatabase} className="mr-3" size="2x" color="rgb(30,48,80)" />
                    <p className="text-xl text-start">Database</p>
                  </th>
                  <td className="text-base text-start">MySQL, PostgreSQL, SQLite, Redis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills