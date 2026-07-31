function Project({link, title, image, text} ){
    return (
        <>
            <h2><a href={link}>{title}</a></h2>
            <img src={image}></img>
            <p>text</p>
        </>
    )
}

export default Project