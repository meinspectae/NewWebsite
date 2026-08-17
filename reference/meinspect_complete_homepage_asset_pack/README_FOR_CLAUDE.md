MEINSPECT — COMPLETE HOMEPAGE ASSET PACK
=============================================

This pack is intended to be provided to Claude Code together with the individual section prompts.

FILES
-----

00_FULL_HOMEPAGE_WIREFRAME_REFERENCE.png
    Full tall homepage visual/wireframe. Use for overall hierarchy, proportions and visual direction.

00_MASTER_ASSET_BOARD.png
    Master visual asset board containing the apartment, phone, rooms, badges, floorplan, keys, plants and brand elements.

00_PHONE_CLEAN_TRANSPARENT.png
    CLEAN PHONE ONLY, transparent background, with no inspection UI. Use this as the primary phone object reference.
    Important: recreate the phone as a reusable 3D object if possible rather than embedding this PNG as the final hero object.

01_3d_apartment_reference.png
    Architectural cutaway apartment reference.

02_phone_with_ui_reference.png
    Reference for the inspection-phone UI states.

03_evidence_badges_reference.png
    Photo/GPS/Issues/Complete evidence labels.

04_living_room.jpg
05_kitchen.jpg
06_bedroom.jpg
07_bathroom.jpg
    Room photography/evidence references.

08_floorplan_blueprint.png
    Architectural floorplan reference.

09_keys_property_handover.png
    Keys + property handover reference.

10_plants_property_decor.png
    Interior plant/decor references.

11_logo_and_trust_elements.png
    MeInspect branding and trust indicator reference.

12_secondary_phone_home_screen.png
    Secondary clean phone/home-screen reference.

REF_01_HERO_SECTION.png
REF_02_PROPERTY_MEMORY.png
REF_03_EVIDENCE_TRAIL.png
REF_04_TENANT_LANDLORD.png
REF_05_HOW_IT_WORKS.png
REF_06_FEATURES.png
REF_07_REPORT.png
REF_08_CASE_STORIES.png
REF_09_PRICING.png
REF_10_FINAL_CTA.png
REF_11_INNER_PAGE_DESIGN_DIRECTION.png
    Section-level visual references extracted from the complete homepage presentation.

IMPLEMENTATION RULES
--------------------
1. Treat the PNG/JPG files as visual references and source imagery, not as permission to create a flat-image website.
2. The hero apartment and phone should be recreated as interactive 3D/R3F elements where practical.
3. The phone's inspection UI should preferably be recreated as HTML/CSS inside the 3D phone or as a composited UI layer so it stays sharp and responsive.
4. Room photographs may be used as actual image assets.
5. Use the MeInspect logo exactly as supplied where appropriate.
6. Do not invent additional brand colors. Use the existing MeInspect blue/green language.
7. Avoid generic AI-SaaS visuals: no random blobs, neon, holographic brains, excessive glassmorphism, or decorative 3D objects unrelated to property inspection.
8. Every animation should communicate inspection, evidence, verification, comparison, handover, or reporting.
9. Preserve the section hierarchy from the full homepage reference while improving spacing and responsiveness.
10. Use lazy loading and reduced 3D complexity on mobile.

SUGGESTED PROJECT ASSET MAPPING
-------------------------------
/public/assets/meinspect/
  references/
  property/
  phone/
  evidence/
  rooms/
  report/
  brand/
  decor/

You may reorganize the files into this structure when integrating them into the Next.js project.
