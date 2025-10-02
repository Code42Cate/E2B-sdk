export interface McpServer {
    airtable?: {
        airtableApiKey: string
        nodeenv: string
    }
    aks?: {
        accessLevel: string
        additionalTools?: string
        allowNamespaces?: string
        azureDir: string
        containerUser?: string
        kubeconfig: string
    }
    apiGateway?: {
        api1HeaderAuthorization: string
        api1Name: string
        api1SwaggerUrl: string
    }
    apify?: {
        apifyToken: string
        tools: string
    }
    arxiv?: {
        storagePath: string
    }
    astGrep?: {
        path: string
    }
    astraDb?: {
        astraDbApplicationToken: string
        endpoint: string
    }
    astroDocs?: {}
    atlan?: {
        apiKey: string
        baseUrl: string
    }
    atlasDocs?: {
        apiUrl: string
    }
    atlassian?: {
        confluenceApiToken?: string
        confluencePersonalToken?: string
        confluenceUrl: string
        confluenceUsername?: string
        jiraApiToken?: string
        jiraPersonalToken?: string
        jiraUrl: string
        jiraUsername?: string
    }
    audienseInsights?: {
        audienseClientSecret?: string
        clientId: string
        twitterBearerToken?: string
    }
    awsCdk?: {}
    awsCore?: {}
    awsDiagram?: {}
    awsDocumentation?: {}
    awsKbRetrievalServer?: {
        accessKeyId: string
        awsSecretAccessKey?: string
    }
    awsTerraform?: {}
    azure?: {}
    beagleSecurity?: {
        beagleSecurityApiToken: string
    }
    bitrefill?: {
        apiId: string
        apiSecret?: string
    }
    box?: {
        clientId: string
        clientSecret?: string
    }
    brave?: {
        apiKey: string
    }
    buildkite?: {
        apiToken: string
    }
    camunda?: {
        camundahost: string
    }
    cdataConnectcloud?: {
        cdataPat?: string
        username: string
    }
    charmhealth?: {
        charmhealthApiKey: string
        charmhealthBaseUrl: string
        charmhealthClientId: string
        charmhealthClientSecret: string
        charmhealthRedirectUri: string
        charmhealthRefreshToken: string
        charmhealthTokenUrl: string
    }
    chroma?: {
        apiKey: string
    }
    circleci?: {
        token: string
        url: string
    }
    clickhouse?: {
        connectTimeout: string
        host: string
        password: string
        port: string
        secure: string
        sendReceiveTimeout: string
        user: string
        verify: string
    }
    close?: {
        apiKey: string
    }
    cloudRun?: {
        credentialsPath: string
    }
    cloudflareDocs?: {}
    cockroachdb?: {
        caPath: string
        crdbPwd: string
        database: string
        host: string
        port: number
        sslCertfile: string
        sslKeyfile: string
        sslMode: string
        username: string
    }
    codeInterpreter?: {}
    context7?: {}
    couchbase?: {
        cbBucketName: string
        cbConnectionString: string
        cbMcpReadOnlyQueryMode: string
        cbPassword: string
        cbUsername: string
    }
    curl?: {}
    cyreslabAiShodan?: {
        shodanApiKey: string
    }
    dappier?: {
        apiKey: string
    }
    dappierRemote?: {
        dappierRemoteApiKey: string
    }
    dart?: {
        host: string
        token: string
    }
    databaseServer?: {
        databaseUrl: string
    }
    databutton?: {}
    deepwiki?: {}
    descope?: {
        managementKey?: string
        projectId: string
    }
    desktopCommander?: {
        paths: string[]
    }
    devhubCms?: {
        devhubApiKey?: string
        devhubApiSecret?: string
        url: string
    }
    discord?: {
        discordToken: string
    }
    docker?: {}
    dockerhub?: {
        hubPatToken: string
        username: string
    }
    dodoPayments?: {
        dodoPaymentsApiKey: string
    }
    dreamfactory?: {
        dreamfactoryapikey: string
        dreamfactoryurl: string
    }
    duckduckgo?: {}
    dynatrace?: {
        oauthClientId: string
        oauthClientSecret: string
        url: string
    }
    e2b?: {
        apiKey: string
    }
    edubase?: {
        apiKey?: string
        app: string
        url: string
    }
    effect?: {}
    elasticsearch?: {
        esApiKey?: string
        url: string
    }
    elevenlabs?: {
        apiKey?: string
        data: string
    }
    everart?: {
        apiKey: string
    }
    exa?: {
        apiKey: string
    }
    explorium?: {
        apiAccessToken: string
    }
    fetch?: {}
    ffmpeg?: {}
    fibery?: {
        apiToken: string
        dreamfactoryapikey: string
        dreamfactoryurl: string
    }
    filesystem?: {
        paths: string[]
    }
    findADomain?: {}
    firecrawl?: {
        apiKey: string
        creditCriticalThreshold: number
        creditWarningThreshold: number
        retryBackoffFactor: number
        retryDelay: number
        retryMax: number
        retryMaxDelay: number
        url: string
    }
    firewalla?: {
        boxId: string
        firewallaMspToken: string
        mspId: string
    }
    flexprice?: {
        apiKey: string
        baseUrl: string
    }
    git?: {
        paths: string[]
    }
    github?: {
        personalAccessToken: string
    }
    githubChat?: {
        githubApiKey: string
    }
    githubOfficial?: {
        githubPersonalAccessToken: string
    }
    gitlab?: {
        personalAccessToken: string
        url: string
    }
    gitmcp?: {}
    glif?: {
        apiToken: string
        ids: string
        ignoredSaved: boolean
    }
    gmail?: {
        emailAddress: string
        emailPassword?: string
    }
    googleMaps?: {
        googleMapsApiKey: string
    }
    googleMapsComprehensive?: {
        googleMapsApiKey: string
    }
    grafana?: {
        apiKey: string
        url: string
    }
    gyazo?: {
        accessToken: string
    }
    hackernews?: {}
    hackle?: {
        apiKey: string
    }
    handwritingOcr?: {
        apiToken: string
    }
    hdx?: {
        appIdentifier: string
    }
    heroku?: {
        apiKey: string
    }
    hostinger?: {
        apitoken: string
    }
    hoverfly?: {
        data: string
    }
    hubspot?: {
        apiKey: string
    }
    huggingFace?: {}
    hummingbot?: {
        apiUrl: string
        hummingbotApiPassword?: string
        hummingbotApiUsername?: string
    }
    husqvarnaAutomower?: {
        clientId: string
        husqvarnaClientSecret: string
    }
    hyperbrowser?: {
        apiKey: string
    }
    hyperspell?: {
        collection: string
        token: string
        useResources: boolean
    }
    iaptic?: {
        apiKey?: string
        appName: string
    }
    inspektorGadget?: {
        gadgetImages?: string
        kubeconfig: string
    }
    javadocs?: {}
    jetbrains?: {
        port: number
    }
    kafkaSchemaReg?: {
        registryUrl: string
        schemaRegistryPassword?: string
        schemaRegistryUser?: string
        slimMode?: string
        viewonly?: string
    }
    kagisearch?: {
        engine: string
        kagiApiKey: string
    }
    keboola?: {
        kbcStorageToken: string
        kbcWorkspaceSchema: string
    }
    kong?: {
        konnectAccessToken: string
        region: string
    }
    kubectl?: {
        kubeconfig: string
    }
    kubernetes?: {
        configPath: string
    }
    lara?: {
        accessKeySecret?: string
        keyId: string
    }
    line?: {
        channelAccessToken?: string
        userId: string
    }
    linkedin?: {
        linkedinCookie: string
        userAgent: string
    }
    llmtxt?: {}
    maestro?: {
        apiKeyApiKey: string
    }
    manifold?: {}
    mapbox?: {
        accessToken: string
    }
    mapboxDevkit?: {
        mapboxAccessToken: string
    }
    markdownify?: {
        paths: string[]
    }
    markitdown?: {
        paths: string[]
    }
    memory?: {}
    mercadoLibre?: {
        mercadoLibreApiKey: string
    }
    mercadoPago?: {
        mercadoPagoApiKey: string
    }
    metabase?: {
        apiKey: string
        metabaseurl: string
        metabaseusername: string
        password: string
    }
    minecraftWiki?: {}
    mongodb?: {
        mdbMcpConnectionString: string
    }
    multiversxMx?: {
        network: string
        wallet: string
    }
    nasdaqDataLink?: {
        nasdaqDataLinkApiKey: string
    }
    needle?: {
        needleApiKey: string
    }
    neo4jCloudAuraApi?: {
        clientId: string
        neo4jAuraClientSecret?: string
        serverAllowOrigins?: string
        serverAllowedHosts?: string
        serverHost?: string
        serverPath?: string
        serverPort?: string
        transport?: string
    }
    neo4jCypher?: {
        database?: string
        namespace?: string
        neo4jPassword?: string
        readOnly?: boolean
        readTimeout?: string
        responseTokenLimit?: string
        serverAllowOrigins?: string
        serverAllowedHosts?: string
        serverHost?: string
        serverPath?: string
        serverPort?: string
        transport?: string
        url: string
        username: string
    }
    neo4jDataModeling?: {
        serverAllowOrigins: string
        serverAllowedHosts: string
        serverHost: string
        serverPath: string
        serverPort: string
        transport: string
    }
    neo4jMemory?: {
        database?: string
        neo4jPassword?: string
        serverAllowOrigins?: string
        serverAllowedHosts?: string
        serverHost?: string
        serverPath?: string
        serverPort?: string
        transport?: string
        url: string
        username: string
    }
    neon?: {
        apiKey: string
    }
    nodeCodeSandbox?: {}
    notion?: {
        internalIntegrationToken: string
    }
    novita?: {}
    npmSentinel?: {}
    obsidian?: {
        apiKey: string
    }
    oktaMcpFctr?: {
        clientOrgurl: string
        concurrentLimit?: string
        logLevel?: string
        oktaApiToken?: string
    }
    omi?: {
        apiKey: string
    }
    onlyofficeDocspace?: {
        baseUrl: string
        docspaceApiKey: string
        docspaceAuthToken: string
        docspacePassword: string
        docspaceUsername: string
        dynamic: boolean
        origin: string
        toolsets: string
        userAgent: string
    }
    openapi?: {
        mode: string
    }
    openapiSchema?: {}
    openbnbAirbnb?: {}
    openmesh?: {}
    openweather?: {
        owmApiKey: string
    }
    openzeppelinCairo?: {}
    openzeppelinSolidity?: {}
    openzeppelinStellar?: {}
    openzeppelinStylus?: {}
    opik?: {
        apiBaseUrl: string
        apiKey: string
        workspaceName: string
    }
    opine?: {
        opineApiKey: string
    }
    oracle?: {
        oracleConnectionString: string
        oracleUser: string
        password: string
    }
    ospMarketingTools?: {}
    oxylabs?: {
        password?: string
        username: string
    }
    paperSearch?: {}
    perplexityAsk?: {
        perplexityApiKey: string
    }
    pia?: {
        apiKey: string
    }
    pinecone?: {
        apiKey: string
        assistantHost: string
    }
    playwright?: {
        data: string
    }
    pluggedinMcpProxy?: {
        pluggedinApiBaseUrl: string
        pluggedinApiKey: string
    }
    polarSignals?: {
        polarSignalsApiKey: string
    }
    pomodash?: {
        apiKey: string
    }
    postgres?: {
        url: string
    }
    postman?: {
        apiKey: string
    }
    prefEditor?: {}
    prometheus?: {
        prometheusUrl: string
    }
    puppeteer?: {}
    pythonRefactoring?: {}
    quantconnect?: {
        agentname: string
        quantconnectapitoken: string
        quantconnectuserid: string
    }
    ramparts?: {}
    razorpay?: {
        keyId: string
        keySecret?: string
    }
    reddit?: {
        redditClientId: string
        redditClientSecret: string
        redditPassword: string
        username: string
    }
    redis?: {
        caCerts: string
        caPath: string
        certReqs: string
        clusterMode: boolean
        host: string
        port: number
        pwd: string
        ssl: boolean
        sslCertfile: string
        sslKeyfile: string
        username: string
    }
    redisCloud?: {
        apiKey: string
        secretKey?: string
    }
    ref?: {
        apiKey: string
    }
    remote?: {}
    render?: {
        apiKey: string
    }
    resend?: {
        apiKey?: string
        replyTo: string
        sender: string
    }
    risken?: {
        accessToken: string
        url: string
    }
    root?: {
        apiAccessToken: string
    }
    ros2?: {}
    rube?: {
        apiKey: string
    }
    rustMcpFilesystem?: {
        allowWrite: boolean
        allowedDirectories: string[]
        enableRoots: boolean
    }
    schemacrawlerAi?: {
        generalInfoLevel: string
        generalLogLevel?: string
        schcrwlrDatabasePassword?: string
        schcrwlrDatabaseUser?: string
        serverConnectionDatabase?: string
        serverConnectionHost?: string
        serverConnectionPort?: number
        serverConnectionServer: string
        urlConnectionJdbcUrl: string
        volumeHostShare: string
    }
    schoginiMcpImageBorder?: {}
    scrapegraph?: {
        sgaiApiKey: string
    }
    scrapezy?: {
        apiKey: string
    }
    securenoteLink?: {}
    semgrep?: {}
    sentry?: {
        authToken: string
    }
    sequa?: {
        apiKey: string
        mcpServerUrl: string
    }
    sequentialthinking?: {}
    shortIo?: {
        shortIoApiKey: string
    }
    simplechecklist?: {}
    singlestore?: {
        mcpApiKey: string
    }
    slack?: {
        botToken?: string
        channelIds?: string
        teamId: string
    }
    smartbear?: {
        apiHubApiKey: string
        bugsnagApiKey: string
        bugsnagAuthToken: string
        bugsnagEndpoint: string
        pactBrokerBaseUrl: string
        pactBrokerPassword: string
        pactBrokerToken: string
        pactBrokerUsername: string
        reflectApiToken: string
    }
    sonarqube?: {
        org: string
        token: string
        url: string
    }
    sqlite?: {}
    stackgen?: {
        token?: string
        url: string
    }
    stackhawk?: {
        apiKey: string
    }
    stripe?: {
        secretKey: string
    }
    supadata?: {
        apiKey: string
    }
    suzieq?: {
        apiEndpoint: string
        apiKey: string
    }
    taskOrchestrator?: {}
    tavily?: {
        apiKey: string
    }
    teamwork?: {
        twMcpBearerToken: string
    }
    telnyx?: {
        apiKey: string
    }
    tembo?: {
        apiKey: string
    }
    terraform?: {}
    textToGraphql?: {
        graphqlApiKey: string
        graphqlAuthType: string
        graphqlEndpoint: string
        modelName: string
        modelTemperature: number
        openaiApiKey: string
    }
    tigris?: {
        awsAccessKeyId: string
        awsEndpointUrlS3: string
        awsSecretAccessKey?: string
    }
    time?: {}
    triplewhale?: {
        apiKey: string
    }
    unrealEngine?: {
        logLevel?: string
        ueHost: string
        ueRcHttpPort: string
        ueRcWsPort: string
    }
    veyrax?: {
        apiKey: string
    }
    vizro?: {}
    vulnNist?: {}
    wayfound?: {
        mcpApiKey: string
    }
    webflow?: {
        token: string
    }
    wikipedia?: {}
    wolframAlpha?: {
        wolframApiKey: string
    }
    youtubeTranscript?: {}
    zerodhaKite?: {
        kiteAccessToken?: string
        kiteApiKey: string
        kiteApiSecret?: string
        kiteRedirectUrl?: string
    }
}
