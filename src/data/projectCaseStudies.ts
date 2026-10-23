export interface CaseStudyData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  headlineSummary: string;
  problemStatement: {
    overview: string;
    keyChallenges: string[];
  };
  targetUsers: {
    role: string;
    needs: string;
  }[];
  implementedFeatures: {
    category: string;
    items: string[];
  }[];
  techStack: {
    layer: string;
    technologies: string[];
    purpose: string;
  }[];
  architectureDiagramMermaid: string;
  componentResponsibilities: {
    name: string;
    role: string;
    description: string;
  }[];
  keyDataFlows: {
    title: string;
    steps: string[];
  }[];
  databaseDesign: {
    overview: string;
    tables: {
      name: string;
      primaryKey: string;
      description: string;
      foreignKeys?: string;
    }[];
  };
  securityArchitecture: {
    title: string;
    mechanisms: string[];
  };
  testingEvidence: {
    totalTests: number;
    passRate: string;
    frameworks: string[];
    breakdown: { suite: string; count: number; scope: string }[];
  };
  deploymentTopology: {
    service: string;
    platform: string;
    role: string;
    verifiedUrl?: string;
    isBackend?: boolean;
    hasHealthEndpoint?: boolean;
    healthEndpoint?: string;
  }[];
  engineeringTradeOffs: {
    decision: string;
    chosenSolution: string;
    alternativeConsidered: string;
    reasoning: string;
  }[];
  knownLimitations: string[];
  futureImprovements: string[];
  verifiedLinks: {
    label: string;
    url: string;
    type: 'github' | 'live' | 'video' | 'release';
  }[];
}

