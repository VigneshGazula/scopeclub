import "./ResourceCard.css";

function ResourceCard(props) {
  const { title, link, type } = props;
  
  // Map resource types to appropriate icons (white logos)
  const getImageForType = (type) => {
    const imageMap = {
      "documentation": "/images/docs-white.png",
      "ebook": "/images/ebook-white.png",
      "tutorial": "/images/tutorial-white.png",
      "video": "/images/video-white.png",
      "course": "/images/course-white.png",
      "github": "/images/github-white.png",
      "article": "/images/article-white.png",
      "pdf": "/images/pdf-white.png",
      "guide": "/images/guide-white.png",
      "blog": "/images/blog-white.png",
      "interactive": "/images/interactive-white.png",
      "tool": "/images/tool-white.png",
      "gist": "/images/gist-white.png",
      "example": "/images/example-white.png",
      "certification": "/images/certification-white.png",
      "forum": "/images/forum-white.png",
      "workshop": "/images/workshop-white.png"
    };
    
    return imageMap[type] || "/images/default-white.png";
  };
  
  const getCardColor = () => {
    const colorMap = {
      "documentation": "#121212",
      "ebook": "#121212",
      "tutorial": "#37E60F",
      "video": "#121212",
      "course": "#37E60F",
      "github": "#121212",
      "article": "#121212",
      "pdf": "#121212",
      "guide": "#121212",
      "blog": "#121212",
      "interactive": "#37E60F",
      "tool": "#121212",
      "gist": "#121212",
      "example": "#121212",
      "certification": "#37E60F",
      "forum": "#121212",
      "workshop": "#37E60F"
    };
    
    return colorMap[type] || "#121212";
  };
  
  const imageUrl = `url(${getImageForType(type)})`;
  const cardColor = getCardColor();
  
  return (
    <div className="ResourceCard">
      <article>
        <div className="thumb" style={{ backgroundColor: cardColor === "#121212" ? "#121212" : "#37E60F" }}>
          <div className="rs-image" style={{ backgroundImage: imageUrl }}></div>
          <h2 className="rs-inner-title">{title}</h2>
          <div className="rs-type-tag">{type}</div>
        </div>
        <div className="infos" style={{ backgroundColor: cardColor === "#121212" ? "#37E60F" : "#121212", color: cardColor === "#121212" ? "#000" : "#fff" }}>
          <div>
            <h2 className="infos-title" style={{ color: cardColor === "#121212" ? "#000" : "#fff" }}>{title}</h2>
            <p className="txt" style={{ color: cardColor === "#121212" ? "#000" : "#fff" }}>
              A valuable resource about {title.toLowerCase()}
            </p>
          </div>
          <div className="infos-links">
            <div className="visit-container">
              <a href={link} className="infos-link visit-link" target="_blank" rel="noopener noreferrer" style={{ color: cardColor === "#121212" ? "#000" : "#fff" }}>
                Visit
              </a>
              <div className="arrow-icon"></div>
            </div>
            <div className="type-chip" style={{ backgroundColor: cardColor === "#121212" ? "#121212" : "#37E60F", color: cardColor === "#121212" ? "#fff" : "#000" }}>
              {type}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ResourceCard;
