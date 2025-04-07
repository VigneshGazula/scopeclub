import "./ResourceCard.css";

function ResourceCard(props) {
  const { title, link, type } = props;
  
  // Map resource types to appropriate images
  const getImageForType = (type) => {
    const imageMap = {
      "documentation": "/images/documentation.png",
      "ebook": "/images/ebook.png",
      "tutorial": "/images/tutorial.png",
      "video": "/images/video.png",
      "course": "/images/course.png",
      "github": "/images/github.png",
      "article": "/images/article.png",
      "pdf": "/images/pdf.png",
      "guide": "/images/guide.png",
      "blog": "/images/blog.png",
      "interactive": "/images/interactive.png",
      "tool": "/images/tool.png",
      "gist": "/images/gist.png",
      "example": "/images/example.png",
      "certification": "/images/certification.png",
      "forum": "/images/forum.png",
      "workshop": "/images/workshop.png"
    };
    
    return imageMap[type] || "/images/default.png";
  };
  
  const imageUrl = `url(${getImageForType(type)})`;
  
  return (
    <div className="ResourceCard">
      <article>
        <div className="thumb">
          <div className="rs-image" style={{ backgroundImage: imageUrl }}></div>
          <h2 className="rs-inner-title">{title}</h2>
          <div className="rs-type-tag">{type}</div>
        </div>
        <div className="infos">
          <div>
            <h2 className="infos-title">{title}</h2>
            <p className="txt">A valuable resource about {title.toLowerCase()}</p>
          </div>
          <div className="infos-links">
            <a href={link} className="infos-link" target="_blank" rel="noopener noreferrer">
              Open Resource
            </a>
            <div className="type-chip">{type}</div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ResourceCard;
