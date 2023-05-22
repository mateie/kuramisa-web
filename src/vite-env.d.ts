/// <reference types="vite/client" />

export type Bot = {
    accentColor?: string;
    avatar?: string;
    avatarURL?: string;
    banner?: string;
    bannerURL?: string;
    bot: boolean;
    description: string;
    discriminator: string;
    flags: number;
    guilds: number;
    id: string;
    mfaEnabled: boolean;
    system: boolean;
    username: string;
    users: number;
    verified: boolean;
};

export type Message = {
    message: string;
    severity: "error" | "warning" | "info" | "success";
};
