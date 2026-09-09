/**
 * ==========================================================================
 *      CENTRAL CONFIGURATION - CINEMATIC EDITORIAL LOADING SCREEN
 * ==========================================================================
 * You can configure branding, links, playlists, server news,
 * and component toggles for your FiveM server.
 */

window.ZyraConfig = {
    // 1. Server Branding Identity
    branding: {
        serverName: "ZYRA STORE",
        // If you have a logo image file, put its path here (e.g. "assets/logos/logo.png")
        // If left empty, it will display the serverName as premium serif text
        logoUrl: "", 
        serverSubtitle: "EDITION 01",
        claim: "The art of premium roleplay.",
        description: "Your ultimate destination for premium FiveM resources. Enjoy state-of-the-art visual quality, optimized performance, and exclusive features."
    },

    // 2. Default Enabled / Disabled Components
    components: {
        enableSocials: true,             // Show official social links
        enableMusic: true,               // Show minimal cassette player
        enableNews: true,                // Show server news feed
        enableBackgroundVideo: false,    // Show looping video background
        enableParticles: true            // Show floating cosmic dust particles
    },

    // 3. Official Links (Editorial Underlined Text Format)
    socials: [
        { name: "Discord", url: "https://discord.gg/zyra" },
        { name: "Website", url: "https://zyrastore.com" },
        { name: "YouTube", url: "https://youtube.com/zyra" },
        { name: "TikTok", url: "https://tiktok.com/@zyra" },
        { name: "Instagram", url: "https://instagram.com/zyra" },
        { name: "Twitter / X", url: "https://x.com/zyra" }
    ],

    // 4. Music Playlist (Supports local files or direct audio URLs)
    music: {
        defaultVolume: 0.15,
        playlist: [
            { 
                title: "Shadows of the City", 
                artist: "Neon Syndicate", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
            },
            { 
                title: "Whispers of the Street", 
                artist: "Midnight Vibe", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
            },
            { 
                title: "Echoes of Roleplay", 
                artist: "Retro Wave", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" 
            }
        ]
    },

    // 5. Server News and Updates (Magazine Editorial Card Format)
    news: [
        {
            type: "update",
            date: "19 JUL 2026",
            title: "Hidden Drug Laboratory",
            description: "Rumors point to a new clandestine laboratory in the northern territory. Authorities are investigating active leads."
        },
        {
            type: "evento",
            date: "15 JUL 2026",
            title: "15 New Imported Vehicles",
            description: "The VIP dealership now stocks 15 brand-new imported sports models featuring realistic handling and physics."
        }
    ],

    // 6. Useful Server Key Shortcuts (Shown under the updates feed)
    controls: [
        { key: "F1", description: "Mobile Phone" },
        { key: "F2", description: "Inventory" },
        { key: "F3", description: "Animations Panel" },
        { key: "K", description: "Seatbelt Toggle" }
    ],

    // 7. Ambient Background Variables
    background: {
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-background-43093-large.mp4",
        videoOpacity: 0.25,
        particleCount: 35,
        particleSpeed: 0.45
    },

    // 8. Connection Status Log Phrases
    loading: {
        musicTipText: "PRESS SPACE TO PAUSE MUSIC",
        phases: [
            { progress: 0, text: "Establishing secure connection to the database..." },
            { progress: 20, text: "Downloading scripts and interface assets..." },
            { progress: 50, text: "Initializing maps and optimizing vehicle textures..." },
            { progress: 80, text: "Synchronizing game environment with the server..." },
            { progress: 100, text: "Finished. Welcome to the server." }
        ]
    },

    // 9. Global Accent Styling Theme
    theme: {
        colorPrimary: "#080808",
        colorSecondary: "#0f0f0f",
        colorAccent: "#ffffff",
        colorTextPrimary: "#f5f5f5",
        colorTextSecondary: "#a3a3a3",
        colorTextMuted: "#525252",
        colorBorder: "rgba(255, 255, 255, 0.04)",
        colorBorderActive: "rgba(255, 255, 255, 0.15)",
        blurIntensity: "12px"
    },

    typography: {
        fontFamily: "'Inter', sans-serif",
        fontSizeBase: "16px"
    }
};
