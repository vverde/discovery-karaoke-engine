// Auto-generated from markdown data files
// Do not edit manually — run parse_data.py to regenerate

const DATA = {
  "methods": [
    {
      "id": "M1",
      "name": "User Interviews (Problem Discovery)",
      "description": "One-on-one conversations exploring user problems, needs, workflows, and context. The most versatile generative method \u2014 but also the most defaulted to (classic karaoke risk).",
      "category": "generative",
      "risk": [
        "V"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any",
      "time": "1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Participant incentives, researcher time",
      "effort": "Medium",
      "evidence": "Moderate",
      "whenToUse": "You need to understand user problems, motivations, and context from scratch; exploring a new domain; building empathy across the team.",
      "whenNotToUse": "You already know the problem and need to validate a solution (use concept testing or usability testing); you need quantitative signal (use surveys); the question is behavioral, not attitudinal (use analytics or observation).",
      "karaokeCheck": "Are you defaulting to interviews because they're familiar? If your question is \"do users want X?\" \u2014 a fake door test or landing page gives you behavioral evidence faster than asking people what they think they'd do.",
      "companionTools": "Assumption Mapping (before), Empathy Mapping (after), Affinity Diagramming (synthesis)"
    },
    {
      "id": "M2",
      "name": "Jobs-to-be-Done (JTBD) Interviews",
      "description": "Structured interviews focused on the \"job\" users are trying to accomplish, the context that triggers action, and the outcomes they measure success by. Forces you past feature requests into underlying motivations.",
      "category": "generative",
      "risk": [
        "V"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any",
      "time": "2-4 weeks",
      "costLevel": "Low-Medium",
      "costDrivers": "Participant incentives, researcher time, JTBD expertise",
      "effort": "Medium-High",
      "evidence": "Moderate-Strong",
      "whenToUse": "You need to understand why users switch between solutions; defining a new product's positioning; your team is stuck in feature-thinking and needs to reframe around user outcomes.",
      "whenNotToUse": "You already understand the job and need to test a solution; the product category is well-established with no switching behavior to study; you don't have access to recent switchers.",
      "karaokeCheck": "JTBD interviews require specific technique (timeline, forces diagram). If you're just running standard interviews and calling them JTBD, you're doing karaoke \u2014 learn the method properly or use regular problem interviews.",
      "companionTools": "Value Proposition Canvas (synthesis), Opportunity Solution Trees (mapping)"
    },
    {
      "id": "M3",
      "name": "Contextual Inquiry",
      "description": "Observing and interviewing users IN their actual environment while they work. Combines observation (what they do) with questioning (why they do it). Reveals workarounds, environmental factors, and behavior users can't articulate in a meeting room.",
      "category": "generative",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any (strongest for B2B/enterprise workflows)",
      "companySize": "Scaleup, Enterprise",
      "teamSize": "Small (2-5)",
      "userAccess": "High",
      "customerBase": "Small+",
      "time": "2-4 weeks",
      "costLevel": "Medium",
      "costDrivers": "Researcher time, travel, participant coordination, environment access",
      "effort": "High",
      "evidence": "Strong",
      "whenToUse": "You suspect a gap between what users say and what they do; studying complex workflows with multiple tools/systems; need to understand environmental context (interruptions, physical setup, social dynamics).",
      "whenNotToUse": "Remote-only users with no observable physical context (use session recordings); you need scale, not depth; you already understand the workflow and need to validate a solution.",
      "karaokeCheck": "If you can answer your question with remote interviews or session recordings, contextual inquiry is overkill. Reserve it for when environment and behavior matter.",
      "companionTools": "Journey Mapping (synthesis), Service Blueprinting (if mapping front/backstage)"
    },
    {
      "id": "M4",
      "name": "Ethnographic Research",
      "description": "Extended immersion in the user's world \u2014 days to weeks observing, participating, and building cultural understanding. Goes far beyond a single session. Reveals deep context, cultural norms, and systemic patterns invisible in shorter methods.",
      "category": "generative",
      "risk": [
        "V"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Enterprise (budget/time required)",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "High",
      "customerBase": "Any",
      "time": "4+ weeks",
      "costLevel": "High",
      "costDrivers": "Extended researcher time, travel, access negotiation, analysis time",
      "effort": "High",
      "evidence": "Strong",
      "whenToUse": "Entering a completely unfamiliar domain; designing for cultures or contexts very different from your own; the problem is systemic and can't be understood from individual interviews.",
      "whenNotToUse": "You have time pressure (any method faster will do); the domain is already well-understood by your team; you're validating a solution, not exploring a problem space.",
      "karaokeCheck": "Ethnography is the most expensive generative method. If you're considering it, ask: can contextual inquiry (shorter, focused) answer the same question? Most product teams don't need full ethnography.",
      "companionTools": "Persona Development (synthesis), Journey Mapping (synthesis)"
    },
    {
      "id": "M5",
      "name": "Diary Studies",
      "description": "Participants self-report their experiences over days or weeks, capturing behavior, emotions, and context as they happen. Reveals patterns over time that snapshot methods miss \u2014 habits, triggers, and how needs evolve.",
      "category": "generative",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Small+",
      "time": "2-4 weeks",
      "costLevel": "Medium",
      "costDrivers": "Participant incentives (sustained commitment), researcher analysis time, diary tool",
      "effort": "Medium-High",
      "evidence": "Moderate-Strong",
      "whenToUse": "You need to understand behavior over time (not just a single session); studying habits, routines, or infrequent events; want to capture in-the-moment context without being physically present.",
      "whenNotToUse": "You need results in days (diary studies take weeks); participants are unlikely to self-report reliably; you need to observe behavior directly (use shadowing or session recordings).",
      "karaokeCheck": "Diary studies require sustained participant effort. If your question can be answered by a few interviews or an analytics review, don't impose a multi-week commitment on participants.",
      "companionTools": "Affinity Diagramming (synthesis), Persona Development (patterns across participants)"
    },
    {
      "id": "M6",
      "name": "Support Ticket Analysis",
      "description": "Systematic analysis of customer support tickets, help desk logs, and complaint records to identify recurring problems, pain points, and unmet needs from user-initiated feedback.",
      "category": "generative",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Explore",
        "Optimize"
      ],
      "businessModel": "Any",
      "companySize": "Any (requires existing product with support channel)",
      "teamSize": "Solo",
      "userAccess": "None (existing data)",
      "customerBase": "Medium+",
      "time": "Days",
      "costLevel": "Time only",
      "costDrivers": "Researcher time to categorize and analyze existing data",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "You have an existing product with support data and want to identify pain points; need to prioritize bug fixes or UX improvements by actual user impact; want naturally occurring feedback without research recruitment.",
      "whenNotToUse": "Pre-launch (no tickets); support data is too noisy or poorly categorized; looking for new opportunities (tickets reflect known problems, not unmet needs); want to hear from silent users (tickets skew toward vocal users).",
      "karaokeCheck": "Support tickets show you what's broken, not what's missing. If you're using ticket analysis as your only discovery input, you're optimizing the current product, not discovering new opportunities.",
      "companionTools": "Affinity Diagramming (theme clustering), Funnel Analysis (correlate with drop-off data)"
    },
    {
      "id": "M7",
      "name": "Forum / Community Analysis",
      "description": "Analyzing public discussions in forums, Reddit, app stores, and online communities to understand user needs, frustrations, and language without directly engaging participants.",
      "category": "generative",
      "risk": [
        "V"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any (especially Startup \u2014 no recruitment needed)",
      "companySize": "Any",
      "teamSize": "Solo",
      "userAccess": "None (public data)",
      "customerBase": "Pre-launch or Any",
      "time": "Days",
      "costLevel": "Time only",
      "costDrivers": "Researcher time to collect, code, and synthesize public data",
      "effort": "Low",
      "evidence": "Weak-Moderate",
      "whenToUse": "Exploring a new market quickly and cheaply; want unfiltered user language not influenced by your questions; understanding competitive perceptions and pain points.",
      "whenNotToUse": "Target users don't have active online communities (use interviews); need statistically representative data (use surveys); regulated space where public discussion may not reflect actual usage.",
      "karaokeCheck": "Forum analysis is passive \u2014 you hear what people choose to share publicly. It's a starting point, not a conclusion. If you stop here without validating with direct user contact, you're building on self-selected noise.",
      "companionTools": "Competitive Analysis (complement with market view), Affinity Diagramming (synthesis)"
    },
    {
      "id": "M8",
      "name": "Sales Call Analysis",
      "description": "Reviewing recorded sales calls, demos, and prospect conversations to extract common objections, needs, buying triggers, and competitive intelligence from real purchase conversations.",
      "category": "generative",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Explore",
        "Validate"
      ],
      "businessModel": "B2B",
      "companySize": "Scaleup, Enterprise (requires sales team with recordings)",
      "teamSize": "Solo",
      "userAccess": "None (existing recordings)",
      "customerBase": "Any (analyzing prospects, not just customers)",
      "time": "Days",
      "costLevel": "Time only to Low",
      "costDrivers": "Researcher time, conversation intelligence tool subscription if needed",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "B2B product team that doesn't regularly hear from end users; want to understand why deals are won, lost, or stalled; need to align product development with actual buying criteria.",
      "whenNotToUse": "B2C without a sales team; sales recordings don't exist or are too few; sales process is so standardized that calls don't reveal authentic prospect needs.",
      "karaokeCheck": "Sales calls reflect buyer needs, not necessarily user needs. Buyers and users are often different people in B2B. Don't confuse \"what closes deals\" with \"what users need daily.\"",
      "companionTools": "Assumption Mapping (turn objections into testable assumptions)"
    },
    {
      "id": "M9",
      "name": "Stakeholder Interviews",
      "description": "Structured interviews with internal stakeholders (executives, sales, support, engineering, legal) to understand business goals, constraints, institutional knowledge, and cross-functional perspectives.",
      "category": "generative",
      "risk": [
        "Vi",
        "F",
        "C"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any (critical for Enterprise where organizational complexity is high)",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None (internal participants)",
      "customerBase": "Any",
      "time": "1-2 weeks",
      "costLevel": "Time only",
      "costDrivers": "Researcher time, stakeholder calendar coordination",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "Starting a new initiative and need to understand business context and constraints; cross-functional alignment is weak; need to assess feasibility, viability, or compliance risks from domain experts.",
      "whenNotToUse": "Using stakeholder opinions as a substitute for user research (stakeholders are not users); stakeholder landscape is too political; information is already documented in strategy docs or OKRs.",
      "karaokeCheck": "Stakeholder interviews are internal \u2014 they tell you about the business, not the user. If you're spending all your discovery time talking to stakeholders and none with actual users, that's organizational karaoke.",
      "companionTools": "Pre-mortem (complement stakeholder concerns with structured risk identification)"
    },
    {
      "id": "M10",
      "name": "Focus Groups",
      "description": "Facilitated group discussions (6-10 participants) exploring attitudes, perceptions, and reactions to concepts or problems. Generates breadth of perspectives quickly but risks groupthink.",
      "category": "generative",
      "risk": [
        "V"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any (strongest for B2C)",
      "companySize": "Any",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate-High",
      "customerBase": "Any",
      "time": "1-2 weeks",
      "costLevel": "Medium",
      "costDrivers": "Participant incentives (multiple per session), facilitator, venue/platform, recruitment",
      "effort": "Medium",
      "evidence": "Weak-Moderate",
      "whenToUse": "You want breadth of reactions to a concept across different user segments quickly; need to observe how people discuss and react to ideas together; early-stage exploration of attitudes and language.",
      "whenNotToUse": "Need individual honest opinions (group dynamics distort); testing usability (use usability testing); need behavioral data, not stated preferences; dominant participants may skew the conversation.",
      "karaokeCheck": "Focus groups are popular because they feel productive \u2014 you hear lots of opinions in one session. But group dynamics produce social desirability bias. If you need honest individual feedback, interviews are more reliable.",
      "companionTools": "Affinity Diagramming (synthesis), Persona Development (segment patterns)"
    },
    {
      "id": "M65",
      "name": "Experience Sampling Method (ESM)",
      "description": "Researcher-triggered prompts sent to participants at random or scheduled moments throughout the day, asking them to report their current activity, context, and feelings in real time. The researcher controls when data is captured, unlike diary studies where participants choose.",
      "category": "generative",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Scaleup, Enterprise",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Small+",
      "time": "2-4 weeks",
      "costLevel": "Medium",
      "costDrivers": "Participant incentives (sustained), ESM tool/platform, researcher analysis time",
      "effort": "Medium-High",
      "evidence": "Moderate-Strong",
      "whenToUse": "Need to capture in-the-moment experiences without recall bias; studying how context affects behavior at different times/places; want researcher-controlled sampling rather than participant-initiated reporting.",
      "whenNotToUse": "Participants can't be interrupted during work (safety-critical roles); need depth over breadth (use diary studies); small sample makes statistical patterns unreliable.",
      "karaokeCheck": "ESM is more rigorous than diary studies but more intrusive. If a standard diary study would answer your question, don't add the complexity of scheduled interruptions.",
      "companionTools": "Diary Studies (complement or compare), Affinity Diagramming (synthesis)"
    },
    {
      "id": "M66",
      "name": "Shadowing (Passive Observation)",
      "description": "Following users through their natural environment and workflow WITHOUT interacting or asking questions. Pure observation \u2014 the researcher is a fly on the wall. Reveals unconscious behaviors and environmental factors users edit out when they know they're being studied.",
      "category": "generative",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any (strongest for B2B/enterprise)",
      "companySize": "Scaleup, Enterprise",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "High",
      "customerBase": "Small+",
      "time": "1-2 weeks",
      "costLevel": "Medium",
      "costDrivers": "Researcher time, travel, access negotiation",
      "effort": "Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "You suspect users behave differently than they say (say/do gap); active questioning might change the behavior you're observing; need to understand full environmental context; studying routine workflows users can't articulate.",
      "whenNotToUse": "Need to understand WHY (shadowing shows what, not why \u2014 debrief afterward); environment is too private or sensitive; remote users make physical shadowing impractical; behavior is primarily digital (use session recordings).",
      "karaokeCheck": "Shadowing requires physical presence and produces no data if you're not trained to observe systematically. If you're just \"hanging around\" without an observation framework, you're doing tourism, not research.",
      "companionTools": "Journey Mapping (map observed workflow), Contextual Inquiry (add questioning after observation)"
    },
    {
      "id": "M11",
      "name": "Surveys (Problem Validation)",
      "description": "Structured questionnaires distributed to a sample of users or prospects to quantify the prevalence of problems, validate hypotheses, and measure attitudes at scale.",
      "category": "evaluative",
      "risk": [
        "V"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo",
      "userAccess": "Moderate",
      "customerBase": "Medium+ (need sample size for significance)",
      "time": "1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Survey tool subscription, distribution channel, researcher time for design and analysis",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "You have qualitative hypotheses from interviews and need to quantify them; need to measure prevalence of a problem across segments; want to complement qualitative insights with numerical confidence.",
      "whenNotToUse": "You don't know what to ask yet (do interviews first); want to understand WHY, not how many (surveys measure, they don't explain); response rates are too low for meaningful analysis; using surveys as a shortcut to avoid talking to users.",
      "karaokeCheck": "\"Let's send a survey\" is one of the most common karaoke moves. Surveys are only as good as the questions, and you can only ask good questions if you've done qualitative work first. Survey-before-interview is backwards.",
      "companionTools": "Interviews (always do these first), Assumption Mapping (identify what to validate)"
    },
    {
      "id": "M12",
      "name": "Surveys (Satisfaction \u2014 NPS/CSAT/CES)",
      "description": "Ongoing measurement of customer satisfaction (CSAT), loyalty (NPS), and effort (CES). Three distinct metrics with different purposes: NPS measures advocacy, CSAT measures satisfaction, CES measures friction.",
      "category": "evaluative",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any",
      "companySize": "Any (requires existing product with users)",
      "teamSize": "Solo",
      "userAccess": "Low (in-product deployment)",
      "customerBase": "Medium+",
      "time": "Ongoing (setup: days; each cycle: 1-2 weeks)",
      "costLevel": "Low",
      "costDrivers": "Survey tool, researcher time for trend analysis, follow-up effort",
      "effort": "Low",
      "evidence": "Moderate",
      "whenToUse": "Need an ongoing pulse on customer satisfaction; want to measure impact of product changes over time; need to identify at-risk customers for churn prevention.",
      "whenNotToUse": "Using NPS as your sole discovery method (it tells you satisfaction, not what to build); product is too new for longitudinal data; treating the score as a goal rather than a signal (Goodhart's Law risk).",
      "karaokeCheck": "NPS is the ultimate karaoke metric \u2014 everyone tracks it, few act on it. If you're collecting NPS but never reading the open-ended responses or following up with detractors, you're measuring for show, not for learning.",
      "companionTools": "Support Ticket Analysis (correlate satisfaction with issues), Cohort Analysis (segment trends)"
    },
    {
      "id": "M13",
      "name": "Card Sorting",
      "description": "Participants organize content items into groups that make sense to them, revealing their mental models for information architecture. Open sorts let participants create categories; closed sorts test an existing structure against user expectations.",
      "category": "evaluative",
      "risk": [
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any",
      "time": "1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Card sorting tool subscription, participant incentives, researcher time for analysis",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "Designing or restructuring navigation and information architecture; need to understand how users mentally categorize your content; multiple stakeholders disagree on how to organize features or pages.",
      "whenNotToUse": "Testing visual design or interaction patterns (use usability testing); your content set is too small to have meaningful grouping questions; looking for behavioral evidence of navigation success (use tree testing or first-click testing instead).",
      "karaokeCheck": "Card sorting is easy to run, so teams default to it when the real question is \"can users FIND things?\" \u2014 not \"how would users GROUP things?\" If you already have a structure and want to test findability, skip to tree testing.",
      "companionTools": "Assumption Mapping (before \u2014 what do you assume about user mental models?), Tree Testing (after \u2014 validate the structure card sorting suggested)"
    },
    {
      "id": "M14",
      "name": "Tree Testing",
      "description": "Participants navigate a text-only hierarchy (no visual design, no content) to find specific items, measuring whether your information architecture works before you invest in design. Pure structural validation \u2014 findability without visual cues.",
      "category": "evaluative",
      "risk": [
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Tree testing tool subscription, participant incentives, researcher time for task design and analysis",
      "effort": "Low",
      "evidence": "Moderate-Strong",
      "whenToUse": "You have a proposed navigation structure and need to validate it before building; comparing two or more IA approaches quantitatively; card sorting gave you a structure and you want to test it; need to isolate navigation problems from visual design problems.",
      "whenNotToUse": "You don't have a proposed structure yet (do card sorting first); want to test visual design, labels in context, or interactive UI (use usability testing); your product has minimal navigation (single-page or linear flow).",
      "karaokeCheck": "Tree testing is fast and cheap, but it only tests structure. If users are failing tasks in your live product, don't assume it's an IA problem \u2014 the issue might be visual hierarchy, labeling, or interaction design. Match the method to the actual risk.",
      "companionTools": "Card Sorting (before \u2014 generate the structure), First-Click Testing (complement \u2014 test landing behavior)"
    },
    {
      "id": "M15",
      "name": "Five-Second Test",
      "description": "Show participants a design for exactly five seconds, then ask what they remember \u2014 testing first impressions, visual hierarchy, and whether the primary message lands immediately. Measures perception, not comprehension.",
      "category": "evaluative",
      "risk": [
        "U",
        "V"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any (especially B2C and landing pages)",
      "companySize": "Any",
      "teamSize": "Solo",
      "userAccess": "Low-Moderate",
      "customerBase": "Any",
      "time": "Hours to Days",
      "costLevel": "Low",
      "costDrivers": "Testing tool subscription, participant incentives (minimal \u2014 sessions are seconds long), researcher time for analysis",
      "effort": "Low",
      "evidence": "Weak-Moderate",
      "whenToUse": "Validating whether a landing page communicates its value proposition instantly; testing visual hierarchy \u2014 does the most important element get noticed first; comparing design variants for first-impression clarity.",
      "whenNotToUse": "Testing comprehension, usability, or task completion (five seconds isn't enough); evaluating complex workflows; the design requires reading or interaction to understand (use usability testing); need strong evidence for a high-stakes decision.",
      "karaokeCheck": "Five-second tests are popular because they're fast and feel scientific. But \"users noticed the headline\" doesn't mean \"users will convert.\" If you need behavioral evidence of effectiveness, run a usability test or a real A/B test.",
      "companionTools": "Assumption Mapping (before \u2014 what do you believe users will notice?), Usability Testing (after \u2014 validate with deeper task-based evaluation)"
    },
    {
      "id": "M16",
      "name": "Usability Testing (Moderated)",
      "description": "A researcher sits with a participant (in person or remotely) and observes them attempt realistic tasks using a prototype or product. The researcher probes for understanding, follows up on confusion, and adapts the session in real time. The gold standard for understanding WHY users struggle.",
      "category": "evaluative",
      "risk": [
        "U",
        "V"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate-High",
      "customerBase": "Any",
      "time": "1-2 weeks",
      "costLevel": "Medium",
      "costDrivers": "Participant incentives, researcher time (prep + sessions + analysis), prototype/tool, recording platform",
      "effort": "Medium-High",
      "evidence": "Strong",
      "whenToUse": "Validating a design before development investment; need to understand WHY users struggle, not just where; testing complex flows where context and follow-up questions matter; early-stage prototypes where tasks may need real-time clarification.",
      "whenNotToUse": "Need statistical significance across hundreds of users (use unmoderated or A/B tests); the design is simple enough that unmoderated testing captures the signal; you can't wait for scheduling and participant recruitment.",
      "karaokeCheck": "Moderated usability testing is the most common karaoke method after interviews. Teams default to it for everything. Ask: do I need to understand WHY users fail, or just WHERE? If just where, unmoderated is faster and cheaper. If the design hasn't changed since the last round, stop testing and start shipping.",
      "companionTools": "Assumption Mapping (before \u2014 what specific risks are you testing?), Cognitive Walkthrough (before \u2014 catch obvious issues without users), Affinity Diagramming (synthesis)"
    },
    {
      "id": "M17",
      "name": "Usability Testing (Unmoderated)",
      "description": "Participants complete tasks independently using a prototype or live product, recorded by software. No researcher is present \u2014 instructions, tasks, and follow-up questions are predefined. Trades depth for scale, speed, and cost.",
      "category": "evaluative",
      "risk": [
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any",
      "time": "Days",
      "costLevel": "Low-Medium",
      "costDrivers": "Testing platform subscription, participant incentives (panel-based), researcher time for task design and video review",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "Need usability data fast without scheduling sessions; want to test across more participants than moderated allows; validating straightforward tasks where follow-up probing isn't critical; comparing two design variants on task success rate.",
      "whenNotToUse": "Testing complex or ambiguous flows where participants need clarification; need to understand WHY users struggle (no probing possible); prototype is too rough for self-guided use; participants need onboarding or context-setting.",
      "karaokeCheck": "Unmoderated testing feels efficient, but reviewing hours of video is not. If you're running unmoderated tests and only watching the highlight reels, you're losing the nuance that makes usability testing valuable. Define your analysis protocol before you run the sessions.",
      "companionTools": "Heuristic Review (before \u2014 catch low-hanging issues first), Task Analysis (before \u2014 define realistic tasks)"
    },
    {
      "id": "M18",
      "name": "Expert/Heuristic Review",
      "description": "Experienced evaluators systematically inspect an interface against established usability principles (heuristics), identifying potential problems without involving users. Fast, cheap, and effective at catching known patterns of usability failure.",
      "category": "evaluative",
      "risk": [
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None",
      "customerBase": "Any (including Pre-launch)",
      "time": "Hours to Days",
      "costLevel": "Time only to Low",
      "costDrivers": "Evaluator time, external expert fees if using outside reviewers",
      "effort": "Low",
      "evidence": "Weak-Moderate",
      "whenToUse": "Need a quick usability sanity check before user testing; budget or timeline won't support recruiting participants; reviewing a competitor's product; new team member needs to rapidly assess an existing interface.",
      "whenNotToUse": "Treating expert opinion as a substitute for user evidence (experts catch different things than users do); the design is highly domain-specific and evaluators lack domain expertise; you need to understand user behavior, not just predict it.",
      "karaokeCheck": "Heuristic reviews are the fastest evaluative method, so teams over-rely on them. An expert saying \"this violates Nielsen's heuristic #7\" is not the same as observing a user fail at a task. Use expert reviews to catch the obvious, then test with users for the rest.",
      "companionTools": "Cognitive Walkthrough (complement \u2014 task-focused expert analysis), Usability Testing (after \u2014 validate findings with real users)"
    },
    {
      "id": "M19",
      "name": "Accessibility Audit",
      "description": "Systematic evaluation of a product against accessibility standards (WCAG, Section 508, EN 301 549) to identify barriers for users with disabilities. Combines automated scanning, manual inspection, and assistive technology testing.",
      "category": "evaluative",
      "risk": [
        "C",
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any (mandatory for government/regulated; critical for enterprise)",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None (expert-based) to Moderate (if including users with disabilities)",
      "customerBase": "Any",
      "time": "1-2 weeks",
      "costLevel": "Low-Medium",
      "costDrivers": "Auditor time (specialized expertise), automated scanning tools, assistive technology, remediation documentation",
      "effort": "Medium",
      "evidence": "Strong",
      "whenToUse": "Launching a new product or major feature; legal or regulatory compliance requirements; your user base includes people with disabilities (hint: it always does); enterprise customers require VPAT documentation.",
      "whenNotToUse": "Using an audit as a one-time checkbox instead of building accessible from the start; the product is a throwaway prototype that won't ship; relying solely on automated tools (they catch ~30% of issues).",
      "karaokeCheck": "Running an accessibility audit and filing the report without a remediation plan is compliance theater. If the audit doesn't lead to changes, you're performing accessibility, not practicing it. Also \u2014 auditing at the end is expensive. Build accessible from the start.",
      "companionTools": "Heuristic Review (broader usability context), Usability Testing with assistive technology users (after \u2014 validate with real users)"
    },
    {
      "id": "M28",
      "name": "Paper Prototyping",
      "description": "Hand-drawn screens and interface elements that users interact with physically, with a human \"playing computer\" to simulate responses. The lowest-fidelity interactive prototype \u2014 maximizes speed and encourages radical design exploration.",
      "category": "evaluative",
      "risk": [
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any (especially Startup \u2014 zero tool cost)",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any (including Pre-launch)",
      "time": "Hours to Days",
      "costLevel": "Time only",
      "costDrivers": "Researcher/designer time to create and facilitate, participant incentives",
      "effort": "Low",
      "evidence": "Weak-Moderate",
      "whenToUse": "Very early concept validation where investing in digital tools is premature; want to test flow and structure before visual design; need to iterate rapidly within a single session (redraw on the spot); co-designing with users.",
      "whenNotToUse": "Testing visual design, micro-interactions, or animations; participants need a realistic experience to give valid feedback; remote testing (paper prototypes are physical); the concept requires data or dynamic content to evaluate.",
      "karaokeCheck": "Paper prototyping was revolutionary in the 1990s. Today, low-fidelity digital tools (Balsamiq, Whimsical) are nearly as fast and work remotely. If you're choosing paper because it feels \"lean,\" check whether a quick digital wireframe would actually serve you better and reach remote participants.",
      "companionTools": "Assumption Mapping (before \u2014 what design assumptions are you testing?), Usability Testing (after \u2014 test with higher fidelity)"
    },
    {
      "id": "M29",
      "name": "Digital Prototyping",
      "description": "Interactive mockups built in design tools (Figma, Sketch, Framer) that simulate the real product experience at varying fidelity levels. Ranges from clickable wireframes to pixel-perfect, animated prototypes that feel like the finished product.",
      "category": "evaluative",
      "risk": [
        "U",
        "V"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any (including Pre-launch)",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low-Medium",
      "costDrivers": "Designer time, prototyping tool subscription, participant incentives for testing",
      "effort": "Medium",
      "evidence": "Moderate",
      "whenToUse": "Need to test an experience before building it; stakeholder alignment requires something that \"looks real\"; validating flow, interaction patterns, and visual design together; preparing stimulus for usability testing.",
      "whenNotToUse": "A paper prototype or conversation would answer the question faster; you're perfecting pixel details before validating the concept; the prototype becomes a crutch to avoid shipping (prototype-forever loop); need to test performance, data, or integration behavior.",
      "karaokeCheck": "Prototyping feels like progress, but it's not shipping. If your team is on its fourth prototype iteration without testing with users or making a build decision, the prototype has become the product of your discovery \u2014 and that's karaoke. Prototype to learn, not to polish.",
      "companionTools": "Assumption Mapping (before \u2014 what must this prototype answer?), Usability Testing (with the prototype), Concept Testing (validate value before perfecting usability)"
    },
    {
      "id": "M47",
      "name": "Concept Testing",
      "description": "Presenting a solution concept \u2014 description, mockup, storyboard, or video \u2014 to target users and measuring their reaction: appeal, relevance, credibility, and intent. Tests whether the VALUE proposition resonates before you build anything.",
      "category": "evaluative",
      "risk": [
        "V"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Any (including Pre-launch)",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Concept stimulus creation, participant incentives, researcher time for facilitation and analysis",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "You have a solution concept and want to gauge desirability before investing in development; comparing multiple concepts to prioritize; need to validate whether the value proposition resonates with target users; stakeholders disagree on direction and need user signal.",
      "whenNotToUse": "The concept is too abstract to elicit meaningful reactions (do more problem research first); you need behavioral evidence, not stated preference (use fake door tests or landing pages); testing usability, not value (use usability testing).",
      "karaokeCheck": "Concept testing asks people \"would you use this?\" \u2014 and people are terrible at predicting their own behavior. If you can test with a fake door, landing page, or Wizard of Oz prototype that measures actual behavior, that evidence is stronger. Concept tests are better than nothing, but weaker than behavioral signal.",
      "companionTools": "Assumption Mapping (before \u2014 isolate which value assumptions to test), Value Proposition Canvas (before \u2014 articulate the concept clearly), Preference Testing (complement \u2014 compare concepts head-to-head)"
    },
    {
      "id": "M53",
      "name": "Kano Model Analysis",
      "description": "Survey-based method that classifies features into categories (Must-be, One-dimensional, Attractive, Indifferent, Reverse) based on user satisfaction when the feature is present versus absent. Reveals which features delight, which are expected, and which don't matter.",
      "category": "evaluative",
      "risk": [
        "V"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Medium+ (need sample size for category classification)",
      "time": "1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Survey tool, participant incentives, researcher time for questionnaire design and classification analysis",
      "effort": "Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "Prioritizing a feature backlog by user-perceived value; need to distinguish \"must-have\" from \"nice-to-have\" from \"nobody cares\"; communicating feature priority to stakeholders using a structured framework.",
      "whenNotToUse": "Too few users for quantitative analysis; features are too abstract for users to evaluate (they need to understand what \"present\" and \"absent\" means); early-stage exploration where you haven't identified candidate features yet; using Kano as a substitute for understanding WHY users value something.",
      "karaokeCheck": "Kano analysis produces clean quadrant charts that look rigorous, but the quality depends entirely on how well you describe features in the survey. Vague feature descriptions produce meaningless classifications. If you can't describe the feature concretely enough for users to evaluate, you're not ready for Kano.",
      "companionTools": "Assumption Mapping (before \u2014 identify feature assumptions), Opportunity Solution Trees (synthesis \u2014 map features to outcomes), Conjoint Analysis (complement \u2014 trade-off analysis)"
    },
    {
      "id": "M54",
      "name": "Preference Testing",
      "description": "Show participants two or more design alternatives side by side and ask them to choose which they prefer, optionally explaining why. Quick, comparative signal \u2014 best for settling design debates with user input rather than opinion.",
      "category": "evaluative",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo",
      "userAccess": "Low-Moderate",
      "customerBase": "Any",
      "time": "Hours to Days",
      "costLevel": "Low",
      "costDrivers": "Testing tool subscription, participant incentives (minimal \u2014 sessions are brief), researcher time",
      "effort": "Low",
      "evidence": "Weak-Moderate",
      "whenToUse": "Choosing between two or more design directions and want user input; settling subjective design debates within the team; quick directional signal on visual design, layout, or branding; complement to usability testing with a \"which do you prefer overall?\" comparison.",
      "whenNotToUse": "Comparing designs that differ on multiple dimensions (you won't know which dimension drove the preference); need to understand task performance, not aesthetic preference (use usability testing); treating stated preference as prediction of behavior (people choose what looks good, not what works).",
      "karaokeCheck": "Preference testing is the \"audience applause meter\" of design research \u2014 it feels democratic but measures surface appeal. If your two options differ in ways that affect usability, preference testing will lead you to the prettier option, not the more usable one. Test performance, not preference, when it matters.",
      "companionTools": "Five-Second Test (complement \u2014 first impression), Usability Testing (after \u2014 validate the preferred option actually works), Assumption Mapping (before \u2014 what design assumptions are you resolving?)"
    },
    {
      "id": "M69",
      "name": "Conjoint Analysis",
      "description": "Survey-based statistical method where participants evaluate product configurations with different feature combinations and price points. Reveals how users make trade-offs \u2014 which features they'll sacrifice, what they'll pay for, and how attributes interact.",
      "category": "evaluative",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any (strongest for B2C and SaaS pricing)",
      "companySize": "Scaleup, Enterprise (requires sample size and analytical capability)",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Medium+ (need statistical sample \u2014 typically 200+)",
      "time": "2-4 weeks",
      "costLevel": "Medium-High",
      "costDrivers": "Conjoint software (Sawtooth, Conjointly), large participant panel, researcher time for study design and statistical analysis, domain expertise",
      "effort": "High",
      "evidence": "Strong",
      "whenToUse": "Pricing decisions \u2014 willingness to pay for specific features; product configuration and bundling decisions; need to understand trade-offs, not just preferences; enough sample size for statistical modeling (200+ participants typical).",
      "whenNotToUse": "Early-stage exploration where features aren't defined enough; too few attributes or levels to justify the complexity (use simpler preference testing); team lacks statistical expertise to design and analyze properly; qualitative understanding of why is more important than quantitative trade-off data.",
      "karaokeCheck": "Conjoint analysis produces impressive statistical outputs \u2014 utility scores, market simulators, willingness-to-pay curves. But garbage in, garbage out. If your attributes and levels don't reflect real user decision factors (because you skipped qualitative discovery), the math is precise but wrong. Do the qual work first.",
      "companionTools": "User Interviews (before \u2014 understand decision factors qualitatively), Kano Model (complement \u2014 categorize features before trade-off analysis), Assumption Mapping (before \u2014 what pricing/bundling assumptions need evidence?)"
    },
    {
      "id": "M70",
      "name": "First-Click Testing",
      "description": "Participants are shown a page or screen and asked where they would click first to accomplish a specific task. Measures whether users' initial navigation instinct matches the intended path. If the first click is right, users succeed 87% of the time; if wrong, only 46%.",
      "category": "evaluative",
      "risk": [
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo",
      "userAccess": "Low-Moderate",
      "customerBase": "Any (including Pre-launch)",
      "time": "Hours to Days",
      "costLevel": "Low",
      "costDrivers": "Testing tool subscription, participant incentives (minimal \u2014 very short sessions), researcher time for task design and heatmap analysis",
      "effort": "Low",
      "evidence": "Moderate",
      "whenToUse": "Validating navigation and page layout before full usability testing; testing whether calls-to-action are visible and understood; evaluating landing page effectiveness; quick signal on whether a redesign improves findability.",
      "whenNotToUse": "Need to test the full task flow (first click only tests the entry point); evaluating complex multi-step processes; testing content comprehension or value proposition (use five-second test or concept testing); design doesn't have distinct click targets.",
      "karaokeCheck": "First-click testing is seductively fast and produces pretty heatmaps. But a correct first click doesn't guarantee task success \u2014 the rest of the journey matters too. If you're using first-click data to declare \"navigation works,\" you're testing the appetizer and reviewing the whole meal.",
      "companionTools": "Tree Testing (complement \u2014 test structure without visual design), Usability Testing (after \u2014 validate the full task flow), Heuristic Review (before \u2014 catch obvious issues without users)"
    },
    {
      "id": "M71",
      "name": "Cognitive Walkthrough",
      "description": "Evaluators step through a task flow from the user's perspective, asking at each step: \"Will the user know what to do? Will they notice the right action? Will they understand the feedback?\" Focuses specifically on learnability for new or infrequent users.",
      "category": "evaluative",
      "risk": [
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None",
      "customerBase": "Any (including Pre-launch)",
      "time": "Hours to Days",
      "costLevel": "Time only",
      "costDrivers": "Evaluator time, task scenario preparation",
      "effort": "Low",
      "evidence": "Weak-Moderate",
      "whenToUse": "Evaluating onboarding or first-use flows; testing learnability before recruiting users; design review where you need a structured framework beyond \"looks good to me\"; complement to heuristic review when the risk is specifically about new-user experience.",
      "whenNotToUse": "Evaluating expert/power-user workflows (cognitive walkthrough assumes novice perspective); need to understand real user behavior (use usability testing); design is too early for step-by-step task flows; using it as a substitute for actual user testing.",
      "karaokeCheck": "A cognitive walkthrough by the team that designed the interface has a blind spot \u2014 you already know how it works. If you can't bring in someone unfamiliar with the design, at least be rigorous about the protocol: answer each step's questions honestly, and document where you're uncertain rather than assuming users will figure it out.",
      "companionTools": "Heuristic Review (complement \u2014 broader principle-based analysis), Usability Testing (after \u2014 validate findings with real users), Task Analysis (before \u2014 define the task flows to walk through)## Experimentation Methods\n\nMethods that test with real behavior, real money, or real market signals."
    },
    {
      "id": "M20",
      "name": "A/B Testing",
      "description": "Randomly splitting live traffic between two variants (control vs. treatment) to measure which performs better on a defined metric. The gold standard of behavioral experimentation \u2014 but requires sufficient traffic to reach statistical significance.",
      "category": "experimentation",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any (strongest for B2C with high traffic)",
      "companySize": "Scaleup, Enterprise",
      "teamSize": "Cross-functional (5+)",
      "userAccess": "Low (existing traffic)",
      "customerBase": "Large (10K+)",
      "time": "1-2 weeks",
      "costLevel": "Medium",
      "costDrivers": "Experimentation platform, engineering time to instrument, analyst time for results",
      "effort": "Medium",
      "evidence": "Strong",
      "whenToUse": "You have a clear hypothesis about which variant performs better; sufficient traffic to reach significance within your patience window; optimizing an existing flow where small changes compound.",
      "whenNotToUse": "Traffic is too low for significance (use qualitative testing); you're testing a fundamentally new concept (use fake door or prototype); the change is so obvious it doesn't need a test; you haven't defined the metric you're optimizing for.",
      "karaokeCheck": "A/B testing is the \"we're data-driven\" badge. If you're running A/B tests on button colors while ignoring whether users even want the feature, you're optimizing a local maximum. Test the right level of the problem first.",
      "companionTools": "Funnel Analysis (identify where to test), Feature Audit (prioritize what to test), Cohort Analysis (segment results)"
    },
    {
      "id": "M21",
      "name": "Multivariate Testing",
      "description": "Testing multiple variables simultaneously (e.g., headline + image + CTA) to identify the best combination and interaction effects between elements. More complex than A/B testing but reveals how elements work together.",
      "category": "experimentation",
      "risk": [
        "U"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any (strongest for B2C with very high traffic)",
      "companySize": "Enterprise",
      "teamSize": "Cross-functional (5+)",
      "userAccess": "Low (existing traffic)",
      "customerBase": "Large (10K+)",
      "time": "2-4 weeks",
      "costLevel": "Medium-High",
      "costDrivers": "Experimentation platform, engineering time for multiple variants, statistician for interaction analysis",
      "effort": "High",
      "evidence": "Strong",
      "whenToUse": "You need to understand interaction effects between multiple page elements; traffic is high enough to split across many variants; optimizing a critical conversion page where element combinations matter.",
      "whenNotToUse": "You don't have enough traffic (most teams don't \u2014 use sequential A/B tests instead); you haven't validated the core proposition yet; the page has fundamental structural problems that multivariate testing won't fix.",
      "karaokeCheck": "Multivariate testing sounds sophisticated but requires massive traffic to reach significance across all combinations. If you're running MVT with 10K monthly visitors, you'll wait months for inconclusive results. Do the math on sample size first.",
      "companionTools": "A/B Testing (simpler alternative for lower traffic), Funnel Analysis (identify high-impact pages), Heatmap Analysis (understand current behavior)"
    },
    {
      "id": "M22",
      "name": "Switchback Testing",
      "description": "Alternating between treatment and control conditions over time periods (e.g., enabling a feature for one week, disabling it the next) to measure impact when randomizing users isn't possible \u2014 common in marketplace and logistics systems.",
      "category": "experimentation",
      "risk": [
        "V"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "B2B, B2B2C (especially marketplaces and platforms)",
      "companySize": "Scaleup, Enterprise",
      "teamSize": "Cross-functional (5+)",
      "userAccess": "Low (existing users)",
      "customerBase": "Large (10K+)",
      "time": "2-4 weeks",
      "costLevel": "Medium",
      "costDrivers": "Engineering time for controlled rollout, analyst time for time-series analysis, operational coordination",
      "effort": "High",
      "evidence": "Moderate-Strong",
      "whenToUse": "Network effects or marketplace dynamics make user-level randomization invalid (e.g., changing pricing affects all buyers); need to test system-level changes that affect all users simultaneously; geographic or temporal segmentation is more natural than user segmentation.",
      "whenNotToUse": "Standard A/B testing is possible (it's more rigorous); confounding time-based factors (seasonality, day-of-week) can't be controlled; switchback cadence is too short for the behavior to stabilize.",
      "karaokeCheck": "Switchback tests are necessary for marketplace and platform dynamics, but they're harder to analyze correctly. If you're using switchback because \"A/B testing is too hard to set up,\" that's laziness, not methodology.",
      "companionTools": "Cohort Analysis (segment by time period), A/B Testing (use instead when user-level randomization works)"
    },
    {
      "id": "M23",
      "name": "Fake Door / Painted Door Test",
      "description": "Placing a realistic UI element (button, link, menu item) for a feature that doesn't exist yet and measuring click-through rate to gauge actual demand before building anything. Users who click see a \"coming soon\" or waitlist message.",
      "category": "experimentation",
      "risk": [
        "V"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Low (existing traffic)",
      "customerBase": "Medium+",
      "time": "Days",
      "costLevel": "Low",
      "costDrivers": "Engineering time for button/link placement, analytics setup",
      "effort": "Low",
      "evidence": "Moderate-Strong",
      "whenToUse": "You have an existing product with traffic and want to measure demand for a new feature before building it; need behavioral evidence fast, not opinions; stakeholders are debating whether users want something \u2014 let users vote with clicks.",
      "whenNotToUse": "No existing product or traffic; the feature requires explanation (a button alone won't communicate value); overusing fake doors erodes user trust; regulated environments where \"misleading\" UI is risky.",
      "karaokeCheck": "Fake doors measure click intent, not commitment. A 5% click rate on \"AI Assistant\" tells you people are curious, not that they'd pay for it or use it regularly. Pair with follow-up to assess depth of interest.",
      "companionTools": "Landing Page Test (deeper validation), Surveys (follow-up with clickers), Funnel Analysis (measure click-through context)"
    },
    {
      "id": "M24",
      "name": "Landing Page Test",
      "description": "Creating a standalone page that presents a value proposition, pricing, and call-to-action (sign-up, waitlist, pre-order) for a product or feature that may not exist yet. Measures real intent through conversion behavior.",
      "category": "experimentation",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Startup, Scaleup",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate (need to drive traffic)",
      "customerBase": "Pre-launch or Any",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low-Medium",
      "costDrivers": "Page design/build, ad spend to drive traffic, analytics setup",
      "effort": "Low-Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "Testing demand before building anything; validating value proposition and positioning; comparing multiple positioning approaches; need behavioral signal stronger than surveys but cheaper than building an MVP.",
      "whenNotToUse": "You can't drive meaningful traffic to the page; your product requires hands-on experience to evaluate (landing pages test the pitch, not the product); B2B enterprise sales where a landing page doesn't match the buying process.",
      "karaokeCheck": "A landing page with zero traffic teaches you nothing. If your plan is \"build it and they will come,\" you need a traffic strategy. Also: optimizing the page before testing the proposition is premature polish.",
      "companionTools": "Fake Door Test (lighter alternative), A/B Testing (optimize the page), Pre-sales (B2B validation complement)"
    },
    {
      "id": "M26",
      "name": "Concierge MVP",
      "description": "Manually delivering the service or solution to real customers without any technology \u2014 you ARE the product. Each interaction is personalized and hands-on, giving you deep learning about what users actually need versus what you assumed.",
      "category": "experimentation",
      "risk": [
        "V",
        "F"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any (strongest for service-based and B2B)",
      "companySize": "Startup",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Pre-launch or Small",
      "time": "2-4 weeks",
      "costLevel": "Medium",
      "costDrivers": "Founder/team time delivering the service manually, customer acquisition",
      "effort": "High",
      "evidence": "Strong",
      "whenToUse": "You need to validate whether your solution actually delivers value before investing in technology; the process is complex and you're not sure which parts to automate; you want to build deep customer relationships while learning.",
      "whenNotToUse": "The value proposition depends on scale or speed that manual delivery can't approximate; you already understand the process and need to test the technology; manual delivery is physically impossible for your product type.",
      "karaokeCheck": "Concierge MVP means doing the work for real customers, not simulating it. If you're \"doing a concierge MVP\" but not actually delivering value to anyone, you're just planning. The learning comes from the friction of real delivery.",
      "companionTools": "Wizard of Oz (add a tech facade), JTBD Interviews (understand the job being done during delivery), Spike Solution (test technical components)"
    },
    {
      "id": "M27",
      "name": "Wizard of Oz",
      "description": "Presenting users with what appears to be a working product or automated feature, while a human secretly performs the work behind the scenes. Tests whether users value the outcome without building the actual technology.",
      "category": "experimentation",
      "risk": [
        "V",
        "U"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Startup, Scaleup",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate",
      "customerBase": "Pre-launch or Small",
      "time": "1-2 weeks",
      "costLevel": "Medium",
      "costDrivers": "Team time operating behind the curtain, minimal front-end build, participant recruitment",
      "effort": "Medium-High",
      "evidence": "Strong",
      "whenToUse": "The technology is expensive or risky to build but the interface can be faked; you want to test whether users value the outcome regardless of how it's produced; validating AI/ML features where the algorithm doesn't exist yet.",
      "whenNotToUse": "The user experience depends on speed/scale that humans can't replicate; ethical concerns about deception in your context; the technology IS the differentiator and needs to be tested directly (use a spike or PoC).",
      "karaokeCheck": "Wizard of Oz only works if the human can deliver a realistic approximation. If the human behind the curtain is noticeably slower, less accurate, or differently capable than the planned technology, you're not testing the right experience.",
      "companionTools": "Concierge MVP (fully transparent manual version), Usability Testing (test the interface), Spike Solution (test technical feasibility separately)"
    },
    {
      "id": "M42",
      "name": "Competitive Analysis",
      "description": "Systematic evaluation of competitor products, positioning, features, pricing, and strategies to identify market gaps, differentiation opportunities, and table-stakes requirements.",
      "category": "experimentation",
      "risk": [
        "Vi",
        "V"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None",
      "customerBase": "Any",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Researcher time, competitor product access (trials/subscriptions), market intelligence tools",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "Entering a market and need to understand the landscape; positioning your product and need to identify white space; stakeholders assume there's no competition \u2014 show them the map; need to define table-stakes features for your category.",
      "whenNotToUse": "Using competitor analysis as a substitute for user research (competitors aren't your users); copying competitor features without understanding why they exist; the market is so new there are no direct competitors (focus on adjacent solutions).",
      "karaokeCheck": "Competitive analysis feels productive but can become an infinite rabbit hole. Define your questions before you start. \"What are competitors doing?\" is too broad. \"Where do competitor users complain most?\" is actionable.",
      "companionTools": "Forum/Community Analysis (hear competitor user complaints), JTBD Interviews (understand why users choose competitors), Market Sizing (contextualize competitive share)"
    },
    {
      "id": "M43",
      "name": "Market Sizing (TAM/SAM/SOM)",
      "description": "Estimating the Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM) to quantify the revenue opportunity and validate business viability before committing resources.",
      "category": "experimentation",
      "risk": [
        "Vi"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Startup, Scaleup",
      "teamSize": "Solo",
      "userAccess": "None",
      "customerBase": "Pre-launch or Any",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Researcher time, market data sources (industry reports, government data), financial modeling",
      "effort": "Medium",
      "evidence": "Weak-Moderate",
      "whenToUse": "Evaluating whether a market opportunity is worth pursuing; investor conversations require market sizing; need to scope go-to-market strategy realistically; comparing multiple opportunity areas.",
      "whenNotToUse": "Using TAM to justify a bad idea (\"it's a $50B market!\" means nothing for your startup); the market is so new that sizing is pure speculation; you're past the sizing stage and need execution data.",
      "karaokeCheck": "TAM/SAM/SOM becomes karaoke when the numbers are fabricated to tell a story. If your SOM is \"just 1% of a $100B market\" \u2014 you haven't done market sizing, you've done wishful math. Bottom-up estimates from actual customer segments are the only credible approach.",
      "companionTools": "Competitive Analysis (ground market share assumptions), Pre-sales/LOI (validate willingness to pay within your SOM), Surveys (quantify segment sizes)"
    },
    {
      "id": "M44",
      "name": "Spike Solution",
      "description": "A time-boxed technical experiment to answer a specific feasibility question \u2014 can we do X with technology Y? Spikes are deliberately throwaway; the goal is knowledge, not code.",
      "category": "experimentation",
      "risk": [
        "F"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None",
      "customerBase": "Any",
      "time": "Hours to Days",
      "costLevel": "Time only",
      "costDrivers": "Engineer time for focused technical investigation",
      "effort": "Low-Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "An architectural decision depends on whether a technology can meet performance, accuracy, or integration requirements; the team is estimating \"2 weeks or 6 months\" and a spike can resolve the uncertainty; need to prove or disprove a technical assumption before committing to a design.",
      "whenNotToUse": "The technology is well-understood (just build it); you're using spikes to avoid committing to a decision (analysis paralysis with code); the question is about user value, not technical feasibility (use a prototype or Wizard of Oz).",
      "karaokeCheck": "Spikes have a strict time box and a specific question. If your \"spike\" has been running for two weeks and keeps expanding, it's not a spike anymore \u2014 it's an unplanned prototype. Define the exit criteria before you start.",
      "companionTools": "Proof of Concept (broader than a spike), Wizard of Oz (test user value while spike tests feasibility)"
    },
    {
      "id": "M45",
      "name": "Proof of Concept (PoC)",
      "description": "A working demonstration that a proposed solution is technically feasible and can deliver core functionality end-to-end. Broader than a spike \u2014 a PoC integrates multiple components to prove the system can work, not just one technology.",
      "category": "experimentation",
      "risk": [
        "F"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any (especially B2B enterprise where buyers need to see it work)",
      "companySize": "Any",
      "teamSize": "Small (2-5) or Cross-functional (5+)",
      "userAccess": "None to Low",
      "customerBase": "Any",
      "time": "1-2 weeks",
      "costLevel": "Medium",
      "costDrivers": "Engineering team time, infrastructure/environment setup, third-party API costs",
      "effort": "Medium-High",
      "evidence": "Strong",
      "whenToUse": "Multiple technical components need to work together and the integration is the risk; stakeholders need a tangible demonstration before approving investment; B2B sales process requires proof the solution works in the customer's environment.",
      "whenNotToUse": "A single technology question (use a spike instead); the risk is about user value, not technical feasibility (use a prototype or MVP); PoC becomes a backdoor to skip discovery and jump to building.",
      "karaokeCheck": "A PoC that nobody asked for is premature engineering. If your PoC answers \"can we build it?\" but nobody has validated \"should we build it?\", you've proved feasibility for something nobody wants. Validate value first.",
      "companionTools": "Spike Solution (more focused technical questions), Concierge MVP (validate value in parallel), Landing Page Test (validate demand while PoC validates feasibility)"
    },
    {
      "id": "M48",
      "name": "Pre-sales / Letter of Intent",
      "description": "Asking potential customers to commit money, a signed letter of intent, or a purchase order for a product that doesn't exist yet. The strongest possible validation of demand \u2014 people putting real budget behind real intent.",
      "category": "experimentation",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "B2B",
      "companySize": "Startup, Scaleup",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Moderate (requires prospect relationships)",
      "customerBase": "Pre-launch or Small",
      "time": "2-4 weeks",
      "costLevel": "Low",
      "costDrivers": "Sales/founder time for conversations, legal review for LOIs, CRM tooling",
      "effort": "Medium-High",
      "evidence": "Strong",
      "whenToUse": "Need to validate willingness to pay before building; investors want evidence of demand; B2B enterprise where verbal interest is cheap but budget commitment is the real signal; pricing validation.",
      "whenNotToUse": "B2C (individual consumers don't sign LOIs); you have no prospect relationships yet (build them first); asking for commitment too early in the relationship destroys trust; product requires a demo before prospects can evaluate.",
      "karaokeCheck": "A \"letter of intent\" with no financial commitment or cancellation cost is just a polite \"sounds interesting.\" Real pre-sales validation requires skin in the game \u2014 deposits, purchase orders, or signed contracts with teeth.",
      "companionTools": "Landing Page Test (wider demand signal), Concierge MVP (deliver value to pre-sale customers), Sales Call Analysis (identify buying objections)"
    },
    {
      "id": "M49",
      "name": "Crowdfunding Validation",
      "description": "Launching a campaign on platforms like Kickstarter or Indiegogo to validate demand through actual pre-purchase behavior. Combines marketing validation, demand testing, and initial revenue in one experiment.",
      "category": "experimentation",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "B2C (primarily), B2B (rarely)",
      "companySize": "Startup",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate (need to drive traffic to campaign)",
      "customerBase": "Pre-launch",
      "time": "4+ weeks (prep + campaign)",
      "costLevel": "Medium-High",
      "costDrivers": "Campaign video/creative production, platform fees (5-10%), marketing spend, fulfillment planning",
      "effort": "High",
      "evidence": "Strong",
      "whenToUse": "Physical or consumer product where pre-orders validate demand; need to raise initial capital AND validate simultaneously; the product story is compelling enough for crowdfunding audiences; want public market validation to attract investors or partners.",
      "whenNotToUse": "Software/SaaS (crowdfunding audiences expect physical products); B2B enterprise; you can't deliver on the timeline (failed fulfillment destroys reputation); your audience isn't on crowdfunding platforms.",
      "karaokeCheck": "A crowdfunding campaign that raises $10K from friends and family hasn't validated market demand \u2014 it validated your social network. Real signal comes from strangers backing the project. Track where your backers come from.",
      "companionTools": "Landing Page Test (test positioning before campaign), Community Analysis (validate audience exists on platform), Competitive Analysis (study successful campaigns in your category)"
    },
    {
      "id": "M50",
      "name": "Demand Testing (Umbrella)",
      "description": "An umbrella category for methods that measure real behavioral intent to purchase or use a product before it fully exists. Demand testing validates whether people will act, not just say they would. Encompasses Fake Door Tests (M23) and Landing Page Tests (M24) as specific implementations.",
      "category": "experimentation",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "Low-Moderate",
      "customerBase": "Any",
      "time": "Days to 2-4 weeks",
      "costLevel": "Low-Medium",
      "costDrivers": "Varies by specific method \u2014 see M23 (Fake Door) and M24 (Landing Page) for details",
      "effort": "Low-Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "You need behavioral evidence that demand exists before investing in building; stakeholders are debating demand based on opinions (let behavior settle it); want to test multiple value propositions or positioning approaches cheaply.",
      "whenNotToUse": "You already have demand evidence and need to validate usability or feasibility; the product requires explanation that a demand test can't provide; ethical or regulatory constraints prevent simulating a product.",
      "karaokeCheck": "Demand testing is only useful if you're willing to kill the idea when demand is low. If you'll build it regardless of results, don't waste time testing demand \u2014 own the conviction and move to feasibility.",
      "companionTools": "Fake Door Test (M23, lightweight demand signal), Landing Page Test (M24, deeper demand signal), Pre-sales (M48, B2B demand with financial commitment)"
    },
    {
      "id": "M63",
      "name": "Synthetic User Research (AI)",
      "description": "Using large language models to simulate user personas and generate synthetic research responses \u2014 interview answers, survey responses, or usability feedback \u2014 as a supplement to (never a replacement for) real user research.",
      "category": "experimentation",
      "risk": [
        "V"
      ],
      "stage": [
        "Explore"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Solo",
      "userAccess": "None",
      "customerBase": "Any",
      "time": "Hours",
      "costLevel": "Low",
      "costDrivers": "LLM API costs, researcher time for prompt design and critical evaluation",
      "effort": "Low",
      "evidence": "Weak",
      "whenToUse": "Stress-testing interview guides or survey questions before real research; generating initial hypotheses when user access is delayed; exploring edge-case personas you can't easily recruit; rehearsing synthesis and analysis workflows.",
      "whenNotToUse": "As a replacement for real user research \u2014 EVER; when decisions depend on the findings (synthetic data reflects training data, not your users); when stakeholders might treat synthetic findings as real evidence; for any regulated, safety-critical, or high-stakes domain.",
      "karaokeCheck": "WARNING \u2014 Synthetic user research is the highest-risk karaoke method in this entire catalog. It produces fluent, confident, plausible-sounding \"insights\" that are fabricated by a model trained on internet text, not generated by your actual users. Treating synthetic findings as real evidence is not just karaoke \u2014 it's hallucinated discovery. Every output must be labeled SYNTHETIC and validated with real users before any decision is made.",
      "companionTools": "User Interviews (ALWAYS validate synthetic outputs with real users), Assumption Mapping (frame synthetic outputs as assumptions to test), Surveys (validate synthetic hypotheses at scale)"
    },
    {
      "id": "M67",
      "name": "Sales-Led Prototype Testing",
      "description": "Bringing functional prototypes into real B2B sales conversations to test value proposition, pricing sensitivity, and competitive positioning with actual buyers who have real budget authority and genuine business needs.",
      "category": "experimentation",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Validate"
      ],
      "businessModel": "B2B",
      "companySize": "Scaleup, Enterprise",
      "teamSize": "Small (2-5)",
      "userAccess": "Moderate (requires active sales pipeline)",
      "customerBase": "Small+",
      "time": "2-4 weeks",
      "costLevel": "Medium",
      "costDrivers": "Prototype build time, sales team coordination, opportunity cost of using sales calls for testing",
      "effort": "Medium",
      "evidence": "Strong",
      "whenToUse": "B2B product where buyer feedback matters as much as user feedback; need to validate pricing and packaging with people who control budgets; sales team is hearing objections you need to understand; want to test competitive positioning in real buying situations.",
      "whenNotToUse": "No active sales pipeline; the prototype is too early to show buyers without damaging the brand; testing usability (buyers aren't users \u2014 use usability testing); sales team is resistant to using calls for research.",
      "karaokeCheck": "Sales-led testing conflates buyer feedback with user feedback. Buyers care about ROI, compliance, and integration. Users care about workflow and usability. If you only test with buyers, you'll build what sells but not what gets adopted.",
      "companionTools": "Sales Call Analysis (M8, mine existing call data), Usability Testing (test with actual users separately), Pre-sales/LOI (M48, convert interest to commitment)"
    },
    {
      "id": "M68",
      "name": "Dogfooding",
      "description": "Using your own product internally for real work \u2014 not staged demos, but actual daily reliance \u2014 to experience the same friction, gaps, and value that external users encounter.",
      "category": "experimentation",
      "risk": [
        "U",
        "F"
      ],
      "stage": [
        "Validate",
        "Optimize"
      ],
      "businessModel": "Any (strongest when your team matches target users)",
      "companySize": "Any",
      "teamSize": "Cross-functional (5+)",
      "userAccess": "None (you are the users)",
      "customerBase": "Any",
      "time": "Ongoing",
      "costLevel": "Time only",
      "costDrivers": "Team time using the product, lost productivity during rough patches, feedback collection overhead",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "Your team represents or approximates the target user; building developer tools, productivity software, or internal platforms; want to catch usability and reliability issues before users do; building empathy for the user experience across the team.",
      "whenNotToUse": "Your team is fundamentally different from target users (a team of engineers dogfooding a product for nurses doesn't work); dogfooding becomes an excuse to skip external user research; internal feedback is treated as representative of all user segments.",
      "karaokeCheck": "Dogfooding is only valid if you're honest about the gap between your team and your actual users. Your team has context, workarounds, and tolerance that real users don't. If dogfooding is your only feedback channel, you're building for yourselves.",
      "companionTools": "Usability Testing (test with real external users), Bug Tracking (formalize dogfooding findings), Beta Testing (expand beyond internal team)"
    },
    {
      "id": "M72",
      "name": "Beta Testing / Controlled Pilot",
      "description": "Releasing a product or feature to a limited group of real users under controlled conditions to validate functionality, usability, and value before full launch. Participants know they're testing pre-release software and accept rough edges in exchange for early access.",
      "category": "experimentation",
      "risk": [
        "V",
        "U",
        "F",
        "Vi"
      ],
      "stage": [
        "Validate",
        "Optimize"
      ],
      "businessModel": "Any",
      "companySize": "Any",
      "teamSize": "Cross-functional (5+)",
      "userAccess": "Moderate-High",
      "customerBase": "Small+",
      "time": "2-4 weeks",
      "costLevel": "Medium",
      "costDrivers": "Recruitment/selection of beta users, support infrastructure, feedback collection tools, engineering time for rapid fixes",
      "effort": "High",
      "evidence": "Strong",
      "whenToUse": "Product is functionally complete but untested with real users at scale; need to validate reliability, performance, and edge cases in real environments; want to build early advocates and collect testimonials; final validation gate before general availability.",
      "whenNotToUse": "Product isn't stable enough for real use (beta testers will churn if the experience is too broken); using beta as an excuse to launch unfinished product (\"it's just beta\"); no plan to act on beta feedback before launch.",
      "karaokeCheck": "Beta programs that collect hundreds of feedback items but change nothing before launch are theater. If you aren't prepared to delay launch based on beta findings, you're doing a soft launch, not a beta \u2014 call it what it is.",
      "companionTools": "Dogfooding (M68, internal testing before beta), Surveys (structured beta feedback), Cohort Analysis (compare beta user behavior to later cohorts)"
    },
    {
      "id": "M55",
      "name": "Cohort Analysis",
      "description": "Grouping users by a shared characteristic or time period (signup date, acquisition channel, feature adoption) and tracking their behavior over time to identify retention patterns, lifecycle trends, and the impact of product changes on specific segments.",
      "category": "analytics",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any",
      "companySize": "Scaleup, Enterprise",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None (existing data)",
      "customerBase": "Large (10K+)",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Analytics tool subscription, analyst time for segmentation and interpretation",
      "effort": "Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "Need to understand retention beyond vanity averages; comparing how different user segments perform over time; measuring whether a product change improved behavior for the cohort exposed to it; diagnosing why aggregate metrics are moving.",
      "whenNotToUse": "Not enough users per cohort for meaningful comparison; looking for causation (cohort analysis shows correlation \u2014 use experiments for causation); product is too new for longitudinal data.",
      "karaokeCheck": "Cohort analysis becomes karaoke when you slice data into tiny segments until you find one that looks good. If your \"best cohort\" has 12 users, you've found noise, not signal. Define your cohorts and hypotheses before you start slicing.",
      "companionTools": "Funnel Analysis (understand where cohorts drop off), A/B Testing (test interventions identified by cohort analysis), Surveys (understand why cohorts behave differently)"
    },
    {
      "id": "M56",
      "name": "Funnel Analysis",
      "description": "Mapping and measuring user progression through a defined sequence of steps (e.g., visit, signup, activation, purchase) to identify where users drop off and quantify the impact of each step on overall conversion.",
      "category": "analytics",
      "risk": [
        "V",
        "U",
        "Vi"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any",
      "companySize": "Any (requires product with analytics)",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None (existing data)",
      "customerBase": "Medium+",
      "time": "Days",
      "costLevel": "Low",
      "costDrivers": "Analytics tool subscription, analyst/PM time for funnel definition and interpretation",
      "effort": "Low-Medium",
      "evidence": "Moderate",
      "whenToUse": "Need to identify the biggest drop-off point in a user flow; quantifying the impact of a conversion problem before deciding what to fix; comparing conversion rates across segments, channels, or time periods.",
      "whenNotToUse": "User journey isn't linear (funnel analysis assumes a sequence); don't have enough volume at each step for meaningful rates; using funnel analysis to diagnose WHY users drop off (it only shows WHERE \u2014 use session recordings or interviews for why).",
      "karaokeCheck": "Funnel analysis tells you where users leave, not why. If you redesign a checkout page because of a 40% drop-off without understanding the reason, you might \"optimize\" the wrong thing. Pair funnel data with qualitative insight.",
      "companionTools": "Session Recording Analysis (M58, understand why users drop off), Heatmap Analysis (M59, see behavior on high-drop-off pages), A/B Testing (M20, test improvements), Usability Testing (diagnose friction)"
    },
    {
      "id": "M57",
      "name": "Feature Audit / Usage Analytics",
      "description": "Measuring which features users actually use, how often, and in what patterns \u2014 then comparing actual usage to assumed usage to identify underperforming features, hidden power features, and bloat candidates.",
      "category": "analytics",
      "risk": [
        "V",
        "Vi"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any",
      "companySize": "Any (requires instrumented product)",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None (existing data)",
      "customerBase": "Medium+",
      "time": "Days to 1-2 weeks",
      "costLevel": "Low",
      "costDrivers": "Analytics tool subscription, engineering time for instrumentation gaps, PM time for analysis",
      "effort": "Low-Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "Need to decide what to invest in, sunset, or improve; product has grown complex and you don't know what's actually used; planning a simplification initiative; want to identify features that correlate with retention or conversion.",
      "whenNotToUse": "Product is too new (not enough usage data to be meaningful); features are underused because of discoverability, not value (fix the UX before sunsetting); using low usage as the sole reason to kill a feature without understanding why it's unused.",
      "karaokeCheck": "Usage data without context is dangerous. A feature used by 3% of users that's critical for your highest-paying enterprise segment is more valuable than a feature used by 30% of free users. Always segment usage by customer value.",
      "companionTools": "Cohort Analysis (M55, segment usage by user type), Surveys (understand why features are or aren't used), User Interviews (deep dive on power users vs. non-users)"
    },
    {
      "id": "M58",
      "name": "Session Recording Analysis",
      "description": "Watching recordings of real user sessions to observe actual navigation patterns, confusion, rage clicks, dead ends, and workarounds. Reveals what users actually do versus what they say they do or what analytics aggregates suggest.",
      "category": "analytics",
      "risk": [
        "U"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any (digital products)",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None (passive recording of existing users, with consent)",
      "customerBase": "Medium+",
      "time": "Days",
      "costLevel": "Low",
      "costDrivers": "Session recording tool subscription, analyst/designer time for watching and tagging sessions",
      "effort": "Medium",
      "evidence": "Moderate-Strong",
      "whenToUse": "Need to understand WHY users drop off at a specific funnel step; investigating a usability problem identified by analytics; want to see real user behavior without the artificiality of moderated usability testing; onboarding optimization.",
      "whenNotToUse": "Using recordings as entertainment (\"look how confused this user is\") without action items; privacy-sensitive domains where recording is inappropriate; you need statistically significant patterns (recordings are qualitative \u2014 use analytics for quantitative).",
      "karaokeCheck": "Watching session recordings without a specific question is a time sink that feels like research. Define what you're looking for before you hit play. \"I'll watch 50 sessions and see what I find\" produces anecdotes, not insights.",
      "companionTools": "Funnel Analysis (M56, identify which flows to watch), Heatmap Analysis (M59, complement with aggregate patterns), Usability Testing (validate hypotheses from recordings)"
    },
    {
      "id": "M59",
      "name": "Heatmap Analysis",
      "description": "Visualizing aggregate user behavior on a page \u2014 where users click, how far they scroll, where they hover \u2014 to identify attention patterns, missed CTAs, and content engagement without watching individual sessions.",
      "category": "analytics",
      "risk": [
        "U"
      ],
      "stage": [
        "Optimize"
      ],
      "businessModel": "Any (digital products)",
      "companySize": "Any",
      "teamSize": "Solo or Small (2-5)",
      "userAccess": "None (passive tracking of existing users, with consent)",
      "customerBase": "Medium+",
      "time": "Days",
      "costLevel": "Low",
      "costDrivers": "Heatmap tool subscription, designer/analyst time for interpretation",
      "effort": "Low",
      "evidence": "Moderate",
      "whenToUse": "Need to understand if users are seeing important page elements; evaluating whether a redesign changed attention patterns; diagnosing why a CTA has low conversion (are users not seeing it or not wanting it?); comparing behavior across device types.",
      "whenNotToUse": "Page has very low traffic (heatmaps need aggregate data to be meaningful); using heatmaps to validate complex user journeys (heatmaps show single-page behavior, not flows); treating hover data as intent data (hovering doesn't mean interest).",
      "karaokeCheck": "Heatmaps are seductive \u2014 pretty colors that feel like insight. But a heatmap showing clicks concentrated on your nav bar doesn't tell you anything actionable. Use heatmaps to answer specific questions, not to generate decorative dashboards.",
      "companionTools": "Session Recording Analysis (M58, understand individual behavior behind aggregate patterns), A/B Testing (M20, test changes suggested by heatmap findings), Funnel Analysis (M56, understand page-level behavior in flow context)"
    }
  ],
  "tools": [
    {
      "id": "T31",
      "name": "Design Sprint",
      "description": "A 5-day structured process for rapidly moving from problem to tested prototype. Compresses months of diverge-converge-test into one week with a cross-functional team.",
      "category": "framework",
      "whenToSuggest": "Team is stuck, needs forced alignment and rapid prototype testing. Best for medium-to-large bets where the team needs shared understanding before committing.",
      "whenNotToSuggest": "The question can be answered with a single method in days; team already knows what to build and needs to execute; using sprints as a ritual when a focused workshop would suffice.",
      "karaokeWarning": "Design Sprints are the most karaoke'd framework in product. If your team runs quarterly sprints and nothing ships from them, you're doing innovation theater. Sprints work when there's a real, high-stakes question to answer \u2014 not as a recurring calendar event."
    },
    {
      "id": "T32",
      "name": "Assumption Mapping",
      "description": "Listing all assumptions behind a product idea, then prioritizing them by risk (how wrong could we be?) and importance (how much does it matter?). The highest-risk, highest-importance assumptions become your discovery agenda.",
      "category": "framework",
      "whenToSuggest": "Before choosing any discovery method \u2014 this is the \"what should we test?\" step. Start here when the team has a new idea and isn't sure where to focus.",
      "whenNotToSuggest": "The team already knows their riskiest assumption (just test it); over-mapping when action is needed.",
      "karaokeWarning": "Assumption mapping is productive when it leads to testing. If you produce a beautiful 2x2 matrix and then test the easiest assumption instead of the riskiest one, you've mapped without learning."
    },
    {
      "id": "T33",
      "name": "Opportunity Solution Trees (OST)",
      "description": "A visual tree mapping desired outcomes to opportunities (user needs) to solutions to experiments. Created by Teresa Torres. Forces teams to separate the outcome they want from the solutions they're exploring.",
      "category": "framework",
      "whenToSuggest": "Ongoing discovery where the team needs to connect experiments back to business outcomes. Best as a living document that evolves over time, not a one-time exercise.",
      "whenNotToSuggest": "One-off research projects; the team doesn't have a clear desired outcome to map to; using OSTs as decoration without updating them based on evidence.",
      "karaokeWarning": "An OST that hasn't been updated in a month is a poster, not a tool. The value is in the continuous mapping of evidence \u2192 decisions, not in the initial tree drawing."
    },
    {
      "id": "T39",
      "name": "Value Proposition Canvas",
      "description": "A structured template mapping customer jobs, pains, and gains against your product's pain relievers, gain creators, and products/services. Forces you to articulate fit between what users need and what you offer.",
      "category": "framework",
      "whenToSuggest": "Before concept testing or landing page tests \u2014 to clarify what value proposition you're actually testing. When the team can't articulate why a user would choose their product.",
      "whenNotToSuggest": "The team already has a clear, validated value proposition; using the canvas as a substitute for talking to users.",
      "karaokeWarning": "A Value Proposition Canvas filled in from the team's assumptions without user input is a hypothesis document, not a validated strategy. The canvas is only as good as the evidence behind each post-it."
    },
    {
      "id": "T40",
      "name": "Business Model Canvas",
      "description": "A 9-block framework mapping key partners, activities, resources, value propositions, customer relationships, channels, customer segments, cost structure, and revenue streams. Provides a holistic view of business viability.",
      "category": "framework",
      "whenToSuggest": "When testing Viability risk \u2014 especially for new products, pivots, or business model changes. Helps teams see the full picture beyond just the product.",
      "whenNotToSuggest": "Optimizing an existing, well-understood business model; using it as a substitute for financial modeling; filling it in once and never updating.",
      "karaokeWarning": "A Business Model Canvas workshop where everyone nods but nobody tests the assumptions afterward is strategic karaoke. The canvas identifies what needs testing \u2014 it doesn't validate anything by itself."
    },
    {
      "id": "T41",
      "name": "Lean Canvas",
      "description": "A startup-focused adaptation of the Business Model Canvas that replaces partners/activities/resources with Problem, Solution, Key Metrics, and Unfair Advantage. Designed for early-stage uncertainty.",
      "category": "framework",
      "whenToSuggest": "Startup or new venture teams exploring viability; when the problem and solution are both uncertain; as a quick alignment tool before deeper discovery.",
      "whenNotToSuggest": "Established products with known business models; enterprise contexts where the full Business Model Canvas is more appropriate; using Lean Canvas as a substitute for actually talking to customers.",
      "karaokeWarning": "Lean Canvas is designed to be filled in 20 minutes and revised weekly. If your Lean Canvas hasn't changed in 3 months, you're not learning \u2014 you're decorating."
    },
    {
      "id": "T51",
      "name": "Impact Mapping",
      "description": "A strategic planning technique mapping business goals \u2192 actors (who can help/hinder) \u2192 impacts (what behavior changes) \u2192 deliverables (what to build). Connects features to measurable business outcomes.",
      "category": "framework",
      "whenToSuggest": "When prioritizing what to discover \u2014 which features or initiatives matter most for the business goal. When the team is building features without clear connection to outcomes.",
      "whenNotToSuggest": "The connection between feature and outcome is already clear; using impact mapping as a substitute for user research on whether the feature works.",
      "karaokeWarning": "Impact maps that list every possible deliverable without testing whether the assumed impacts are real are wishful planning. The map should drive experiments, not bypass them."
    },
    {
      "id": "T64",
      "name": "Pre-mortem (Prospective Hindsight)",
      "description": "Imagining that the project has failed spectacularly, then working backward to identify what went wrong. Surfaces risks the team is too optimistic or too polite to raise normally.",
      "category": "framework",
      "whenToSuggest": "Before large bets \u2014 new products, major pivots, big investments. When the team seems overconfident or groupthink is a risk. Pairs well with stakeholder interviews.",
      "whenNotToSuggest": "Small, reversible decisions; the team is already pessimistic and needs momentum, not more risk identification; using pre-mortems to delay action.",
      "karaokeWarning": "A pre-mortem where everyone lists \"we didn't have enough budget\" as the failure mode is a waste. The value is in surfacing specific, surprising, testable risks \u2014 not in performing pessimism."
    },
    {
      "id": "T34",
      "name": "Story Mapping",
      "description": "A collaborative technique for mapping user activities, tasks, and stories along a horizontal narrative flow. Creates a shared understanding of the full user experience and helps prioritize what to build first (walking skeleton \u2192 MVP \u2192 iterations).",
      "category": "synthesis",
      "whenToSuggest": "After generative research, when the team needs to turn findings into a prioritized backlog. When planning a new product or major feature release.",
      "whenNotToSuggest": "You don't have enough user understanding yet (do research first); the product is a single-feature tool where mapping is overkill.",
      "karaokeWarning": ""
    },
    {
      "id": "T35",
      "name": "Customer Journey Mapping",
      "description": "Visualizing the end-to-end experience a user has with your product or service \u2014 from awareness through purchase, onboarding, usage, and support. Maps actions, touchpoints, emotions, and pain points across the entire lifecycle.",
      "category": "synthesis",
      "whenToSuggest": "After interviews or observations, when synthesizing the full user experience. When multiple teams (product, marketing, support) need a shared view of the customer experience. When identifying where the biggest experience gaps are.",
      "whenNotToSuggest": "You haven't talked to actual users yet (a journey map based on assumptions is fiction); mapping for decoration instead of decision-making.",
      "karaokeWarning": ""
    },
    {
      "id": "T36",
      "name": "Service Blueprinting",
      "description": "Extending journey mapping to include backstage processes, support systems, and organizational operations that enable the front-stage experience. Maps what users see AND what the organization does behind the scenes.",
      "category": "synthesis",
      "whenToSuggest": "After journey mapping, when you need to understand the operational complexity behind the experience. When service delivery involves multiple teams or systems. When diagnosing where internal breakdowns cause user pain.",
      "whenNotToSuggest": "The product is purely digital with no service component; you don't have the organizational knowledge to map backstage processes (do stakeholder interviews first).",
      "karaokeWarning": ""
    },
    {
      "id": "T37",
      "name": "Empathy Mapping",
      "description": "A structured template capturing what users Say, Think, Do, and Feel about a topic or experience. Quick synthesis tool for making interview or observation data tangible and shareable with the team.",
      "category": "synthesis",
      "whenToSuggest": "After user interviews \u2014 as a lightweight synthesis method. When the team needs to build empathy quickly without reading all the research notes. In workshops to align on user understanding.",
      "whenNotToSuggest": "As a substitute for proper qualitative analysis; when you have enough data for more rigorous synthesis (affinity diagramming, personas); when the team already has strong user empathy.",
      "karaokeWarning": ""
    },
    {
      "id": "T38",
      "name": "Persona Development",
      "description": "Creating archetypal user profiles based on research data \u2014 representing key behavior patterns, goals, frustrations, and contexts across your user base. Not demographics; behavior-based segments.",
      "category": "synthesis",
      "whenToSuggest": "After generative research reveals distinct user behavior patterns. When the team talks about \"users\" as a monolith and needs to segment. When design decisions need a shared reference for \"who are we building for?\"",
      "whenNotToSuggest": "Based on assumptions without research (assumption-based personas are fiction); when you have 2 users and don't need segmentation; when personas become static posters instead of living documents updated with new evidence.",
      "karaokeWarning": ""
    },
    {
      "id": "T-NEW",
      "name": "Affinity Diagramming",
      "description": "Clustering qualitative data (interview quotes, observations, feedback) into groups based on natural relationships, then naming the themes that emerge. The foundational synthesis method for turning raw qualitative data into structured insights.",
      "category": "synthesis",
      "whenToSuggest": "After ANY generative research \u2014 interviews, observations, diary studies, support ticket analysis. When you have lots of qualitative data and need to find patterns. In team workshops to collaboratively make sense of research.",
      "whenNotToSuggest": "You have quantitative data that needs statistical analysis, not clustering; the data set is too small to cluster meaningfully (3 interviews probably don't need formal affinity diagramming); using it to manufacture themes that confirm existing beliefs.",
      "karaokeWarning": ""
    },
    {
      "id": "T52",
      "name": "RICE Scoring",
      "description": "A scoring model that evaluates initiatives by Reach (how many users), Impact (how much per user), Confidence (how sure are you), and Effort (how much work). Produces a comparable score: (R x I x C) / E.",
      "category": "prioritization",
      "whenToSuggest": "When comparing 5+ competing initiatives and need a structured way to prioritize. When stakeholder advocacy is distorting prioritization (loudest voice wins). When you need transparency in how decisions are made.",
      "whenNotToSuggest": "You have 1-2 options (just decide); all options score similarly (the model isn't discriminating); using RICE mechanically without judgment (it's an input, not the answer); treating the Confidence score honestly is hard \u2014 teams routinely overestimate it.",
      "karaokeWarning": "RICE feels scientific because it has numbers. But the numbers are estimates, and estimates are opinions with decimal points. If your RICE scores aren't informed by actual discovery data (real Reach numbers, tested Impact, evidence-based Confidence), you're doing quantified guessing, not data-driven prioritization."
    },
    {
      "id": "T60",
      "name": "Continuous Interviewing",
      "description": "A weekly cadence of customer conversations \u2014 not project-based research, but an ongoing habit of staying connected to users. Typically 1-2 interviews per week, tied to current product decisions.",
      "category": "operating-practice",
      "whenToSuggest": "Always \u2014 this is the operating rhythm that prevents Discovery Karaoke. When a team has no regular user contact. As the foundation that makes all other methods more effective.",
      "whenNotToSuggest": "If the team already has regular, structured user contact; if interviews are happening but not connected to product decisions (that's karaoke too \u2014 talking to users without acting on what you hear).",
      "karaokeWarning": ""
    },
    {
      "id": "T61",
      "name": "Event Storming",
      "description": "A collaborative workshop where cross-functional teams map out a business process or system using domain events on sticky notes. Originally from Domain-Driven Design. Reveals complexity, dependencies, and misunderstandings across teams.",
      "category": "operating-practice",
      "whenToSuggest": "When mapping a complex domain before building; when multiple teams need to align on how a system works; when exploring Feasibility risk for a complex workflow. Pairs well with stakeholder interviews.",
      "whenNotToSuggest": "Simple features or flows that don't need domain modeling; the team already understands the domain well; no engineering representation in the room (Event Storming needs technical perspective).",
      "karaokeWarning": ""
    },
    {
      "id": "T62",
      "name": "Retrospective Analysis (Discovery)",
      "description": "Structured reflection on past discovery work \u2014 what methods produced useful evidence, what was wasted effort, where did assumptions persist despite evidence. Improves the team's discovery practice over time.",
      "category": "operating-practice",
      "whenToSuggest": "After completing a discovery cycle or launching a product/feature. When the team feels stuck in a discovery rut (same methods every time = karaoke). Quarterly review of discovery practices.",
      "whenNotToSuggest": "Too frequently (discovery cycles need time to produce results before reflecting); as a substitute for doing the discovery work itself.",
      "karaokeWarning": ""
    }
  ],
  "antiPatterns": [
    {
      "name": "The Interview Reflex",
      "pattern": "\"We need to understand this better \u2192 Let's do user interviews\"",
      "problem": "Interviews are generative/exploratory. If you already have a hypothesis, you may need evaluative or experimental methods instead.",
      "betterQuestions": "",
      "whenRight": "You genuinely don't understand the problem space, user behaviors are surprising, or you need to discover needs you didn't know existed.",
      "warningSigns": []
    },
    {
      "name": "The Design Sprint Default",
      "pattern": "\"We have a big question \u2192 Let's run a design sprint\"",
      "problem": "Design sprints are 5 days with 5-7 people. That's 25-35 person-days of effort. Many questions don't need that much.",
      "betterQuestions": "",
      "whenRight": "True ambiguity about the solution, cross-functional buy-in needed, or a genuinely new problem space with high stakes.",
      "warningSigns": []
    },
    {
      "name": "The Extended Beta",
      "pattern": "\"We're not sure about this \u2192 Let's run a 3-month beta\"",
      "problem": "Long betas delay decisions and often don't produce decisive evidence because they lack clear success criteria.",
      "betterQuestions": "",
      "whenRight": "You need sustained usage data, the product requires behavior change over time, or you're testing infrastructure/reliability at scale.",
      "warningSigns": []
    },
    {
      "name": "The Survey Spray",
      "pattern": "\"We need data \u2192 Let's send a survey\"",
      "problem": "Surveys are great for quantifying known patterns, terrible for discovering unknown ones. Survey design is harder than it looks.",
      "betterQuestions": "",
      "whenRight": "You've done qualitative research and want to quantify patterns, you need statistical significance, or you want to segment a large population.",
      "warningSigns": []
    },
    {
      "name": "The Prototype Trap",
      "pattern": "\"We should build a prototype to test this\"",
      "problem": "Prototypes test usability and interaction design. They don't test value, viability, or demand. Using a prototype to test \"do people want this?\" is using the wrong tool.",
      "betterQuestions": "",
      "whenRight": "You're testing novel interactions, navigation architecture, or complex workflows where usability risk is primary.",
      "warningSigns": []
    },
    {
      "name": "The Research Procrastination",
      "pattern": "\"We need to do more research before we can decide\"",
      "problem": "Discovery should reduce uncertainty to enable action. Perpetual research is avoidance disguised as diligence.",
      "betterQuestions": "",
      "whenRight": "",
      "warningSigns": []
    }
  ],
  "matrix": {
    "value": {
      "explore": [
        "M1",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "M7",
        "M8",
        "M10",
        "M42",
        "M63",
        "M65",
        "M66"
      ],
      "validate": [
        "M11",
        "M15",
        "M16",
        "M23",
        "M24",
        "M26",
        "M27",
        "M29",
        "M47",
        "M48",
        "M49",
        "M50",
        "M53",
        "M54",
        "M67",
        "M69",
        "M72"
      ],
      "optimize": [
        "M12",
        "M20",
        "M22",
        "M55",
        "M56",
        "M57",
        "M72"
      ],
      "top": {
        "explore": [
          "M1",
          "M2"
        ],
        "validate": [
          "M23",
          "M48"
        ],
        "optimize": [
          "M20",
          "M55"
        ]
      }
    },
    "usability": {
      "explore": [
        "M3",
        "M5",
        "M65",
        "M66"
      ],
      "validate": [
        "M13",
        "M14",
        "M15",
        "M16",
        "M17",
        "M18",
        "M19",
        "M27",
        "M28",
        "M29",
        "M54",
        "M68",
        "M70",
        "M71",
        "M72"
      ],
      "optimize": [
        "M20",
        "M21",
        "M56",
        "M58",
        "M59",
        "M68",
        "M72"
      ],
      "top": {
        "explore": [
          "M3",
          "M66"
        ],
        "validate": [
          "M16",
          "M18"
        ],
        "optimize": [
          "M58",
          "M59"
        ]
      }
    },
    "feasibility": {
      "explore": [
        "M9",
        "M42"
      ],
      "validate": [
        "M44",
        "M45",
        "M26",
        "M68"
      ],
      "optimize": [
        "M68",
        "M72"
      ],
      "top": {
        "explore": [
          "M9",
          "M42"
        ],
        "validate": [
          "M44",
          "M45"
        ],
        "optimize": [
          "M68",
          "M72"
        ]
      }
    },
    "viability": {
      "explore": [
        "M8",
        "M9",
        "M42",
        "M43"
      ],
      "validate": [
        "M23",
        "M24",
        "M48",
        "M49",
        "M50",
        "M67",
        "M69",
        "M72"
      ],
      "optimize": [
        "M12",
        "M20",
        "M55",
        "M56",
        "M57",
        "M72"
      ],
      "top": {
        "explore": [
          "M43",
          "M8"
        ],
        "validate": [
          "M48",
          "M24"
        ],
        "optimize": [
          "M56",
          "M57"
        ]
      }
    },
    "compliance": {
      "explore": [
        "M9",
        "M7",
        "M42"
      ],
      "validate": [
        "M18",
        "M19",
        "M47",
        "M72"
      ],
      "optimize": [
        "M57",
        "M12",
        "M58",
        "M68"
      ],
      "top": {
        "explore": [
          "M9",
          "M7"
        ],
        "validate": [
          "M19",
          "M72"
        ],
        "optimize": [
          "M57",
          "M12"
        ]
      }
    }
  },
  "diagnosticQuestions": [
    "We use the same 2-3 discovery methods for most initiatives",
    "Our discovery process is the same regardless of the risk type",
    "We can't explain WHY we chose a particular method (vs. alternatives)",
    "We default to interviews when we're unsure what to do",
    "Our discovery findings rarely surprise us",
    "We treat compliance/ethics as a checkbox, not a first-class risk",
    "We don't adjust evidence thresholds based on bet size",
    "Our 'discovery' is mainly about building confidence, not reducing uncertainty"
  ],
  "riskLabels": {
    "V": {
      "code": "V",
      "name": "Value/Desirability",
      "question": "Will customers buy/use this?",
      "color": "#2563eb"
    },
    "U": {
      "code": "U",
      "name": "Usability",
      "question": "Can users figure it out?",
      "color": "#7c3aed"
    },
    "F": {
      "code": "F",
      "name": "Feasibility",
      "question": "Can we build it?",
      "color": "#059669"
    },
    "Vi": {
      "code": "Vi",
      "name": "Viability",
      "question": "Does it work for the business?",
      "color": "#d97706"
    },
    "C": {
      "code": "C",
      "name": "Compliance & Ethics",
      "question": "Is it legal, ethical, responsible?",
      "color": "#dc2626"
    }
  }
};
