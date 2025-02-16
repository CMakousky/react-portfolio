import Summary from "../components/resume/Summary.jsx";
import Education from "../components/resume/Education.jsx";
import RelevantProjects from "../components/resume/RelevantProjects.jsx";
import AdditionalExperience from "../components/resume/AdditionalExperience.jsx";
import TechnicalSkills from "../components/resume/TechnicalSkills.jsx";
import Certifications from "../components/resume/Certifications.jsx";
import ContinuingEducation from "../components/resume/ContinuingEducation.jsx";
import Languages from "../components/resume/Languages.jsx";

function Resume() {
    return (
        <>
            <section id="resume">
                <h1>Resume</h1>
                <h4>
                    <a href="./download/2025-02-16_Resume_Christopher_Makousky.pdf" download={"cmakousky-resume"} id="resume-download-link">Download Resume</a>
                </h4>

                <section id="summary">
                    <Summary />
                </section>
                
                <section id="education">
                    <Education />
                </section>
                
                <section id="relevant-projects">
                    <RelevantProjects />
                </section>

                <section id="additional-experience">
                    <AdditionalExperience />
                </section>

                <section id="technical-skills">
                    <TechnicalSkills />
                </section>

                <section id="certifications">
                    <Certifications />
                </section>

                <section id="continuing-education">
                    <ContinuingEducation />
                </section>      

                <section id="languages">
                    <Languages />
                </section>
            </section>
        </>
    );
};

export default Resume;