export const NGO_CONNECT_CASE_STUDY: CaseStudyData = {
  id: "ngoconnect",
  slug: "ngoconnect",
  title: "NGOConnect",
  subtitle: "Enterprise-Grade Community Food Redistribution & Impact Verification Platform",
  category: "Full-Stack Web Application / Java Backend",
  badge: "Production Deployed",
  headlineSummary: "A scalable, role-governed platform connecting commercial kitchens, citizens, verified charities, and volunteers to eliminate food waste through secure, multi-stage delivery validation.",
  problemStatement: {
    overview: "Every year, millions of tons of fresh, edible food are discarded by restaurants, event venues, and private households. Meanwhile, localized welfare charities face persistent resource deficits. The core bottleneck is not a scarcity of edible food, but the total absence of real-time, tamper-proof logistics and transparent verification connecting donors with local relief teams.",
    keyChallenges: [
      "Perishable food expires rapidly, requiring immediate discovery and reservation without duplicate booking conflicts.",
      "Charities cannot risk distributing spoiled or unverifiable food without strict legal governance and donor trust.",
      "Volunteer delivery networks suffer from lack of accountability, where completed drop-offs cannot be reliably verified without physical dispatchers.",
      "Regulatory compliance requires NGOs to maintain verifiable tax exemptions (80G, 12A, NGO Darpan) without publicly leaking confidential legal records."
    ]
  },
  targetUsers: [
    { role: "Citizens (Donors)", needs: "Rapid surplus meal listing, transparent delivery tracking, and direct participation in community food drives." },
    { role: "Commercial Restaurants", needs: "Bulk surplus listing management across multi-location restaurant branches with specific pickup scheduling." },
    { role: "Verified NGOs", needs: "Real-time surplus marketplace reservations, volunteer task dispatching, and secure legal document storage." },
    { role: "Community Volunteers", needs: "Clear delivery checkpoint routing, verified handover verification codes, and activity history tracking." },
    { role: "Platform Administrators", needs: "Audit workflows to verify legal credentials of NGOs and restaurants, dispute arbitration, and platform oversight." }
  ],
  implementedFeatures: [
    {
      category: "Food Marketplace & Concurrency Control",
      items: [
        "Dynamic donation listing creation with portion estimates, dietary tags, pickup address, expiry deadlines, and photo uploads.",
        "Automatic synchronization of Restaurant surplus food batches with the central public donation marketplace.",
        "Pessimistic and transactional claim guards returning HTTP 409 Conflict to strictly prevent duplicate simultaneous reservations by competing NGOs.",
        "Automated state transitions synchronizing linked FoodAvailability entities when an associated marketplace donation is claimed."
      ]
    },
    {
      category: "Two-Stage Code Verification Handover",
      items: [
        "Tamper-proof pickup protocol: Volunteers must obtain and submit the donor's unique pickup verification code to assume custody.",
        "Drop-off verification protocol: Volunteers must provide or verify the recipient's handover code upon delivery, preventing false drop-off reporting.",
        "Immutable status history records tracking state transitions from PENDING to CLAIMED, IN_TRANSIT, and COMPLETED.",
        "Volunteer task dispatch with optional stipend incentives, route instructions, and completion milestones."
      ]
    },
    {
      category: "Governance, Verification & Public Search",
      items: [
        "Strict administrative verification workflow holding new NGO and Restaurant registrations in PENDING status until legal audit.",
        "Dual-tier Cloudinary storage separating public marketing imagery from private compliance documentation.",
        "Cryptographic 5-minute pre-signed URL generation allowing authorized admins to inspect confidential NGO filings without public access.",
        "Public discovery directory allowing unauthenticated citizens to find approved NGOs, partner restaurants, and community food drives.",
        "Persistent contact inquiry pipeline with input validation and multi-line administrative inbox alerts."
      ]
    }
  ],
  techStack: [
    { layer: "Backend Runtime & Framework", technologies: ["Java 17", "Spring Boot 3.2.5", "Spring MVC"], purpose: "High-throughput REST API layer handling business logic, request validation, and domain service orchestration." },
    { layer: "Security & Authentication", technologies: ["Spring Security 6.x", "JJWT 0.12.6", "BCrypt"], purpose: "Stateless Bearer JWT authentication, granular 5-role RBAC enforcement, and method-level access authorization." },
    { layer: "Persistence & Relational Database", technologies: ["Spring Data JPA", "Hibernate 6.x", "MySQL 8.0", "H2 In-Memory DB"], purpose: "Relational mapping, transactional entity lifecycles, foreign key integrity, and isolated H2 testing profiles." },
    { layer: "Media & Document Storage", technologies: ["Cloudinary Java SDK 1.38.0"], purpose: "Cloud-hosted asset storage with distinct public buckets and private signed URL access for sensitive PDF/image credentials." },
    { layer: "Frontend Client", technologies: ["React 18.3", "Vite 5.4", "Tailwind CSS 3.4", "Axios", "React Router 6"], purpose: "Single Page Application delivering responsive role-tailored dashboards and authenticated API integration." },
    { layer: "Deployment & Infrastructure", technologies: ["Render (Docker Web Service)", "Vercel (Edge CDN)", "Aiven Cloud (Managed MySQL)"], purpose: "Fully containerized continuous cloud deployment with automated CI/CD builds." }
  ],
  architectureDiagramMermaid: `flowchart TD
    subgraph ClientLayer ["Client Presentation Layer (Vercel CDN)"]
        ReactApp["React 18 Single Page Application\n(Vite + Tailwind CSS)"]
        Router["React Router 6 Client Routes"]
        Axios["Axios Client with JWT Interceptors"]
    end

    subgraph SecurityFilter ["Security & Ingress Gateway"]
        CORS["CORS Filter\n(Origin Whitelisting)"]
        JWTFilter["JwtAuthenticationFilter\n(Stateless Bearer Token Extraction)"]
        RateLimit["UploadRateLimiter\n(20 req/min Token Bucket)"]
        SecurityConfig["Spring SecurityFilterChain\n(RBAC Enforcement)"]
    end

    subgraph ControllerLayer ["REST Controller Layer (/api/v1/*)"]
        AuthCtrl["AuthController\n(/auth)"]
        DonationCtrl["DonationController\n(/donations)"]
        TaskCtrl["TaskController\n(/tasks)"]
        NgoCtrl["NgoController\n(/ngos)"]
        RestCtrl["RestaurantController\n(/restaurants)"]
        AdminCtrl["AdminController\n(/admin)"]
        ContactCtrl["ContactController\n(/contact)"]
    end

    subgraph ServiceLayer ["Domain Services & Business Logic"]
        AuthSvc["AuthService\n(BCrypt & JWT Issuance)"]
        DonationSvc["DonationService\n(Marketplace Concurrency)"]
        TaskSvc["TaskService\n(Two-Stage Code Verification)"]
        NgoSvc["NgoService\n(Registration & Profile)"]
        AdminSvc["AdminService\n(Verification Audit & Metrics)"]
        CloudinarySvc["CloudinaryService\n(Signed Pre-Signed URLs)"]
    end

    subgraph PersistenceLayer ["Persistence & External Services"]
        JPA["Spring Data JPA &\nHibernate Core"]
        MySQL[("MySQL 8.0 Relational DB\n(Aiven Cloud / Local)")]
        CloudPublic["Cloudinary Public Media Bucket\n(Avatars, Food Photos)"]
        CloudPrivate["Cloudinary Private Secure Bucket\n(NGO 80G/12A Legal Docs)"]
    end

    ReactApp --> Router
    Router --> Axios
    Axios -->|HTTPS Bearer Requests| CORS
    CORS --> JWTFilter
    JWTFilter --> RateLimit
    RateLimit --> SecurityConfig
    SecurityConfig --> ControllerLayer
    ControllerLayer --> ServiceLayer
    ServiceLayer --> JPA
    JPA --> MySQL
    ServiceLayer -->|Public Uploads| CloudPublic
    ServiceLayer -->|Private Uploads & 5-Min Signed URLs| CloudPrivate`,
  componentResponsibilities: [
    { name: "JwtAuthenticationFilter", role: "Security Interceptor", description: "Intercepts every HTTP request, parses Authorization Bearer header, validates JWT cryptographic signature, and sets the authenticated UserPrincipal in Spring SecurityContext." },
    { name: "DonationServiceImpl", role: "Core Marketplace Domain", description: "Coordinates food listing lifecycle, calculates expiry validity, ensures transactional consistency during NGO claims, and raises HTTP 409 Conflict if an item is simultaneously claimed." },
    { name: "TaskServiceImpl", role: "Logistics Orchestration", description: "Manages volunteer delivery assignments, enforces two-stage PIN verification (donor pickup and recipient delivery PINs), and logs immutable status audit checkpoints." },
    { name: "CloudinaryServiceImpl", role: "Document & Asset Security", description: "Uploads public promotional assets to standard CDN folders, while storing sensitive organization filings in an authenticated bucket accessible solely via 5-minute pre-signed URLs." },
    { name: "AdminServiceImpl", role: "Governance Engine", description: "Empowers system administrators to review pending legal documents, approve or reject organization registrations with audit remarks, and monitor macro-level food rescue metrics." }
  ],
  keyDataFlows: [
    {
      title: "Surplus Food Publishing & Marketplace Claiming",
      steps: [
        "Citizen or Restaurant posts food details with expiry time, pickup address, and images via POST /api/v1/donations.",
        "DonationService persists entity with status PENDING_CLAIM and broadcasts availability to marketplace queries.",
        "Verified NGO discovers food listing and issues POST /api/v1/donations/{id}/claim.",
        "Service initiates transactional lock: verifies status is still PENDING_CLAIM; if already claimed, throws ConflictException (409).",
        "Donation status transitions to CLAIMED, generating a unique Donor Pickup Verification Code and sending notification alerts."
      ]
    },
    {
      title: "Two-Stage Code Verification Handover Protocol",
      steps: [
        "NGO assigns claimed donation to an enrolled Volunteer as a VolunteerTask.",
        "Volunteer arrives at donor pickup location, inspects food batch, and requests the 4-digit Donor Pickup Code from the donor.",
        "Volunteer enters code via PATCH /api/v1/tasks/{id}/pickup; backend validates code against database record and transitions task to IN_TRANSIT.",
        "Upon physical arrival at recipient welfare location, volunteer submits the recipient delivery code via PATCH /api/v1/tasks/{id}/complete.",
        "Backend validates code match, marks task COMPLETED, increments volunteer verified delivery metrics, and marks the parent donation fully COMPLETED."
      ]
    }
  ],
  databaseDesign: {
    overview: "Relational schema designed in 3NF with foreign key constraints, unique email indices, indexing on status/location columns, and audit timestamp tracking.",
    tables: [
      { name: "users", primaryKey: "id (BIGINT)", description: "Core user entity storing email, BCrypt-hashed password, name, phone, and enabled status.", foreignKeys: "Linked to roles via user_roles join table" },
      { name: "roles", primaryKey: "id (BIGINT)", description: "Defines static system roles: ROLE_CITIZEN, ROLE_RESTAURANT, ROLE_NGO, ROLE_VOLUNTEER, ROLE_ADMIN." },
      { name: "donations", primaryKey: "id (BIGINT)", description: "Food listings storing portion count, food category, expiry timestamp, pickup address, status, and verification codes.", foreignKeys: "donor_id -> users(id), claimed_by_ngo_id -> ngos(id)" },
      { name: "volunteer_tasks", primaryKey: "id (BIGINT)", description: "Delivery assignments containing pickup/dropoff instructions, stipend amount, and execution state.", foreignKeys: "donation_id -> donations(id), volunteer_id -> volunteers(id), assigned_by_ngo_id -> ngos(id)" },
      { name: "ngos", primaryKey: "id (BIGINT)", description: "NGO profile entity holding registration number, verification status (PENDING, APPROVED, REJECTED), and mission description.", foreignKeys: "user_id -> users(id)" },
      { name: "restaurants", primaryKey: "id (BIGINT)", description: "Restaurant entity with FSSAI license credentials, verification status, and linked multi-location branches.", foreignKeys: "user_id -> users(id)" },
      { name: "contact_inquiries", primaryKey: "id (BIGINT)", description: "Persistent customer inquiry records storing name, email, message body, and read/resolved flags." }
    ]
  },
  securityArchitecture: {
    title: "Multi-Tenant Defense-in-Depth Model",
    mechanisms: [
      "Stateless Bearer JWT Authentication: Tokens signed with HMAC-SHA256 containing user ID, email, and authority claims; validated on every incoming request.",
      "Granular Role-Based Access Control: Routes protected by Spring Security filter chain and method-level @PreAuthorize expressions ensuring separation of concerns.",
      "Cryptographically Signed Private Storage: Legal tax certificates and NGO registrations stored in authenticated Cloudinary buckets, strictly accessed via time-limited 5-minute signed URLs.",
      "In-Memory Rate Limiting: UploadRateLimiter enforces a 20 request/minute token bucket ceiling per IP to prevent storage flooding or denial-of-service attempts.",
      "Input Validation & Sanitization: Jakarta @Valid annotations enforce strict email formats, length boundaries, and prohibited characters across all incoming DTOs."
    ]
  },
  testingEvidence: {
    totalTests: 181,
    passRate: "100% (181 Tests Passed, 0 Failures, 0 Errors)",
    frameworks: ["JUnit 5", "Mockito", "Spring Boot Test (@SpringBootTest, MockMvc)", "H2 In-Memory Engine"],
    breakdown: [
      { suite: "security.RbacSecurityTest", count: 6, scope: "Verifies HTTP 403 Forbidden on role boundary violations across all administrative and NGO endpoints." },
      { suite: "foodavailability.FoodAvailabilityMarketplaceTest", count: 7, scope: "Tests restaurant surplus publishing, marketplace linkage, and 409 Conflict duplicate reservation prevention." },
      { suite: "donation.DonationWorkflowTest", count: 8, scope: "Verifies complete donation state transitions, inventory availability, and handover verification." },
      { suite: "file.FileUploadSecurityTest", count: 7, scope: "Tests 5MB file-size barriers, allowed image/PDF MIME type filters, and path traversal defense." },
      { suite: "task.VolunteerTaskSecurityTest", count: 4, scope: "Validates IDOR ownership checks ensuring volunteers can only modify assigned tasks." },
      { suite: "contact.ContactInquiryTest", count: 7, scope: "Tests form validation, database persistence, and multi-line admin notifications." },
      { suite: "service.AuthServiceTests", count: 6, scope: "Tests BCrypt password hashing, duplicate email rejection, and token emission." }
    ]
  },
  deploymentTopology: [
    { service: "Frontend Single Page Application", platform: "Vercel Edge Network", role: "Hosts production React/Vite bundle with automatic HTTPS, edge routing, and SPA rewrites.", verifiedUrl: "https://ngoconnect-frontend.vercel.app" },
    { service: "Backend REST API Engine", platform: "Render (Docker Web Service)", role: "Hosts containerized Spring Boot 3 Java runtime with auto-restart and zero-downtime deploys.", isBackend: true, hasHealthEndpoint: false },
    { service: "Production Relational Database", platform: "Aiven Cloud / Managed MySQL", role: "Provides high-availability MySQL 8.0 instance with automated backups and connection pooling." },
    { service: "Cloud Object Storage", platform: "Cloudinary Cloud", role: "Provides CDN-accelerated asset delivery and encrypted private buckets for compliance documentation." }
  ],
  engineeringTradeOffs: [
    {
      decision: "Dual-Stage Verification PINs vs Live GPS Delivery Tracking",
      chosenSolution: "Implemented two-stage cryptographic verification PIN codes (donor pickup code + recipient handover code).",
      alternativeConsidered: "Real-time continuous GPS tracking for volunteer couriers.",
      reasoning: "GPS tracking requires expensive background battery drainage, persistent mobile network bandwidth, and privacy intrusion for casual volunteers. PIN verification provides 100% deterministic, tamper-proof proof of physical transfer without complex infrastructure."
    },
    {
      decision: "Cloudinary Signed URLs vs Backend File Streaming Proxy",
      chosenSolution: "Generated short-lived (5-minute) pre-signed download URLs directing admins directly to Cloudinary.",
      alternativeConsidered: "Streaming sensitive documents through the Spring Boot application layer via byte arrays.",
      reasoning: "Streaming PDF documents through the API server burdens JVM heap memory and consumes worker threads during large file downloads. Signed URLs offload bandwidth to CDN edges while maintaining cryptographic security."
    },
    {
      decision: "Stateless JWT Authentication vs Redis Session Store",
      chosenSolution: "Stateless HMAC-SHA256 signed JSON Web Tokens.",
      alternativeConsidered: "Distributed Redis session cluster.",
      reasoning: "Stateless tokens eliminate an extra network hop to Redis on every authenticated REST call, simplifying horizontal scalability across serverless and containerized environments."
    }
  ],
  knownLimitations: [
    "Cold starts on Render free-tier can cause a 30-50 second latency delay upon initial backend wake-up.",
    "Notification dispatch currently relies on persistent relational database queries rather than an external push gateway for mobile devices.",
    "Route planning between donation pickup and dropoff points relies on external navigation apps rather than an integrated map matrix."
  ],
  futureImprovements: [
    "Introduce Webhook event integrations to trigger automated SMS notifications to offline community donors.",
    "Integrate automated image analysis to flag expired or unhygienic food listings during upload.",
    "Implement WebSocket push channels for live marketplace inventory updates without page refresh."
  ],
  verifiedLinks: [
    { label: "Production Web Application", url: "https://ngoconnect-frontend.vercel.app", type: "live" },
    { label: "GitHub Monorepo", url: "https://github.com/gauravto312-wq/ngoconnect", type: "github" }
  ]
};

