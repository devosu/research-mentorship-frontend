// @app/resources/page.tsx
//
// 'research.osu.dev' resources definition.

// NextJS essential imports.
import Link from "next/link";

// Local imports.
import DefaultFooter from "@components/DefaultFooter";
import DefaultHeader from "@components/DefaultHeader";

export default function SignUp() {
  return (
    <main>
      <DefaultHeader />

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Department Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Department Website
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Biological Chemistry and Pharmacology
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/bcpharm">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Biomedical Education and Anatomy
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/bmea">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Biomedical Informatics
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/biomedical-informatics">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">Economics</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://economics.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Cancer Biology and Genetics
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/cancer-biology-and-genetics">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Microbial Infection and Immunity
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/mii">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Neuroscience
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/neuroscience">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Physiology and Cell Biology
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/physiology-and-cell-biology">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Health and Rehabilitation Sciences
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://hrs.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Sports Performance and Injury Prevention
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/sports-medicine/research/research-labs">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Civil, Environmental, and Geodetic Engineering
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://ceg.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Molecular Genetics
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://molgen.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Management and Human Resources
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://fisher.osu.edu/academic-departments/management-human-resources/">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">Psychology</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://psychology.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">Cardiology</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/internal-medicine/cardiovascular-medicine/research">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Psychiatary and Behaviorial Health
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/psychiatry-and-behavioral-health">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Communication
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://comm.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Biomedical Engineering
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://bme.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">Pediatrics</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://medicine.osu.edu/departments/pediatrics">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Evolution, Ecology, and Organismal Ecology
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://eeob.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Integrated Systems Engineering
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://ise.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">Oncology</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://cancer.osu.edu/for-healthcare-professionals/find-a-department-or-division/department-of-internal-medicine/division-of-medical-oncology">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Veterinary Medicine
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://vet.osu.edu/">Visit Site</Link>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4">
                      Operations (Integrated Engineering)
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link href="https://ise.osu.edu/directory/operations-research">
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </main>
  );
}
