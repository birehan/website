import ImageDisplay from "./ImageDisplay";

const posts = [ 
  {
    "id": 2,
    "title": "AI Contract Assistant: The RAG Solution",
    "href": "#",
    "description": "This project creates a high-precision AI Contract Advisor using Retrieval-Augmented Generation (RAG). It focuses on developing a user-friendly assistant for contract analysis, extracting data from various formats, and employing effective chunking and embedding techniques. The system integrates vector databases, evaluates performance with the RAGAS framework, and features a RESTful API and React frontend. The aim is to enhance legal contract management and improve efficiency for legal professionals.",
    "imageUrl": "/assets/blog_1.png",
    "date": "Feb 24, 2024",
    "datetime": "2024-02-24",
    "category": [
      { "title": "Legal AI", "href": "#" },
      { "title": "RAG", "href": "#" },
      { "title": "Chatbot", "href": "#" },
      { "title": "LLM Integration", "href": "#" },
      { "title": "RAGAS Evaluation", "href": "#" },
      { "title": "Flask", "href": "#" },
      { "title": "React", "href": "#" },
    ]
  }
  
];

export default function BlogComponent() {
  return (
    <div className="  mt-4   gap-6 flex flex-col  ">
      {posts.map((post) => (
        <article
          key={post.id}
          className="p-4 blog border rounded  relative isolate flex flex-col gap-8 lg:flex-row max-h-fit bg-overlay-color text-text-color"
        >
          {/* <div className="relative aspect-[16/12] sm:aspect-[2/1] lg:aspect-square lg:w-[10rem] lg:max-w-[12rem] lg:shrink-0">
            <img
              alt=""
              src={post.imageUrl}
              className="absolute inset-0 h-full w-full rounded-md object-cover "
            />

          </div> */}
          <ImageDisplay imageUrl={post.imageUrl}/>

          <div>
            <div className="group relative max-w-3xl">
              <h3 className=" text-lg font-semibold text-high-emph group-hover:text-med-emph">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-med-emph">{post.description}</p>
            </div>
            <div className="flex items-center mt-4 gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-low-emph">
                {post.date}
              </time>
            
          <div className="flex flex-row gap-2">
            {post.category.map((item => {
              return <div>
                <a
                  href={item.href}
                  className="blog-keywords relative z-10  rounded-full bg-overlay-light px-3 py-1.5 font-medium text-text-color hover:bg-overlay-color">
                  {item.title}
                </a>
              </div>
            }))}
          </div>
        </div>
        </div>
        </article>
      ))}
    </div>
  );
}
