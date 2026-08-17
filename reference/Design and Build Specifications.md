##MeInspect Homepage — Master Design & Development Specification

You are building a premium, production-quality homepage redesign for MeInspect, a property condition reporting platform.

The existing MeInspect brand uses:

Primary blue from the logo
Verification green
White / off-white backgrounds
Black / dark navy typography

The redesign must preserve the existing MeInspect brand identity while completely modernizing the visual experience.

Core Design Concept

The central concept is:

"Know exactly what was there."

The website should visually communicate:

Property → Inspection → Evidence → Verification → Report → Protection

The homepage should feel like a combination of:

Premium property technology
Architectural visualization
High-end product presentation
Evidence/documentation system
Modern editorial website

DO NOT make this look like a generic SaaS website.

STRICT ANTI-AI-SLOP RULES

Avoid:

Generic purple/blue gradients
Floating glassmorphism cards everywhere
Random glowing blobs
AI brains
Holographic dashboards
Excessive neon
Abstract 3D spheres
Generic stock illustrations
Excessive rounded cards
Random floating UI elements
Overused gradient text
Excessive animations with no purpose

Every visual element must represent something related to an actual property inspection.

Examples:

GOOD:

Phone showing inspection
Apartment floor plan
Property photographs
GPS markers
Timestamp
Condition ratings
Digital signatures
Inspection report
Keys
Meter readings
Evidence trail

BAD:

Abstract glowing sphere
AI robot
Generic hologram
Random 3D blob
3D VISUAL LANGUAGE

The hero must contain a realistic 3D apartment/property environment and a realistic smartphone.

The phone is the main interactive object.

As the user scrolls:

Phone moves LEFT
Then RIGHT
Then LEFT again
Eventually returns toward the center

The movement must feel physically connected to the property.

The phone should not simply float independently.

When the phone moves toward a room:

That room becomes highlighted
Related evidence markers appear
The phone UI changes
Relevant inspection information becomes visible
TECH STACK

Use:

Next.js App Router
TypeScript
Tailwind CSS
React Three Fiber
@react-three/drei
GSAP
ScrollTrigger
Framer Motion
Lucide React

Use CSS transforms and GSAP for DOM animations.

Use React Three Fiber only where 3D is genuinely useful.

Do not make the entire page dependent on WebGL.

ARCHITECTURE

Use reusable components.

Suggested structure:

/app
/page.tsx

/components
/navbar
/hero
/property-memory
/evidence-trail
/tenant-landlord
/how-it-works
/features
/report
/case-studies
/pricing
/final-cta
/footer

/components/3d
/ApartmentScene
/InspectionPhone
/RoomHighlight
/EvidenceMarker
/PropertyModel

/hooks
/useScrollProgress
/useMediaQuery

/lib
/animations
/constants

RESPONSIVE DESIGN

Desktop:
The full 3D experience should be visible.

Tablet:
Reduce 3D complexity while retaining the main phone/apartment interaction.

Mobile:
Do NOT force heavy desktop WebGL.

Create a mobile-optimized experience where:

Phone remains prominent
3D apartment is simplified
Animations remain smooth
Sections become vertical
Horizontal scrolling is avoided
PERFORMANCE

Use:

lazy loading for 3D
dynamic imports for Three.js components
compressed textures
optimized GLTF/GLB assets
reduced geometry where possible
prefers-reduced-motion support

The site must remain usable if WebGL is unavailable.

DESIGN SYSTEM

Primary blue:
#1678B8

Deep blue:
#0B4267

Verification green:
#4FAF46

Dark:
#111111

Grey:
#6B7075

Off-white:
#F6F8F7

Use blue for structure and interaction.

Use green primarily for:

verified
completed
approved
signed
successful

Use IBM Plex Mono or a similar mono font for:

timestamps
GPS coordinates
inspection IDs
technical metadata

Use a clean modern sans-serif for headings and body.

IMPORTANT

Build the homepage section-by-section.

Do NOT modify other sections when implementing a specific section prompt.

Each section should:

Be independently reusable
Have clean TypeScript
Be responsive
Have meaningful animations
Match the overall MeInspect visual language
Integrate naturally with the previous and next section

Do not create placeholder-looking UI.

The final result should look like a real premium commercial website.