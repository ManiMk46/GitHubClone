import React from 'react'
import lists from "../lists.json"

export default function Overview() {
  return (
    <div className='overview'>
        <div className="overviewDescription">
          <p>ManiiiMk / README.md</p>
          <h1>Hi I'm Mani Mk</h1>

          <div className="line"/>

          <h2>A React Developer</h2>
          <p>I love coding with html, css, sass, js and react</p>
          <p>Follow me on my github, Instagram and X</p>
        </div>

        <div className="repositories">
          <div className="repositoriesTitle">
            <h2>Popular repositories</h2>
          </div>

          <div className="repositoriesContainer">
            {lists.map((repo, i)=> (
              <div className="repositoriesBox" key={i}>
                   <div className="repositoriesTop">
                    <h3>{repo.repo}</h3>
                    <p>{repo.status}</p>
                   </div>
                     <div className="repositoriesBottom">
                      <p>{repo.stack}</p>
                     </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
