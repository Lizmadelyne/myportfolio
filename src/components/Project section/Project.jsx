

const data = [
  {
    id: 1,
    image:"../../../Assest/e-commerce.png",
    title: "E-commerce",
    desc: "This is an E-commerce with the platzi api",
    tech1: "React & vite",
    tech2: "Javascript",
    tech3: "Tailwind",
    url: "https://courageous-puppy-70f706.netlify.app",
  },
  {
    id: 2,
    image:"../../../Assest/image-of-nasa.png",
    title: "Nasa",
    desc: "This is the Nasa image of the day",
    tech1: "React & vite",
    tech2: "Javascript",
    tech3: "Tailwind",
    url: "https://image-of-today-from-nasa.netlify.app"
  },
  {
    id: 3,
    image:"../../../Assest/search-gifts.png" ,
    title: "Gifts app",
    desc: "Find your favorite gift",
    tech1: "React & vite",
    tech2: "Javascript",
    tech3: "css",
    url: "https://searching-gifts-app.netlify.app",
  },

  {
    id: 4,
    image:"../../../Assest/english-page.png" ,
    title: "Responsive web site",
    desc: "Landing page",
    tech1: "HTML 5",
    tech2: "Javascript",
    tech3: "css",
    url: "https://lizmadelyne.github.io/english-page/",
  },
  {
    id: 5,
    image:"../../../Assest/testoflove.png",
    title: "Test of love",
    desc: "This is an amazing responsive play",
    tech1: "React",
    tech2: "Javascript",
    tech3: "tailwind",
    url: "https://testoflove.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-6 mt-6 mb-6 bg-gradient-to-r hover:bg-gradient-to-l from-slate-300 to-blue-400">
      <div className="flex gap-4 items-center">
        <span className=" text-fuchsia-400 text-lg">0.3</span>
        <h5 className=" text-white text-lg p-4">Projects</h5>
      </div>

     <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto p-4">
        {data.map(({ id, image, title, desc, tech1, tech2, tech3, url }) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center items-center border border-gray-300 bg-slate-50 rounded-lg  overflow-hidden transition-transform duration-300 transform hover:scale-105 p-4 "
            >
              <div className="overflow-hidden border-2 border-slate-500 rounded-sm">
                <a href="" target="_blank">
                  <img src={image} alt={title} />
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
              </div>
              <div className="text-blue-900 mb-4">{desc}</div>

              <div className=" text-sm mb-2 ">
                <small className="p-2">{tech1}</small>
                <small className="p-2">{tech2}</small>
                <small className="p-2">{tech3}</small>
              </div>
              <div className=" cursor-pointer">
                <a href={url} target="_blank" className="text-blue-900">
                  {url} 
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Projects };
