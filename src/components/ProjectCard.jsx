const ProjectCard = ({ img, title, description, live, github }) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl border border-zinc-200 dark:border-none dark:text-white dark:shadow-zinc-700 dark:bg-zinc-600">
      <figure className="border-b border-zinc-300 cursor-pointer">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body px-3">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center my-1">
          <div className="btn-group">
            <a href={live} target="_blank" className="btn">
              Preview
            </a>
            <button className="btn btn-accent">About</button>
            <a href={github} target="_blank" className="btn">
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
