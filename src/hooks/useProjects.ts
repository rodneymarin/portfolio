//import data from ;

import { useEffect, useState } from "react";

export interface ProjectData {
  title: string;
  desc: string;
  file: string;
  url: string;
  stack: string[];
}

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectData[]>();

  useEffect(() => {
    fetch("./projects.json")
      .then(response => response.json())
      .then((data: ProjectData[]) => setProjects(data))
      .catch((e: Error) => console.log(e));
  }, []);

  return [projects];
}