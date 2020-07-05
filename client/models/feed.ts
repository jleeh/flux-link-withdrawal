// this file was automatically generated, DO NOT EDIT

// helpers
const maxUnixTSInSeconds = 9999999999;

function ParseDate(d: Date | number | string): Date {
    if (d instanceof Date) return d;
    if (typeof d === 'number') {
        if (d > maxUnixTSInSeconds) return new Date(d);
        return new Date(d * 1000); // go ts
    }
    return new Date(d);
}

function ParseNumber(v: number | string, isInt = false): number {
    if (!v) return 0;
    if (typeof v === 'number') return v;
    return (isInt ? parseInt(v) : parseFloat(v)) || 0;
}

function FromArray<T>(Ctor: { new(v: any): T }, data?: any[] | any, def = null): T[] | null {
    if (!data || !Object.keys(data).length) return def;
    const d = Array.isArray(data) ? data : [data];
    return d.map((v: any) => new Ctor(v));
}

function ToObject(o: any, typeOrCfg: any = {}, child = false): any {
    if (!o) return null;
    if (typeof o.toObject === 'function' && child) return o.toObject();

    switch (typeof o) {
        case 'string':
            return typeOrCfg === 'number' ? ParseNumber(o) : o;
        case 'boolean':
        case 'number':
            return o;
    }

    if (o instanceof Date) {
        return typeOrCfg === 'string' ? o.toISOString() : Math.floor(o.getTime() / 1000);
    }

    if (Array.isArray(o)) return o.map((v: any) => ToObject(v, typeOrCfg, true));

    const d: any = {};

    for (const k of Object.keys(o)) {
        const v: any = o[k];
        if (!v) continue;
        d[k] = ToObject(v, typeOrCfg[k] || {}, true);
    }

    return d;
}

// classes
// struct2ts:github.com/linkpoolio/marketplace/core/store/types.FeedGenericArrayGenericValue
class FeedGenericArrayGenericValue {
    V: any;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.V = ('V' in d) ? d.V as any : {};
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/types.FeedGenericArray
class FeedGenericArray {
    V: FeedGenericArrayGenericValue[];

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.V = Array.isArray(d.V) ? d.V.map((v: any) => new FeedGenericArrayGenericValue(v)) : [];
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterUserTeamHandleSignature
class FeedJobNodeAdapterUserTeamHandleSignature {
    kb_username: string;
    sig_hash: string;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.kb_username = ('kb_username' in d) ? d.kb_username as string : '';
        this.sig_hash = ('sig_hash' in d) ? d.sig_hash as string : '';
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterUserTeamHandle
class FeedJobNodeAdapterUserTeamHandle {
    name: string;
    signatures?: FeedJobNodeAdapterUserTeamHandleSignature[];
    team?: FeedJobNodeAdapterUserTeam | null;
    user?: FeedJobNodeAdapterUser | null;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.signatures = Array.isArray(d.signatures) ? d.signatures.map((v: any) => new FeedJobNodeAdapterUserTeamHandleSignature(v)) : [];
        this.team = ('team' in d) ? new FeedJobNodeAdapterUserTeam(d.team) : null;
        this.user = ('user' in d) ? new FeedJobNodeAdapterUser(d.user) : null;
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterUserTeam
class FeedJobNodeAdapterUserTeam {
    name?: string;
    verified?: boolean;
    adapters?: FeedJobNodeAdapter[];
    url?: string;
    handle: FeedJobNodeAdapterUserTeamHandle | null;
    users?: FeedJobNodeAdapterUser[];

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.verified = ('verified' in d) ? d.verified as boolean : false;
        this.adapters = Array.isArray(d.adapters) ? d.adapters.map((v: any) => new FeedJobNodeAdapter(v)) : [];
        this.url = ('url' in d) ? d.url as string : '';
        this.handle = ('handle' in d) ? new FeedJobNodeAdapterUserTeamHandle(d.handle) : null;
        this.users = Array.isArray(d.users) ? d.users.map((v: any) => new FeedJobNodeAdapterUser(v)) : [];
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterUser
class FeedJobNodeAdapterUser {
    name?: string;
    verified?: boolean;
    email?: string;
    team?: FeedJobNodeAdapterUserTeam | null;
    teamId?: number[] | null;
    adapters?: FeedJobNodeAdapter[];
    handle: FeedJobNodeAdapterUserTeamHandle | null;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.verified = ('verified' in d) ? d.verified as boolean : false;
        this.email = ('email' in d) ? d.email as string : '';
        this.team = ('team' in d) ? new FeedJobNodeAdapterUserTeam(d.team) : null;
        this.teamId = ('teamId' in d) ? d.teamId as number[] : null;
        this.adapters = Array.isArray(d.adapters) ? d.adapters.map((v: any) => new FeedJobNodeAdapter(v)) : [];
        this.handle = ('handle' in d) ? new FeedJobNodeAdapterUserTeamHandle(d.handle) : null;
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterPlatform
class FeedJobNodeAdapterPlatform {
    name?: string;
    adapters?: FeedJobNodeAdapter[];

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.adapters = Array.isArray(d.adapters) ? d.adapters.map((v: any) => new FeedJobNodeAdapter(v)) : [];
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterDataSource
class FeedJobNodeAdapterDataSource {
    name?: string;
    url?: string;
    adapters?: FeedJobNodeAdapter[];

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.url = ('url' in d) ? d.url as string : '';
        this.adapters = Array.isArray(d.adapters) ? d.adapters.map((v: any) => new FeedJobNodeAdapter(v)) : [];
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterRepository
class FeedJobNodeAdapterRepository {
    name: string;
    owner: string;
    readme: string;
    url: string;
    httpsCloneUrl: string;
    sshCloneUrl: string;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.owner = ('owner' in d) ? d.owner as string : '';
        this.readme = ('readme' in d) ? d.readme as string : '';
        this.url = ('url' in d) ? d.url as string : '';
        this.httpsCloneUrl = ('httpsCloneUrl' in d) ? d.httpsCloneUrl as string : '';
        this.sshCloneUrl = ('sshCloneUrl' in d) ? d.sshCloneUrl as string : '';
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterBadgeBadgeType
class FeedJobNodeAdapterBadgeBadgeType {
    name: string;
    displayName: string;
    description: string;
    points: number;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.displayName = ('displayName' in d) ? d.displayName as string : '';
        this.description = ('description' in d) ? d.description as string : '';
        this.points = ('points' in d) ? d.points as number : 0;
    }

