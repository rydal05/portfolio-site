 function Portfolio() {
    return (
        <>
            <h1>This is the portfolio page</h1>
            <p>My completed and "proud" works are all listed publically on GitHub page. However, you can find absolutley anything and everything I'm working on in my <a href="https://git.reddolphin.tech/">Forgejo git instance</a>. This serves as both mirrors to my GitHub but also the source of my GitHub repos for which are mirrored over there. The reason being I wanted my own locally accessible Git server for when my wifi goes offline or whenever GitHub goes down.</p>

            <h1>Previous Programming Work</h1>
            <p>Below you'll find some modals which highlight detail and concisely put together projects I've worked on in the past. For all intents and purposes, these are "complete" as they finish out the goal they were initially intended to pursue, although I may make updates here and there where necessary.</p>

            <h1>Current Projects</h1>
            <p>Much like the above category, below you'll find modals showing some projects I'm currnetly working on, in as much detail as I'm allowed to offer.</p>

            <h1>Hackathons</h1>
            <p>Here you'll see some projects I collaborated with others on for hackathons.</p>

            <h1>Homelabbing & Self Hosted</h1>
            <p>As stated earlier, I mostly host and utilize my own pseudo-private Git instance which I service through the web using Cloudflare, Coolify, Forgejo, and an old computer my youngest brother had lying around. On this homelab, I run about 10 services concurrently including but not limited to: music & podcast streaming, PDF/book hosting, PDF manipulation, SuruScraper, jellyfin, some media tracker aggregators, and my very own VPN.</p>
        </>
    )
}

export default Portfolio