export const SAFEWALK_CASE_STUDY: CaseStudyData = {
  id: "safewalk",
  slug: "safewalk",
  title: "SafeWalk",
  subtitle: "Distributed Event-Driven Real-Time Emergency Assistance & Community Response System",
  category: "Distributed Backend & Native Android Application",
  badge: "Native Android & Event-Driven Backend",
  headlineSummary: "A mission-critical emergency coordination system pairing an Android mobile client with a Spring Boot distributed backend, utilizing Redis GEO and Apache Kafka to achieve sub-second responder dispatch.",
  problemStatement: {
    overview: "During personal safety threats, assault, or sudden medical emergencies, victims frequently have only seconds to signal for help. Conventional emergency dispatcher dispatch introduces critical latency, while nearby capable citizens within walking distance remain completely unaware of a crisis taking place only hundreds of meters away.",
    keyChallenges: [
      "Traditional SQL spatial queries (e.g. Haversine calculations over thousands of rows) cause database lockups under high-frequency location streaming.",
      "Synchronous emergency dispatch blocks API threads, risking systemic failure during high-concurrency disaster scenarios.",
      "Accidental SOS triggers must be filtered out without creating dangerous vulnerabilities or false emergency responder dispatches.",
      "Mobile devices frequently lose network connectivity or drop out of foreground execution during high-stress movement."
    ]
  },
  targetUsers: [
    { role: "Distressed Citizens (Requesters)", needs: "Instant one-tap SOS activation, continuous hands-free background location sharing, and real-time visibility into arriving responders." },
    { role: "Community Responders", needs: "Immediate sub-second localized emergency notifications, distance/ETA routing, and mutual arrival confirmation." },
    { role: "Designated Emergency Contacts", needs: "Global-radius SMS/push emergency alerts with live tracking links regardless of geographic distance." },
    { role: "Verified Law Enforcement / Healthcare", needs: "High-priority escalation queue, verified incident logs, and administrative responder governance." }
  ],
  implementedFeatures: [
    {
      category: "Zero Client Authority Emergency FSM",
      items: [
        "One-tap SOS dispatch capturing precise GPS coordinates and launching Android foreground tracking service.",
        "Server-enforced 5-Second Grace Cancellation Window: Requesters can abort within 5 seconds without triggering community alerts.",
        "Immutable Finite State Machine governing emergency status transitions: PENDING -> ACTIVE -> RESOLVED / CANCELLED / EXPIRED.",
        "Dual-Confirmation Resolution: Resolution requires mutual verification from both requester and responder, preventing coerced cancellations."
      ]
    },
    {
      category: "Sub-Second Spatial Discovery & Caching",
      items: [
        "High-performance spatial indexing powered by Redis 7 GEO commands (GEOADD, GEOSEARCH / GEORADIUS).",
        "Adaptive bounding patrol radius querying available active responders from 50m up to 2km.",
        "Dynamic distance calculation using Haversine formulas to compute precise proximity and arrival thresholds (<15 meters for arrival).",
        "Dual-storage paradigm: Redis handles transient 3-second GPS updates while MySQL records transactional incident logs."
      ]
    },
    {
      category: "Event Streaming & Real-Time Duplex Communication",
      items: [
        "Apache Kafka (KRaft mode) event bus publishing SosEvent topics, decoupling emergency initiation from relational persistence.",
        "Sub-second duplex location telemetry streaming over WebSocket with STOMP protocol (/topic/emergency/{id}).",
        "STOMP WebSocketAuthInterceptor validating JWT Bearer tokens directly on STOMP CONNECT frames.",
        "Firebase Cloud Messaging (FCM v1) integration broadcasting high-priority wake-up push notifications to background mobile clients."
      ]
    }
  ],
  techStack: [
    { layer: "Backend Runtime & Framework", technologies: ["Java 17", "Spring Boot 3.3.4", "Spring MVC"], purpose: "Core API and transaction coordinator enforcing zero client authority and domain state rules." },
    { layer: "Geospatial & In-Memory Cache", technologies: ["Redis 7.x", "Spring Data Redis", "Lettuce Driver"], purpose: "In-memory spatial index (GEOADD / GEOSEARCH) executing sub-millisecond proximity queries and active responder tracking." },
    { layer: "Event Streaming & Messaging", technologies: ["Apache Kafka 7.x (KRaft Mode)", "Spring Kafka"], purpose: "Asynchronous, decoupled event publishing for SOS lifecycle events (Triggered, Cancelled, Expired, Resolved)." },
    { layer: "Real-Time Duplex Protocol", technologies: ["Spring WebSocket", "STOMP Message Broker", "SockJS"], purpose: "Bi-directional telemetry streaming between distressed citizens and navigating responders." },
    { layer: "Push Notification Pipeline", technologies: ["Firebase Admin SDK 9.3.0", "Google FCM v1 API"], purpose: "High-priority background wake-up notifications alerting off-screen responder devices." },
    { layer: "Persistence & Database", technologies: ["MySQL 8.0", "Spring Data JPA", "Hibernate 6.5.x"], purpose: "Permanent relational audit trail, emergency history, trusted contacts, and user account management." },
    { layer: "Mobile Application Client", technologies: ["Android (API 26–37)", "Kotlin 2.2", "Jetpack Compose", "MapLibre Native", "Foreground Service"], purpose: "Native mobile client providing one-tap emergency initiation, background GPS streaming, and vector map visualization." }
  ],
  architectureDiagramMermaid: `flowchart TD
    subgraph ClientDevices ["Mobile Clients & Ingress"]
        AndroidCitizen["Android Requester\n(Foreground Location Service)"]
        AndroidResponder["Android Community Responder\n(MapLibre Live Telemetry)"]
        PoliceClient["Police / Hospital Terminal\n(Authenticated Dashboard)"]
    end

    subgraph IngressGateway ["Security & Protocol Ingress"]
        JwtFilter["JwtAuthenticationFilter\n(HTTP REST Bearer Token)"]
        WsAuth["WebSocketAuthInterceptor\n(STOMP CONNECT Token Guard)"]
        SecConfig["Spring Security 6.x\n(Stateless RBAC FilterChain)"]
    end

    subgraph CoreApplication ["Spring Boot 3.3.4 Application Layer"]
        RestControllers["REST Controllers\n(/emergencies, /location, /users)"]
        StompBroker["STOMP Broker\n(/topic/emergency/*, /queue/*)"]
        EmergencySvc["EmergencyServiceImpl\n(Pessimistic Locking & FSM)"]
        LocationSvc["LocationServiceImpl\n(Haversine & Arrival Rules)"]
    end

    subgraph EventAndCache ["In-Memory & Streaming Topology"]
        KafkaProducer["Kafka SosEventProducer\n(Asynchronous Topic Dispatch)"]
        KafkaConsumer["Kafka SosEventConsumer\n(Event Processing & FCM Triggers)"]
        RedisGeo[("Redis 7 GEO\n(GEOADD / GEOSEARCH In-Memory Index)")]
    end

    subgraph PersistentStorage ["Data & External Providers"]
        MySQL[("MySQL 8.0 Relational DB\n(ACID Audit Trails & Contacts)")]
        FCMServer["Firebase Cloud Messaging\n(High-Priority Push Wakeups)"]
        GoogleMaps["Google Maps Geocoding API\n(Reverse Geocode & Road Matrix)"]
    end

    AndroidCitizen -->|HTTP POST /api/v1/emergencies| JwtFilter
    AndroidCitizen -->|STOMP Telemetry over /ws| WsAuth
    AndroidResponder -->|STOMP Subscription /topic| WsAuth

    JwtFilter --> SecConfig
    WsAuth --> SecConfig
    SecConfig --> RestControllers
    SecConfig --> StompBroker

    RestControllers --> EmergencySvc
    EmergencySvc --> RedisGeo
    EmergencySvc --> KafkaProducer
    KafkaProducer -->|sos-events topic| KafkaConsumer

    KafkaConsumer --> FCMServer
    FCMServer -->|High-Priority Push| AndroidResponder
    EmergencySvc --> MySQL
    LocationSvc --> RedisGeo
    LocationSvc --> GoogleMaps
    StompBroker <-->|Live Location Updates| AndroidResponder
    StompBroker <-->|Responder Distance Updates| AndroidCitizen`,
  componentResponsibilities: [
    { name: "EmergencyServiceImpl", role: "Finite State Machine Coordinator", description: "Enforces zero client authority over emergency lifecycles, validates the 5-second grace window, handles pessimistic database locking, and coordinates mutual arrival resolution." },
    { name: "RedisServiceImpl", role: "In-Memory Geospatial Engine", description: "Maintains real-time user coordinates using Redis GEO keys (user:locations), executing sub-millisecond radius discovery queries to locate candidate responders within 2km." },
    { name: "SosEventProducer & Consumer", role: "Asynchronous Event Pipeline", description: "Publishes structured SOS lifecycle events into Apache Kafka, ensuring the HTTP API returns in milliseconds without waiting on downstream notification delivery." },
    { name: "WebSocketAuthInterceptor", role: "Duplex Channel Guard", description: "Extracts Bearer tokens from native STOMP CONNECT frame headers, validating JWT claims before allowing clients to subscribe to emergency broadcast topics." },
    { name: "FcmServiceImpl", role: "Push Notification Gateway", description: "Constructs FCM v1 payloads with high-priority Android notification channels, waking up sleeping responder devices even in battery-saver modes." }
  ],
  keyDataFlows: [
    {
      title: "One-Tap SOS Dispatch & Asynchronous Pipeline",
      steps: [
        "Distressed citizen taps SOS button on Android; foreground service captures GPS fix and POSTs to /api/v1/emergencies.",
        "Backend creates emergency record with status PENDING and initiates the 5-second grace cancellation timer.",
        "If 5 seconds elapse without cancellation, status automatically transitions to ACTIVE.",
        "EmergencyService queries Redis GEO for active responders within 2km radius.",
        "SosEventProducer publishes event to Apache Kafka topic sos-events.",
        "Kafka consumer picks up event and asynchronously triggers FCM push alerts and SMS alerts to configured emergency contacts."
      ]
    },
    {
      title: "Real-Time Telemetry & Mutual Arrival Resolution",
      steps: [
        "Nearby responder accepts emergency invitation via PUT /api/v1/emergencies/{id}/accept.",
        "Both requester and responder connect to STOMP WebSocket channel /topic/emergency/{id}.",
        "Android foreground services stream live latitude/longitude telemetry every 3 seconds to /app/emergency/{id}/location.",
        "LocationService evaluates Haversine distance; when responder approaches within 15 meters, ARRIVED status becomes unlocked.",
        "Mutual dual-confirmation: Requester confirms responder presence and responder confirms safety, transitioning status to RESOLVED."
      ]
    }
  ],
  databaseDesign: {
    overview: "Relational schema normalized for auditability, emergency contact relationships, police verification, and FCM device registration.",
    tables: [
      { name: "users", primaryKey: "id (BIGINT)", description: "User credentials, phone number, emergency status flags, and permanent account roles (ROLE_USER, ROLE_POLICE, ROLE_ADMIN)." },
      { name: "emergencies", primaryKey: "id (BIGINT)", description: "Core emergency records storing requester coordinates, trigger timestamp, status (PENDING, ACTIVE, RESOLVED, CANCELLED, EXPIRED), and arrived responder reference.", foreignKeys: "requester_id -> users(id), arrived_responder_id -> users(id)" },
      { name: "emergency_responders", primaryKey: "id (BIGINT)", description: "Tracks candidate responders notified, acceptance timestamps, and individual responder statuses.", foreignKeys: "emergency_id -> emergencies(id), responder_id -> users(id)" },
      { name: "emergency_contacts", primaryKey: "id (BIGINT)", description: "Up to 3 designated trusted contacts per citizen with phone, email, priority order, and notification preferences.", foreignKeys: "user_id -> users(id)" },
      { name: "user_fcm_tokens", primaryKey: "id (BIGINT)", description: "Stores FCM device registration tokens for background push notifications with device OS metadata.", foreignKeys: "user_id -> users(id)" },
      { name: "audit_logs", primaryKey: "id (BIGINT)", description: "Immutable security audit log recording administrative actions, role escalations, and incident reviews." }
    ]
  },
  securityArchitecture: {
    title: "Fail-Closed Zero Client Authority Blueprint",
    mechanisms: [
      "Zero Client Authority Rule: Mobile clients never dictate state transitions; all timers, distance thresholds, and permission gates are evaluated exclusively by the Spring Boot backend.",
      "STOMP Frame Authentication: Custom WebSocketAuthInterceptor validates JWT tokens during STOMP CONNECT handshake, rejecting unauthenticated socket attempts.",
      "Strict IDOR Protection: Emergency modification endpoints verify that only the original requester can cancel or confirm resolution, preventing unauthorized tampering.",
      "Pessimistic Database Locking: Concurrent responder acceptance calls utilize SELECT ... FOR UPDATE to eliminate race conditions when multiple responders accept simultaneously.",
      "Cryptographic Password Hashing: BCrypt password hashing with high work factor for stored user credentials."
    ]
  },
  testingEvidence: {
    totalTests: 317,
    passRate: "100% (317 Tests Executed, 0 Failures, 0 Errors)",
    frameworks: ["JUnit 5", "Mockito", "Spring Boot Test", "Spring Kafka Test", "Embedded Redis / H2"],
    breakdown: [
      { suite: "EmergencyServiceTest & FeatureTest", count: 48, scope: "Verifies FSM state transitions, 5-second grace window, race conditions, and resolution rules." },
      { suite: "LocationServiceTest & FeatureTest", count: 34, scope: "Tests Redis GEO radius indexing, Haversine spatial algorithms, and 15-meter arrival thresholds." },
      { suite: "SosEventConsumer & ProducerTest", count: 28, scope: "Verifies Kafka event serialization, asynchronous dispatch, and failure retry handling." },
      { suite: "WebSocketAuthInterceptorTest", count: 18, scope: "Validates JWT extraction and rejection across WebSocket STOMP handshake frames." },
      { suite: "AdminPoliceVerificationTest", count: 26, scope: "Verifies RBAC rules and document auditing for verified police and healthcare personnel." },
      { suite: "AuthController & UserControllerTest", count: 42, scope: "Validates authentication pipelines, password reset workflows, and contact preferences." },
      { suite: "EmergencyDiscovery & MovementTest", count: 32, scope: "Tests spatial boundary crossing and continuous responder proximity updates." }
    ]
  },
  deploymentTopology: [
    { service: "Production REST API & WebSocket Broker", platform: "Railway Cloud Container", role: "Hosts production Spring Boot 3.3.4 container with Redis and MySQL network peering.", isBackend: true, hasHealthEndpoint: true, healthEndpoint: "https://safewalk-backend-production-e3a1.up.railway.app/api/v1/health" },
    { service: "Distributed In-Memory Cache", platform: "Managed Redis 7.0", role: "Hosts geospatial index and ephemeral responder location keys with sub-millisecond query latency." },
    { service: "Relational Persistence Store", platform: "Managed MySQL 8.0", role: "Stores durable account records, emergency contact networks, and forensic audit histories." },
    { service: "Native Mobile Client", platform: "Google Android (API 26+)", role: "Native Kotlin / Jetpack Compose application distributed via GitHub Releases.", verifiedUrl: "https://github.com/gauravto312-wq/SafeWalk-Android/releases/tag/v1.0.0" }
  ],
  engineeringTradeOffs: [
    {
      decision: "Redis GEO vs MySQL Spatial Extensions",
      chosenSolution: "Dedicated Redis 7 GEO in-memory indexing for active responder locations.",
      alternativeConsidered: "Storing continuous coordinates in MySQL tables with spatial Point indices.",
      reasoning: "With thousands of mobile devices broadcasting coordinates every 3 seconds, MySQL relational write throughput and table locking would collapse. Redis processes in-memory GEOADD commands in microsecond timescales without disk I/O bottlenecks."
    },
    {
      decision: "Apache Kafka Event Bus vs Synchronous REST Cascade",
      chosenSolution: "Asynchronous event streaming via Apache Kafka for SOS lifecycle events.",
      alternativeConsidered: "Executing push notifications, SMS alerts, and audit logging synchronously inside the SOS REST controller.",
      reasoning: "In life-critical emergency systems, the citizen's SOS API request must return in under 100ms. Offloading notifications and audit logging to Kafka ensures the requester is immediately confirmed without risk of third-party SMS/FCM timeouts crashing the HTTP thread."
    },
    {
      decision: "Dual Confirmation vs Unilateral Emergency Cancellation",
      chosenSolution: "Enforced dual-confirmation resolution between requester and arriving responder.",
      alternativeConsidered: "Allowing the requester to cancel or resolve the emergency unilaterally at any time.",
      reasoning: "During violent or coercive situations, victims can be forced by an attacker to tap 'Cancel' on their phone. Requiring confirmation from an arrived responder or verification pin ensures coerced aborts are prevented."
    }
  ],
  knownLimitations: [
    "Kafka cluster in local development runs in standalone KRaft mode rather than a multi-broker high-availability partition quorum.",
    "Real-world GPS drift in urban canyons can occasionally register erroneous arrival status without secondary WiFi triangulation.",
    "SMS gateway relies on third-party carrier availability for emergency contacts without active internet connections."
  ],
  futureImprovements: [
    "Implement battery-efficient geofence listeners using Android fused location provider to reduce active foreground drain.",
    "Integrate automated fallback to cellular SMS when mobile data connectivity drops below usable thresholds.",
    "Implement WebRTC peer-to-peer audio streaming between arriving responder and distressed citizen."
  ],
  verifiedLinks: [
    { label: "Backend GitHub Repository", url: "https://github.com/gauravto312-wq/safewalk-backend", type: "github" },
    { label: "Android Mobile Client Repository", url: "https://github.com/gauravto312-wq/SafeWalk-Android", type: "github" },
    { label: "Android v1.0.0 Release Tag", url: "https://github.com/gauravto312-wq/SafeWalk-Android/releases/tag/v1.0.0", type: "release" },
    { label: "End-to-End Walkthrough Video", url: "https://youtu.be/91b0QSqxUSY", type: "video" }
  ]
};
