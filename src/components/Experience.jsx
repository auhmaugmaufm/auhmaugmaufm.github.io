import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


const Experience = () => {
    return (
        <div className="me scroll-mt-20" id="skills">
            <div>
                <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row">
                            <FontAwesomeIcon icon={faBriefcase} className="w-7 h-7 mr-4" />
                            <h1 className="w-full text-xl font-bold">Experience</h1>
                        </div>
                        <hr className="my-5 bg-base-100 sm:w-4xl" />
                    </div>
                    <div>
                        <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-2">
                                <div>
                                    logo
                                </div>
                                <div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <h2 className="card-title text-xl">Web Developer</h2>
                                        <div className="badge badge-neutral text-base font-bold">Internship</div>
                                    </div>
                                    <div>
                                        <p className="w-auto sm:w-110 text-base">Pi Securities Public Company Limited</p>
                                        <p className="w-auto sm:w-110 text-base">May 2025</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience