import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "./Post";
import { mediumId, mediumMsg } from "../../portfolio";

function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumId}`
        );
        const data = await res.json();
        setPost(data.items);
      } catch (error) {
        console.log("Miscelleneous ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section class="section bg-light" id="blog">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                My <span class="font-weight-bold">Medium</span> Articles
              </h2>

              <p class="text-muted mx-auto section-subtitle mt-3">
                {mediumMsg ? mediumMsg : ""}
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          {post.map((e) => {
            return (
              <Post
                key={uuidv4()}
                title={e.title}
                date={new Date(e.pubDate).toLocaleDateString("en-GB")}
                author={e.author}
                link={e.link}
                guid={e.guid}
                thumbnail={e.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
