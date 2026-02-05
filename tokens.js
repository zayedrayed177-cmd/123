// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1299121795621720104",
        serverId: "1281864747255468104",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "online",
        },
        selfMute: true,
    },
    {
        channelId: "1299121795621720104",
        serverId: "1281864747255468104",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "online",
        },
        selfMute: true,
    },
];
