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

export type Guild = {
    afkChannelId: string | null;
    afkTimeout: number | null;
    applicationId: number | null;
    approximateMemberCount: number | null;
    approximatePresenceCount: number | null;
    authPerms: string[];
    autoModerationRules: any[];
    banner: string | null;
    bannerURL: string | null;
    bans: any[];
    channels: string[];
    commands: string[];
    createdTimestamp: number;
    defaultMessageNotifications: number;
    description: string | null;
    discoverySplash: string | null;
    discoverySplashURL: string | null;
    emojis: string[];
    explicitContentFilter: number;
    features: string[];
    icon: string | null;
    iconURL: string | null;
    id: string;
    invites: any[];
    joinedTimestamp: number;
    large: boolean;
    maxStageVideoChannelUsers: number;
    maxVideoChannelUsers: number;
    maximumMembers: number;
    maximumPresences: number;
    memberCount: number;
    members: string[];
    mfaLevel: number;
    name: string;
    nameAcronym: string;
    nsfwLevel: number;
    ownerId: string;
    preferredLocale: string;
    premiumProgressBarEnabled: boolean;
    premiumSubscriptionCount: number;
    premiumTier: number;
    publicUpdatesChannelId: string | null;
    roles: string[];
    rulesChannelId: string | null;
    safetyAlertsChannelId: string | null;
    scheduledEvents: any[];
    shardId: number;
    splash: string | null;
    splashURL: string | null;
    stageInstances: any[];
    stickers: string[];
    systemChannelFlags: number;
    systemChannelId: string | null;
    vanityURLCode: string | null;
    vanityURLUses: number | null;
    verificationLevel: number;
    widgetChannelId: string | null;
    widgetEnabled: boolean;
};

export type Command = {
    name: string;
    description: string;
    category: string;
    detailedDescription: string;
}
