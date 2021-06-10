import "./Contact.css"
export default function Contact () {
    const handle = (e) => {
        e.preventDefault();

    }
    return(<>
      <h1 align="center">
        Lets keep in toutch !
      </h1>
            <div className="contact-v2 flex">
                <div className="flex-1 flex-center flex">
                    <form>
            <label htmlFor="email">Email</label><br/>
            <input type="email" name="email" id="email" placeholder="example@domain.com" required/><br/>
            <label htmlFor="msg">Message</label><br/>
            <textarea name="msg" id="msg" placeholder="example ..." required></textarea><br/>
            <button className="button" onClick={handle}>
              <svg width="150" height="40" viewBox="0 0 150 40" fill="#FFD369" xmlns="http://www.w3.org/2000/svg" className="border"><path d="M149.167 0.666626V39.3333H0.833313V0.666626H149.167Z" className="bg-line"/><path d="M149.167 0.666626V39.3333H0.833313V0.666626H149.167Z" className="hl-line"/></svg>
              <span>SUBMIT</span>
            </button><br/>
            <a className="social-media" target="blank" href="mailto:abdennour.mez160@gmail.com"><i className="fas fa-at"></i></a>
            <a className="social-media" target="blank" href="https://instagram.com/mez.png"><i className="fab fa-instagram-square"></i></a>
            <a className="social-media" target="blank" href="https://dribbble.com/NouNouDz"><i className="fab fa-dribbble-square"></i></a>
            <a className="social-media" target="blank" href="https://twitter.com/AbdennourPro"><i className="fab fa-twitter-square"></i></a>
            <a className="social-media" target="blank" href="https://discord.com/channels/@me/401406828820299777"><i className="fab fa-discord"></i></a>
    </form>
    </div>
    <div className="flex-1 bg flex-center flex">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 166.667V171.667H33.3333H133.333C154.478 171.667 171.667 154.478 171.667 133.333V66.6667C171.667 45.5219 154.478 28.3333 133.333 28.3333H66.6666C45.5219 28.3333 28.3333 45.5219 28.3333 66.6667V166.667ZM66.6666 21.6667H133.333C158.147 21.6667 178.333 41.8531 178.333 66.6667V133.333C178.333 158.147 158.147 178.333 133.333 178.333H25C24.1159 178.333 23.2681 177.982 22.6429 177.357C22.0178 176.732 21.6666 175.884 21.6666 175V66.6667C21.6666 41.8531 41.853 21.6667 66.6666 21.6667Z" stroke="black" strokeWidth="10"/>
            <path className="path" d="M63.3334 80H136.667V86.6667H63.3334V80ZM63.3334 113.333H111.667V120H63.3334V113.333Z" stroke="black" strokeWidth="10"/>
        </svg>
    </div>
    </div>


    </>)
} 