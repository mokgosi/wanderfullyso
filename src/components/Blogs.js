import React from "react";

const Blogs = ({blogs}) => {
    return (
        <div>
            {blogs.map((b, i) => (
                <div className="row settings-row" key={b.id}>
                    <div className="col s12 ">
                        <div className="setting-box  center  img-box ">
                            <a className="img-wrap round" href="sub-apps-blog.html">
                                <img src={b.image} alt="image" className="responsive-img "/>
                            </a>
                            <a href="sub-apps-blog.html">
                                <h6>Blogs</h6>
                                <div className="tagline">{b.tagline}</div>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Blogs;