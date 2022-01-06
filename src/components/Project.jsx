import ProjectCard from './ProjectCard'
import Baffle from "baffle-react";
import { useState } from "react";

const Project = () => {
  const [update, setUpdate] = useState(true);
  const [obfuscate, setObfuscate] = useState(true)

  setTimeout(() => {
    setObfuscate(false)
    setUpdate(true)
  }, 2000)
  return (
    <div id="projects" className="ml6 relative project flex flex-col px-10 py-2 lg:ml-32 lg:p-20">
      <p className="tag font-bold">&lt;h1&gt;</p>
      <h1 className="about-title text-4xl py-2 font-bold lg:text-6xl">  <Baffle
        speed={50}
        characters="▓▒█ ▒█▒█▓ ░<>>▒ /▒< />"
        obfuscate={obfuscate}
        update={update}
        revealDuration={2000}
        revealDelay={0}
      >
        Project
      </Baffle></h1>
      <h1 className=" bg-text text-4xl font-bold absolute top-20 right-2 md:text-8xl">My Work</h1>
      <p className="tag font-bold">&lt;/h1&gt;</p>
      <p className="tag font-bold mt-2">&lt;p&gt;</p>
      <p data-aos="fade-up" className="text-lg text-white">A small gallery of recent projects done by me. I've done them all myself and some with a team. It's only a drop in the ocean compared to the entire list.
        Interested to see some more? Visit my <a className="primary-text" href="https://github.com/555REDOY555">github page </a>.

      </p>
      <p className="tag font-bold">&lt;/p&gt;</p>
      <div className="project-card-area flex flex-wrap item-center" style={{ justifyContent: "space-evenly" }}>
        <ProjectCard title="Dream Car"
          text="A web site build on react  and firebase"
          github="Cars"
          live="https://cars-a30a7.web.app/"
          data="fade-left"
        />
        <ProjectCard title="Tour and Go"
          text="A website build on top react and firebase"
          github="Tour-And-Go"
          live="https://tour-go-b9d6b.web.app/"
          data="fade-up"
        />
        <ProjectCard title="Baby land"
          text="A website build on top react and firebase"
          github="team-work-clint"
          live=" https://baby-land-6f5f5.firebaseapp.com/"
          data="fade-up"
        />

      </div>
    </div>
  )
}

export default Project
//https://tobiasahlin.com/moving-letters/#6