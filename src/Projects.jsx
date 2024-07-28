import { useFetchPerson } from './FetchProject';
const Projects = () => {
  const { loading, people } = useFetchPerson();
  if (loading) {
    return (
      <section className='projects'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {people.map((item) => {
          const { title, projectUrl, url, id } = item;
          return (
            <a
              key={id}
              href={projectUrl}
              className='project'
              target='_'
              rel='noreferrer'
            >
              <img src={url} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
