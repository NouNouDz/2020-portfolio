import "./Work.css"
import men from "./assets/men.png"
import women from "./assets/women.png"

export default function Work () {
    return(<>
        <h1 align="center">My work !</h1>
        <div className="flex flex-center">
            <div className="flex-1 flex flex-center">
                <a className="work-box flex flex-center" href="https://alexbot.xyz" target="_blank" rel="noreferrer" style={{background: "#efefee"}}>
                    <img src="https://cdn.discordapp.com/attachments/800062407354875934/852281160464990238/Frame_1.png" alt="work" height="100%" />
                </a>
            </div>
            <div className="flex-1 flex flex-center">
                <div className="work-box work-box-2 flex">
                    <div><img src={men} alt="men" className="avatar"/></div>
                    <div>
                    <h2>James</h2>
                    <p>He put in an incredible amount of effort on our project and delivered something we're really happy with. Would highly recommend.</p>
                    </div>
                </div>
                <div className="work-box work-box-2 flex">
                    <div><img src={women} alt="women" className="avatar"/></div>
                    <div>
                    <h2>Jennifer</h2>
                    <p>From the first meeting I had absolute trust in Abdennour and am very happy that my expectations were met at all times. Creative work processes, strong product development and a fantastic result.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-center">
            <div className="flex-1 flex flex-center">
                <div className="work-box flex flex-center" style={{background: "#1d1d1d"}}>
                    <img src="https://cdn.discordapp.com/attachments/800062407354875934/852285014162276383/unknown.png" alt="work" height="100%" />
                </div>
            </div>
            <div className="flex-1 flex flex-center">
                <a className="work-box flex flex-center" href="https://github.com/NouNouDz/Discord-Bot-Web-Template" target="_blank" rel="noreferrer" style={{background: "#004687"}}>
                    <img src="https://cdn.discordapp.com/attachments/800062407354875934/852287164393979905/Frame_3_1.png" alt="work" height="100%" style={{position: "absolute"}}/>
                </a>
            </div>
        </div>
        <div className="flex flex-center">
            <div className="flex-1 flex flex-center">
                <div className="work-box flex flex-center" style={{background: "#0c7fab"}}>
                    <img src="https://cdn.discordapp.com/attachments/694142291975077888/772428319626887168/Video_YouTube_1.png" alt="work" width="100%" height="auto"/>
                </div>
            </div>
            <div className="flex-1 flex flex-center">
                <a className="work-box flex flex-center" style={{background: "#cecece"}} href="https://dribbble.com/shots/11359632-ONGOD-Browser" target="_blank" rel="noreferrer">
                    <img src="https://cdn.dribbble.com/users/4918400/screenshots/11359632/media/cb37296d4724a0d1e534ab6585851131.png" alt="work" height="100%" />
                </a>
            </div>
        </div>
    </>)
} 