    toObject(): any {
        const cfg: any = {};
        cfg.points = 'number';
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapterBadge
class FeedJobNodeAdapterBadge {
    type: FeedJobNodeAdapterBadgeBadgeType | null;
    oid: number[];
    values: FeedGenericArray;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.type = ('type' in d) ? new FeedJobNodeAdapterBadgeBadgeType(d.type) : null;
        this.oid = ('oid' in d) ? d.oid as number[] : [];
        this.values = new FeedGenericArray(d.values);
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeAdapter
class FeedJobNodeAdapter {
    name?: string;
    description?: string;
    nodeIdentifier?: string;
    userId?: number[] | null;
    user?: FeedJobNodeAdapterUser | null;
    teamId?: number[] | null;
    team?: FeedJobNodeAdapterUserTeam | null;
    parameters?: string[];
    platforms?: FeedJobNodeAdapterPlatform[];
    dataSources?: FeedJobNodeAdapterDataSource[];
    repository?: FeedJobNodeAdapterRepository | null;
    nodes?: FeedJobNode[];
    badges?: FeedJobNodeAdapterBadge[];

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.description = ('description' in d) ? d.description as string : '';
        this.nodeIdentifier = ('nodeIdentifier' in d) ? d.nodeIdentifier as string : '';
        this.userId = ('userId' in d) ? d.userId as number[] : null;
        this.user = ('user' in d) ? new FeedJobNodeAdapterUser(d.user) : null;
        this.teamId = ('teamId' in d) ? d.teamId as number[] : null;
        this.team = ('team' in d) ? new FeedJobNodeAdapterUserTeam(d.team) : null;
        this.parameters = ('parameters' in d) ? d.parameters as string[] : [];
        this.platforms = Array.isArray(d.platforms) ? d.platforms.map((v: any) => new FeedJobNodeAdapterPlatform(v)) : [];
        this.dataSources = Array.isArray(d.dataSources) ? d.dataSources.map((v: any) => new FeedJobNodeAdapterDataSource(v)) : [];
        this.repository = ('repository' in d) ? new FeedJobNodeAdapterRepository(d.repository) : null;
        this.nodes = Array.isArray(d.nodes) ? d.nodes.map((v: any) => new FeedJobNode(v)) : [];
        this.badges = Array.isArray(d.badges) ? d.badges.map((v: any) => new FeedJobNodeAdapterBadge(v)) : [];
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeNodeWallet
class FeedJobNodeNodeWallet {
    address: number[];
    node?: FeedJobNode | null;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.address = ('address' in d) ? d.address as number[] : [];
        this.node = ('node' in d) ? new FeedJobNode(d.node) : null;
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNodeNetwork
class FeedJobNodeNetwork {
    id: number;
    name: string;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.id = ('id' in d) ? d.id as number : 0;
        this.name = ('name' in d) ? d.name as string : '';
    }

    toObject(): any {
        const cfg: any = {};
        cfg.id = 'number';
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobNode
class FeedJobNode {
    name?: string;
    description?: string;
    verified: boolean;
    adapters?: FeedJobNodeAdapter[];
    team?: FeedJobNodeAdapterUserTeam | null;
    user?: FeedJobNodeAdapterUser | null;
    jobs?: FeedJob[];
    feeds?: Feed[];
    wallets?: FeedJobNodeNodeWallet[];
    oracleAddress?: string;
    jobRunCount: number;
    managingTeam?: FeedJobNodeAdapterUserTeam | null;
    managingTeamID?: number[] | null;
    network?: FeedJobNodeNetwork | null;
    networkId: number;
    badges?: FeedJobNodeAdapterBadge[];
    active?: boolean | null;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.description = ('description' in d) ? d.description as string : '';
        this.verified = ('verified' in d) ? d.verified as boolean : false;
        this.adapters = Array.isArray(d.adapters) ? d.adapters.map((v: any) => new FeedJobNodeAdapter(v)) : [];
        this.team = ('team' in d) ? new FeedJobNodeAdapterUserTeam(d.team) : null;
        this.user = ('user' in d) ? new FeedJobNodeAdapterUser(d.user) : null;
        this.jobs = Array.isArray(d.jobs) ? d.jobs.map((v: any) => new FeedJob(v)) : [];
        this.feeds = Array.isArray(d.feeds) ? d.feeds.map((v: any) => new Feed(v)) : [];
        this.wallets = Array.isArray(d.wallets) ? d.wallets.map((v: any) => new FeedJobNodeNodeWallet(v)) : [];
        this.oracleAddress = ('oracleAddress' in d) ? d.oracleAddress as string : '';
        this.jobRunCount = ('jobRunCount' in d) ? d.jobRunCount as number : 0;
        this.managingTeam = ('managingTeam' in d) ? new FeedJobNodeAdapterUserTeam(d.managingTeam) : null;
        this.managingTeamID = ('managingTeamID' in d) ? d.managingTeamID as number[] : null;
        this.network = ('network' in d) ? new FeedJobNodeNetwork(d.network) : null;
        this.networkId = ('networkId' in d) ? d.networkId as number : 0;
        this.badges = Array.isArray(d.badges) ? d.badges.map((v: any) => new FeedJobNodeAdapterBadge(v)) : [];
        this.active = ('active' in d) ? d.active as boolean : null;
    }

    toObject(): any {
        const cfg: any = {};
        cfg.jobRunCount = 'number';
        cfg.networkId = 'number';
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobTaskTaskParam
class FeedJobTaskTaskParam {
    taskId: number[];
    key: string;
    values: FeedGenericArray;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.taskId = ('taskId' in d) ? d.taskId as number[] : [];
        this.key = ('key' in d) ? d.key as string : '';
        this.values = new FeedGenericArray(d.values);
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJobTask
class FeedJobTask {
    jobId: number[];
    adapterId: number[];
    adapter?: FeedJobNodeAdapter | null;
    param: FeedJobTaskTaskParam[];
    index: number;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.jobId = ('jobId' in d) ? d.jobId as number[] : [];
        this.adapterId = ('adapterId' in d) ? d.adapterId as number[] : [];
        this.adapter = ('adapter' in d) ? new FeedJobNodeAdapter(d.adapter) : null;
        this.param = Array.isArray(d.param) ? d.param.map((v: any) => new FeedJobTaskTaskParam(v)) : [];
        this.index = ('index' in d) ? d.index as number : 0;
    }

    toObject(): any {
        const cfg: any = {};
        cfg.index = 'number';
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/types.FeedJobLink
class FeedJobLink {

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedJob
class FeedJob {
    name: string;
    nodeId: number[] | null;
    node?: FeedJobNode | null;
    nodeJobId?: string;
    feeds?: Feed[];
    tasks?: FeedJobTask[];
    runCount: number;
    meta?: { [key: string]: any };
    cost: FeedJobLink | null;
    costInEther: number;
    badges?: FeedJobNodeAdapterBadge[];

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.nodeId = ('nodeId' in d) ? d.nodeId as number[] : null;
        this.node = ('node' in d) ? new FeedJobNode(d.node) : null;
        this.nodeJobId = ('nodeJobId' in d) ? d.nodeJobId as string : '';
        this.feeds = Array.isArray(d.feeds) ? d.feeds.map((v: any) => new Feed(v)) : [];
        this.tasks = Array.isArray(d.tasks) ? d.tasks.map((v: any) => new FeedJobTask(v)) : [];
        this.runCount = ('runCount' in d) ? d.runCount as number : 0;
        this.meta = ('meta' in d) ? d.meta as { [key: string]: any } : {};
        this.cost = ('cost' in d) ? new FeedJobLink(d.cost) : null;
        this.costInEther = ('costInEther' in d) ? d.costInEther as number : 0;
        this.badges = Array.isArray(d.badges) ? d.badges.map((v: any) => new FeedJobNodeAdapterBadge(v)) : [];
    }

    toObject(): any {
        const cfg: any = {};
        cfg.runCount = 'number';
        cfg.costInEther = 'number';
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.FeedFeedType
class FeedFeedType {
    name: string;
    displayName: string;
    description: string;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.name = ('name' in d) ? d.name as string : '';
        this.displayName = ('displayName' in d) ? d.displayName as string : '';
        this.description = ('description' in d) ? d.description as string : '';
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/jinzhu/gorm/dialects/postgres.FeedJsonb
class FeedJsonb {

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
    }

    toObject(): any {
        const cfg: any = {};
        return ToObject(this, cfg);
    }
}

// struct2ts:github.com/linkpoolio/marketplace/core/store/models.Feed
class Feed {
    uniqueHash?: number[] | null;
    oracleAddresses?: FeedGenericArray;
    jobIds?: FeedGenericArray;
    walletAddresses?: string[];
    jobs?: FeedJob[];
    nodes?: FeedJobNode[];
    nodeWallets?: FeedJobNodeNodeWallet[];
    contractAddress: number[];
    networkId: number;
    network?: FeedJobNodeNetwork | null;
    latestAnswer?: string;
    lastUpdated?: Date | null;
    firstUpdated?: Date | null;
    type: FeedFeedType | null;
    unknown: boolean;
    meta?: FeedJsonb;

    constructor(data?: any) {
        const d: any = (data && typeof data === 'object') ? ToObject(data) : {};
        this.uniqueHash = ('uniqueHash' in d) ? d.uniqueHash as number[] : null;
        this.oracleAddresses = new FeedGenericArray(d.oracleAddresses);
        this.jobIds = new FeedGenericArray(d.jobIds);
        this.walletAddresses = ('walletAddresses' in d) ? d.walletAddresses as string[] : [];
        this.jobs = Array.isArray(d.jobs) ? d.jobs.map((v: any) => new FeedJob(v)) : [];
        this.nodes = Array.isArray(d.nodes) ? d.nodes.map((v: any) => new FeedJobNode(v)) : [];
        this.nodeWallets = Array.isArray(d.nodeWallets) ? d.nodeWallets.map((v: any) => new FeedJobNodeNodeWallet(v)) : [];
        this.contractAddress = ('contractAddress' in d) ? d.contractAddress as number[] : [];
        this.networkId = ('networkId' in d) ? d.networkId as number : 0;
        this.network = ('network' in d) ? new FeedJobNodeNetwork(d.network) : null;
        this.latestAnswer = ('latestAnswer' in d) ? d.latestAnswer as string : '';
        this.lastUpdated = ('lastUpdated' in d) ? ParseDate(d.lastUpdated) : null;
        this.firstUpdated = ('firstUpdated' in d) ? ParseDate(d.firstUpdated) : null;
        this.type = ('type' in d) ? new FeedFeedType(d.type) : null;
        this.unknown = ('unknown' in d) ? d.unknown as boolean : false;
        this.meta = new FeedJsonb(d.meta);
    }

    toObject(): any {
        const cfg: any = {};
        cfg.networkId = 'number';
        cfg.lastUpdated = 'string';
        cfg.firstUpdated = 'string';
        return ToObject(this, cfg);
    }
}

// exports
export {
    FeedGenericArrayGenericValue,
    FeedGenericArray,
    FeedJobNodeAdapterUserTeamHandleSignature,
    FeedJobNodeAdapterUserTeamHandle,
    FeedJobNodeAdapterUserTeam,
    FeedJobNodeAdapterUser,
    FeedJobNodeAdapterPlatform,
    FeedJobNodeAdapterDataSource,
    FeedJobNodeAdapterRepository,
    FeedJobNodeAdapterBadgeBadgeType,
    FeedJobNodeAdapterBadge,
    FeedJobNodeAdapter,
    FeedJobNodeNodeWallet,
    FeedJobNodeNetwork,
    FeedJobNode,
    FeedJobTaskTaskParam,
    FeedJobTask,
    FeedJobLink,
    FeedJob,
    FeedFeedType,
    FeedJsonb,
    Feed,
    ParseDate,
    ParseNumber,
    FromArray,
    ToObject,
};
