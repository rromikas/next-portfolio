import { Project } from "types";

interface Props {
  project: Project;
}

const Card = ({ project }: Props) => {
  return (
    <div className="2xl:w-1/4 xl:w-1/3 sm:w-1/2 w-full p-2">
      <div className="relative hover:bg-black/40 rounded-xl transition">
        <div className="p-12">
          <img alt="" className="floating" src={project.image}></img>
        </div>
        <div className="flex px-6 pb-6">
          <div className="mt-auto">
            <div style={{ fontWeight: "700", fontSize: "28px", lineHeight: "35px" }}>{project.title}</div>
            <div className="text-base mt-5">{project.description}</div>
            <div className="flex flex-wrap justify-center md:justify-start">
              {[...(project?.apis ?? []), ...project.technologies].map((x, i) => (
                <div
                  onClick={() => {
                    window.open("http://google.com/search?q=" + x, "_blank");
                  }}
                  className="px-3 py-1 hover:underline cursor-pointer bg-black/50 mr-3 mt-3 font-medium text-sm text-white"
                  key={`tech-${i}`}
                >
                  #{x}
                </div>
              ))}
            </div>
            <div className="flex mt-6 justify-center md:justify-start">
              <div
                onClick={() => window.open(project.links.demo, "_blank")}
                className="cursor-pointer rounded-md filter bg-black/80 hover:bg-black/60 text-white transition max-w-[155px] w-full h-[44px] flex items-center justify-center mr-2"
              >
                Demo
              </div>
              <div
                className="cursor-pointer rounded-md bg-white/80 filter transition hover:bg-white/60 border max-w-[155px] w-full h-[44px] flex items-center justify-center text-black"
                onClick={() => window.open(project.links.code, "_blank")}
              >
                Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
