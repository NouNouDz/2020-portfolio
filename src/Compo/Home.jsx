import "./Home.css"
import React from "react"
import { Link } from "react-router-dom"

import hand from "./assets/hand.png"
import dev from "./assets/developing.png"
import design from "./assets/design.png"
import graphic from "./assets/graphic.png"
import proto from "./assets/proto.png"

export default function Home () {
    const arr = ["UI/UX Design", "Web Developemnt", "Web Testing", "Graphic Design"]
    const [ index, setIndex ] = React.useState(1)

    React.useEffect(() => {
        const intervalID = setTimeout(() =>  {
            setIndex((i) => i++)
        }, 1500);
    
        return () => clearInterval(intervalID);
    }, []);

    return(<>
            <div className="header flex flex-center">
        <div className="flex-1 flex flex-center">
        <div className="text-box">
            <div className="skill">{arr[ index % arr.length-1 ]}</div>
            <h1 style={{"fontSize": "3rem"}}>Abdennour Mez</h1>
            <p>
            Full-Stack Web Developer from Tlemcen, Algeria With more than 5+ years experience in digital world. I love listening to music while i’m working !
            </p>
            <Link className="button" to="contact">
              <svg width="150" height="40" viewBox="0 0 150 40" fill="#FFD369" xmlns="http://www.w3.org/2000/svg" className="border"><path d="M149.167 0.666626V39.3333H0.833313V0.666626H149.167Z" className="bg-line"/><path d="M149.167 0.666626V39.3333H0.833313V0.666626H149.167Z" className="hl-line"/></svg>
              <span>CONTACT ME</span>
            </Link>
        </div>
        </div>
        <div className="flex-1 flex-center flex">
          <div className="hand">
          <img src={hand} alt="hand"/>
          </div>
        </div>
    </div>
    <div>
      <h1 className="advice">
        Hard work means succes business
      </h1>
    </div>
    <div className="flex">
      <div className="flex-1 flex square flex-center flex">
        <div className="flex-1 flex flex-center space" style={{"flexDirection": "column"}}>
        <div className="am-box">
          <div>
            Developer
          </div>
          <img src={dev} alt="icon"/>
        </div>
        <div className="am-box">
          <div>
            UI/UX
          </div>
          <img src={design} alt="icon"/>
        </div>
        </div>
        <div className="flex-1 flex flex-center space" style={{"flexDirection": "column"}}>
        <div className="am-box">
          <div>
            Graphic
          </div>
          <img src={graphic} alt="icon"/>
        </div>
        <div className="am-box">
          <div>
            Prototype
          </div>
          <img src={proto} alt="icon"/>
        </div>
      </div>
      </div>
      <div className="flex-1 flex-center flex" id="about">
        <div className="text-box">
          <h1 className="title">
            About me
          </h1>
          <p>
            As a designer and developer, I understand the perfect user interface should look good and work even better. Alongside my clients, I uncover problems and solve them. In short, I create bolder online experiences.
          </p>
        </div>
      </div>
    </div>
    <div className="skills flex margin-50">
      <div className="flex-1 flex-center flex">
        <div className="text-box">
          <h1 className="title">
            My skills
          </h1>
          <p>
            As a designer and developer, I understand the perfect user interface should look good and work even better. Alongside my clients, I uncover problems and solve them. In short, I create bolder online experiences.
          </p>
        </div>
      </div>
            <div className="flex-1 flex square flex-center flex">
        <div className="flex-1 flex flex-center space" style={{"flexDirection": "column"}}>
        <div className="am-box">
          <div>
            Front-End
          </div>
<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M35 2.625C35 4.07475 33.8224 5.23797 32.3783 5.36572C27.4193 5.80441 22.6344 7.4824 18.4718 10.2638C13.5794 13.5328 9.76629 18.1791 7.51458 23.6152C5.26288 29.0513 4.67373 35.033 5.82164 40.8039C6.96955 46.5749 9.80296 51.8758 13.9636 56.0364C18.1242 60.197 23.4251 63.0305 29.1961 64.1784C34.967 65.3263 40.9487 64.7371 46.3848 62.4854C51.8209 60.2337 56.4672 56.4206 59.7362 51.5282C62.5176 47.3656 64.1956 42.5807 64.6343 37.6217C64.762 36.1776 65.9253 35 67.375 35V35C68.8247 35 70.0102 36.1769 69.9016 37.6225C69.8418 38.419 69.7548 39.212 69.641 40C68.8981 45.1471 67.014 50.086 64.1014 54.445C60.2556 60.2007 54.7893 64.6867 48.3939 67.3358C41.9985 69.9848 34.9612 70.678 28.1718 69.3275C21.3825 67.977 15.1461 64.6436 10.2513 59.7487C5.35642 54.8539 2.023 48.6175 0.672516 41.8282C-0.677967 35.0388 0.0151498 28.0015 2.66422 21.6061C5.31328 15.2107 9.79932 9.74441 15.555 5.89856C19.914 2.98602 24.8529 1.1019 30 0.358958C30.788 0.245211 31.581 0.158214 32.3775 0.0983724C33.8231 -0.0102459 35 1.17525 35 2.625V2.625Z" fill="#363636"/>
</svg>
        </div>
        <div className="am-box">
          <div>
            Back-End
          </div>
<svg width="59" height="70" viewBox="0 0 59 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M35 2.625C35 4.07475 33.8225 5.23798 32.3784 5.36573C28.3965 5.71798 24.5171 6.87005 20.976 8.76284C16.6612 11.0691 12.9819 14.4039 10.2638 18.4718C7.54571 22.5397 5.8728 27.2151 5.39326 32.084C4.91372 36.9528 5.64235 41.8648 7.51459 46.3848C9.38684 50.9048 12.3449 54.8933 16.1268 57.9971C19.9087 61.1008 24.3977 63.2239 29.1961 64.1784C33.9945 65.1328 38.9542 64.8892 43.636 63.469C48.3149 62.0496 52.5718 59.499 56.0301 56.0428V56.0428C56.0336 56.0393 56.0393 56.0393 56.0428 56.0428L57.8926 57.8926C58.9177 58.9177 58.9238 60.5882 57.8248 61.5336C57.2195 62.0542 56.5973 62.5534 55.9594 63.0304C52.7142 65.4569 49.0618 67.3093 45.16 68.4929C39.652 70.1637 33.817 70.4504 28.1718 69.3275C22.5267 68.2046 17.2455 65.7068 12.7962 62.0554C8.34696 58.4039 4.86687 53.7116 2.66422 48.3939C0.461581 43.0763 -0.395622 37.2975 0.168544 31.5694C0.732709 25.8413 2.70083 20.3408 5.89857 15.555C9.09632 10.7693 13.425 6.84601 18.5011 4.13276C22.0971 2.21068 25.9895 0.937849 30 0.358977C30.7884 0.245183 31.5813 0.158205 32.3775 0.0983842C33.8231 -0.0102421 35 1.17525 35 2.625V2.625Z" fill="#363636"/>
</svg>
        </div>
        </div>
        <div className="flex-1 flex flex-center space" style={{"flexDirection": "column"}}>
        <div className="am-box">
          <div>
            UI/UX
          </div>
<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M35 2.625C35 4.07475 33.8224 5.23797 32.3783 5.3657C26.4372 5.8912 20.7685 8.19361 16.1268 12.0029C10.8063 16.3694 7.1644 22.4455 5.82163 29.1961C4.47886 35.9466 5.5183 42.9539 8.76284 49.0241C12.0074 55.0942 17.2563 59.8515 23.6152 62.4854C29.9741 65.1194 37.0495 65.4669 43.636 63.469C50.2224 61.471 55.9123 57.2511 59.7362 51.5282C63.5601 45.8054 65.2814 38.9337 64.6067 32.084C63.9323 25.2358 60.9046 18.8332 56.0396 13.9667V13.9667C56.0378 13.965 56.0378 13.9622 56.0396 13.9604L59.7463 10.2537C59.7476 10.2524 59.7498 10.2524 59.7512 10.2537V10.2537C60.9392 11.442 62.0341 12.7081 63.0305 14.0406C66.8349 19.1285 69.2026 25.1843 69.8315 31.5694C70.6251 39.6278 68.6001 47.7122 64.1014 54.445C59.6027 61.1777 52.9087 66.1423 45.16 68.4929C37.4112 70.8435 29.0871 70.4345 21.6061 67.3358C14.125 64.237 7.94985 58.6402 4.13275 51.4989C0.315645 44.3576 -0.907222 36.1137 0.67251 28.1718C2.25224 20.23 6.53683 13.0816 12.7962 7.94463C17.7558 3.87438 23.7121 1.26648 30 0.358916C30.7877 0.24522 31.5806 0.158209 32.3774 0.0983508C33.8231 -0.0102513 35 1.17525 35 2.625V2.625Z" fill="#363636"/>
</svg>
        </div>
      </div>
      </div>
    </div>
    <div className="work" id="work">
      <h1 className="title">
        Latest projects
      </h1>
      <div className="flex">
            <div className="slides">
                <a href="https://dribbble.com/shots/11359632-ONGOD-Browser" target="_blank" rel="noreferrer"><img src="https://cdn.dribbble.com/users/4918400/screenshots/11359632/media/cb37296d4724a0d1e534ab6585851131.png?resize=300x150" width="300px" height="150px" alt="work"/></a>
            </div>
            <div className="slides">
                <a href="https://i.imgur.com/j6XQG0i.png" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/5Qnum6c.png" width="300px" height="150px" alt="work"/></a>
            </div>
            <div className="slides">
                <a href="https://i.imgur.com/uQkPVtV.png" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/2RjHK34.png" width="300px" height="150px" alt="work"/></a>
            </div>
            <div className="slides">
                <a href="https://github.com/NouNouDz/Discord-Bot-Web-Template" target="_blank" rel="noreferrer"><img src="https://github.com/NouNouDz/Discord-Bot-Web-Template/raw/master/Screenshot.png" width="300px" height="150px" alt="work"/></a>
            </div>
            <Link to="/work" className="see-more">See more ...</Link>
      </div>
    </div>
    <div className="contact margin-50" id="contact">
      <h1>
        Do you want to contact me !
      </h1>
            <Link className="button" to="contact">
              <svg width="150" height="40" viewBox="0 0 150 40" fill="#FFD369" xmlns="http://www.w3.org/2000/svg" className="border"><path d="M149.167 0.666626V39.3333H0.833313V0.666626H149.167Z" className="bg-line"/><path d="M149.167 0.666626V39.3333H0.833313V0.666626H149.167Z" className="hl-line"/></svg>
              <span>CONTACT</span>
            </Link>
    </div>
    </>)
} 