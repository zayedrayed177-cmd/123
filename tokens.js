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
    {
        channelId: "1425863585934082211",
        serverId: "1374408045874122833",
        token: process.env.token4,
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
        channelId: "1417230249913090059",
        serverId: "965765353571504138",
        token: process.env.token3,
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
        channelId: "1455243291489734666",
        serverId: "1363439136756727951",
        token: process.env.token4,
        selfDeaf: true,
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

