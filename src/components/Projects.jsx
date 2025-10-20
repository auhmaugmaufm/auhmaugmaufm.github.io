import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="me scroll-mt-20" id="projects">
      <div>
        <div className="flex flex-col">
          <div>
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faBarsProgress} className="w-7 h-7 mr-4" />
              <h1 className="w-full text-xl font-bold">Projects</h1>
            </div>
            <hr className="w-full my-5 bg-base-100 sm:w-4xl" />
          </div>

          <div className="flex flex-col-reverse gap-5">
            <div>
              <div className="card sm:card-side bg-base-100 shadow-lg">
                <figure className="max-w-[400px] w-full">
                  <img src="/images/pos.png" alt="POS UI" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">POS UI Prototype</h2>
                  <div>
                    <p className="mb-3">Software Construction (2023)</p>
                    <p className="w-auto sm:w-110 text-base">A simple POS system UI built to explore the MVC pattern as part of a Software Construction course. No backend functionality included.</p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="badge badge-error text-base font-bold">Java</div>
                    <div className="badge badge-neutral text-base font-bold">NetBeans</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card sm:card-side bg-base-100 shadow-lg">
                <figure className="max-w-[400px] w-full">
                  <img src="/images/ds-elec.png" alt="ds-elec" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">Electricity Usage Prediction</h2>
                  <div>
                    <p className="mb-3">Data Science and Application Programs (2023)</p>
                    <p className="w-auto sm:w-110 text-base">Developed a model to predict electricity usage categories (LESS, MEDIUM, HIGH) based on user-input data, including electronic device usage, household appliances, and monthly electricity costs, using statistical analysis and machine learning techniques.</p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="badge badge-info text-base font-bold">Weka</div>
                    <div className="badge badge-neutral text-base font-bold">Excel</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card sm:card-side bg-base-100 shadow-lg">
                <figure className="max-w-[400px] w-full">
                  <img src="/images/db.png" alt="DB" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">Delivery System</h2>
                  <div>
                    <p className="mb-3">Database System (2023)</p>
                    <p className="w-auto sm:w-110 text-base">
                      A database designed to manage parcel delivery operations, including branch information, staff details, customer and address records, parcel registration, payment processing, delivery vehicle usage, shipping rate calculations, parcel status tracking, and final delivery details.
                    </p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="badge badge-info text-base font-bold">MySQL</div>
                    <div className="badge badge-neutral text-base font-bold">MySQL Workbench</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card sm:card-side bg-base-100 shadow-lg">
                <figure className="max-w-[400px] w-full">
                  <img src="/images/sa.png" alt="sa" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">Automotive Repair and Cost Estimation System</h2>
                  <div>
                    <p className="mb-3">System Analysis and Design (2024)</p>
                    <p className="w-auto sm:w-110 text-base">
                      A system designed to streamline the operations of auto repair shops, including user registration, service scheduling, vehicle data verification, repair management, spare parts inventory, cost estimation, and customer communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card sm:card-side bg-base-100 shadow-lg">
                <figure className="max-w-[400px] w-full">
                  <img src="/images/mb-shop.png" alt="mb-shop" />
                </figure>
                <div className="card-body">
                  <a href="https://github.com/auhmaugmaufm/shopping-management-react-native" target="_blank" className="flex flex-row items-center">
                    <h2 className="card-title text-xl">
                      Shopping Management (Mobile App)
                    </h2>
                    <FontAwesomeIcon icon={faUpRightFromSquare} className="w-3 h-3" />
                  </a>
                  <div>
                    <p className="mb-3">Mobile Application Design and Development (2025)</p>
                    <p className="w-auto sm:w-110 text-base">
                      A simple shopping management app built with React Native for mobile app development. Features include adding, editing, deleting and searching for products, status toggles, summary dashboards and data persistence with AsyncStorage and dark mode support.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="badge badge-warning text-base font-bold">JavaScript</div>
                    <div className="badge badge-info text-base font-bold">React Native</div>
                    <div className="badge badge-neutral text-base font-bold">Expo</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card sm:card-side bg-base-100 shadow-lg">
                <figure className="max-w-[400px] w-full">
                  <img src="/images/ds-model.png" alt="ds-model" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">Customer Personality Analysis</h2>
                  <div>
                    <p className="mb-3">Introduction to Data Science (2025)</p>
                    <p className="w-auto sm:w-110 text-base">
                      This project explores customer personality analysis to practice key data science techniques like mining, modeling, and visualization.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="badge badge-info text-base font-bold">Python</div>
                    <div className="badge badge-neutral text-base font-bold">Jupyter Notebook</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card sm:card-side bg-base-100 shadow-lg">
                <figure className="max-w-[400px] w-full">
                  <img src="/images/rt-2.png" alt="bus-booking" />
                </figure>
                <div className="card-body">
                  <a href="https://github.com/auhmaugmaufm/mobile-project" target="_blank" className="flex flex-row items-center">
                    <h2 className="card-title text-xl">
                      Bus Booking (Mobile App)
                    </h2>
                    <FontAwesomeIcon icon={faUpRightFromSquare} className="w-3 h-3" />
                  </a>
                  <div>
                    <p className="mb-3">Mobile Application Design and Development (2025) </p>
                    <p className="w-auto sm:w-110 text-base">
                      The bus booking application is designed to provide convenience for booking minivans, reducing the hassle of traditional booking methods such as on-site reservations or phone bookings. Users can also check the available schedules directly through the app.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="badge badge-warning text-base font-bold">JavaScript</div>
                    <div className="badge badge-info text-base font-bold">React Native</div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="badge badge-success text-base font-bold">Express</div>
                    <div className="badge badge-success text-base font-bold">NodeJS</div>
                    <div className="badge badge-info text-base font-bold">MySQL</div>
                    <div className="badge badge-neutral text-base font-bold">SQLite</div>
                    <div className="badge badge-neutral text-base font-bold">Expo</div>
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
export default Projects