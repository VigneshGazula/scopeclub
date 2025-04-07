import "./ResourceCard.css";

function ResourceCard(props) {
  const { title, link, type } = props;
  
  // Map resource types to appropriate SimpleIcons logos (white)
  const getIconForType = (type) => {
    const iconMap = {
      "documentation": "https://cdn.simpleicons.org/readthedocs/white",
      "ebook": "https://cdn.simpleicons.org/bookstack/white",
      "tutorial": "https://cdn.simpleicons.org/udemy/white",
      "video": "https://cdn.simpleicons.org/youtube/white",
      "course": "https://cdn.simpleicons.org/coursera/white",
      "github": "https://cdn.simpleicons.org/github/white",
      "article": "https://cdn.simpleicons.org/medium/white",
      "pdf": "https://cdn.simpleicons.org/adobeacrobat/white",
      "guide": "https://cdn.simpleicons.org/gitbook/white",
      "blog": "https://cdn.simpleicons.org/blogger/white",
      "interactive": "https://cdn.simpleicons.org/codepen/white",
      "tool": "https://cdn.simpleicons.org/npm/white",
      "gist": "https://cdn.simpleicons.org/github/white",
      "example": "https://cdn.simpleicons.org/codepen/white",
      "certification": "https://cdn.simpleicons.org/credly/white",
      "forum": "https://cdn.simpleicons.org/discourse/white",
      "workshop": "https://cdn.simpleicons.org/pluralsight/white"
    };
    
    return iconMap[type] || "https://cdn.simpleicons.org/book/white";
  };
  
  // Background colors for different resource cards
  const getCardBgColor = () => {
    return "#33D90B"; // Use a single color for all cards
  };
  
  return (
    <div className="ResourceCard">
      <article>
        <div className="thumb">
          <img className="rs-image-logo" src={getIconForType(type)} alt={type} />
          <h2 className="rs-inner-title">{title}</h2>
          <div className="rs-type-tag" style={{ width: 'fit-content' }}>{type}</div>
        </div>
        <div className="infos" style={{ background: getCardBgColor() }}>
          <div>
            <h2 className="infos-title">{title}</h2>
            <p className="txt">A valuable resource about {title.toLowerCase()}</p>
          </div>
          <div className="infos-links">
            <a href={link} className="infos-link" target="_blank" rel="noopener noreferrer">
              <span className="visit-text">Visit</span>
              <span className="visit-arrow">→</span>
            </a>
            <div className="type-chip" style={{ width: 'fit-content' }}>{type}</div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ResourceCard;
