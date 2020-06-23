import axios from "axios";
const baseURL="https://ifrances-portfolio2.herokuapp.com/project"

class projectService {
  constructor() {
    this.projectService=axios.create({
      baseURL,
      withCredentials: true,
      seUnifiedTopology: true
    });
  }

  getProject(name) {
    return this.projectService.get(`/${name}`).then(({data})=>data).catch(err=>{console.log(err)})
  }
}

const axiosRequestFunctions=new projectService();

export default axiosRequestFunctions;
